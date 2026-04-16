import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const GITHUB_USERNAME = "Lucaalex00";

const FEATURED_PROJECTS = [
  {
    repo: "montanarosrls-shop",
    title: "Montanaro SRLS Shop",
    category: "E-commerce",
    shortDescription:
      "A modern e-commerce experience focused on usability, navigation clarity and product presentation.",
    tech: ["React", "Tailwind", "UI/UX", "Responsive"],
    liveUrl: "https://montanarosrls.netlify.app/",
  },
  {
    repo: "my-portfolio-react",
    title: "Portfolio Website",
    category: "Personal Brand",
    shortDescription:
      "This portfolio — built to showcase projects, technical profile and a modern digital presence. Cyberpunk lo-fi, fully custom.",
    tech: ["React", "Tailwind", "MUI", "Framer Motion"],
    liveUrl: "https://lucacirio.it",
  },
  {
    repo: "gamesandtoys-website",
    title: "Games and Toys Website",
    category: "Business Website",
    shortDescription:
      "A structured business website concept designed to present products and improve browsing experience.",
    tech: ["React", "Frontend", "Web Design"],
    liveUrl: "https://gamesandtoys-website.onrender.com/",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const repoMap = useMemo(() =>
    FEATURED_PROJECTS.reduce((acc, item) => {
      acc[item.repo] = item;
      return acc;
    }, {}),
  []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responses = await Promise.all(
          FEATURED_PROJECTS.map((item) =>
            fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${item.repo}`)
          )
        );
        const data = await Promise.all(
          responses.map((r) => (r.ok ? r.json() : null))
        );
        setProjects(
          data
            .filter(Boolean)
            .map((p) => ({ ...p, ...(repoMap[p.name] || {}) }))
        );
      } catch {
        setProjects(
          FEATURED_PROJECTS.map((item) => ({
            name: item.repo,
            html_url: `https://github.com/${GITHUB_USERNAME}/${item.repo}`,
            updated_at: new Date().toISOString(),
            stargazers_count: 0,
            ...item,
          }))
        );
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [repoMap]);

  return (
    <section id="projects" className="relative z-10 py-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-3">Work</span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 mb-4"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            Selected work built with{" "}
            <span style={{ color: "var(--neon-cyan)" }}>care</span>
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base"
            style={{ color: "var(--text-muted)", lineHeight: 1.85 }}
          >
            Clean interfaces, solid structure, real user experience. More on GitLab.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-16">
            <motion.div
              className="w-8 h-8 rounded-full border-2"
              style={{
                borderColor: "var(--neon-cyan)",
                borderTopColor: "transparent",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                className="cyber-card rounded-3xl flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Top accent line */}
                <div
                  className="h-px w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--neon-cyan), transparent)",
                  }}
                />

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span
                        className="text-xs block mb-1"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          color: "var(--text-muted)",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}
                      >
                        {project.category || "Web Project"}
                      </span>
                      <h3
                        className="font-bold text-base leading-tight"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          color: "var(--text-primary)",
                        }}
                      >
                        {project.title || project.name}
                      </h3>
                    </div>
                    <span
                      className="text-xs flex-shrink-0 px-2 py-0.5 rounded-full"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        color: "var(--neon-cyan)",
                        border: "1px solid var(--border-glow)",
                        background: "var(--neon-cyan-dim)",
                      }}
                    >
                      ★ {project.stargazers_count ?? 0}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-4 flex-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.shortDescription || project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(project.tech || []).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          background: "var(--neon-purple-dim)",
                          color: "var(--neon-purple)",
                          border: "1px solid rgba(155,93,229,0.2)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 flex-wrap mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          background: "var(--neon-cyan)",
                          color: "#08080f",
                          textDecoration: "none",
                          boxShadow: "0 0 16px var(--neon-cyan-glow)",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 28px var(--neon-cyan-glow)")}
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 16px var(--neon-cyan-glow)")}
                      >
                        Live ↗
                      </a>
                    )}
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        border: "1px solid var(--border-glow)",
                        color: "var(--neon-cyan)",
                        textDecoration: "none",
                        background: "transparent",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--neon-cyan-dim)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
