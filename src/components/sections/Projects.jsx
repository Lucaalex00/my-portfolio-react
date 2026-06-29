import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { featuredProjects, GITHUB_USERNAME } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";
import Pill from "../ui/Pill";
import { useLanguage } from "../../i18n/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const repoMap = useMemo(
    () => featuredProjects.reduce((acc, item) => ({ ...acc, [item.repo]: item }), {}),
    []
  );

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responses = await Promise.all(
          featuredProjects.map((item) =>
            fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${item.repo}`)
          )
        );
        const data = await Promise.all(responses.map((r) => (r.ok ? r.json() : null)));
        setProjects(data.filter(Boolean).map((p) => ({ ...p, ...(repoMap[p.name] || {}) })));
      } catch {
        setProjects(
          featuredProjects.map((item) => ({
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
        <SectionHeader
          label={t("projects.label")}
          title={t("projects.title")}
          highlight={t("projects.highlight")}
          subtitle={t("projects.subtitle")}
        />

        {loading ? (
          <div className="flex justify-center py-16">
            <motion.div
              className="w-8 h-8 rounded-full border-2"
              style={{ borderColor: "var(--accent)", borderTopColor: "transparent" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                className="surface-card rounded-2xl flex flex-col overflow-hidden group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div
                  className="h-1 w-full"
                  style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-2))", opacity: 0.7 }}
                />

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span
                        className="text-xs block mb-1"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase" }}
                      >
                        {t(`projects.items.${project.repo || project.name}.category`)}
                      </span>
                      <h3 className="font-bold text-base leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                        {project.title || project.name}
                      </h3>
                    </div>
                    <Pill tone="accent" mono className="!px-2 !py-0.5 flex-shrink-0">
                      ★ {project.stargazers_count ?? 0}
                    </Pill>
                  </div>

                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-muted)" }}>
                    {t(`projects.items.${project.repo || project.name}.shortDescription`)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(project.tech || []).map((t) => (
                      <Pill key={t} tone="secondary" className="!px-2 !py-0.5">{t}</Pill>
                    ))}
                  </div>

                  <div className="flex gap-2 flex-wrap mt-auto">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-4 py-2 rounded-full text-xs">
                        {t("projects.live")}
                      </a>
                    )}
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="btn-ghost px-4 py-2 rounded-full text-xs">
                      {t("projects.github")}
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
