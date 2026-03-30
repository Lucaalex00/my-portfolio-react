import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  CircularProgress,
  Box,
  Chip,
  Stack,
} from "@mui/material";

const GITHUB_USERNAME = "Lucaalex00";

const FEATURED_PROJECTS = [
  {
    repo: "montanarosrls-shop",
    title: "Montanaro SRLS Shop",
    category: "E-commerce",
    shortDescription:
      "A modern e-commerce experience focused on usability, navigation clarity and product presentation.",
    tech: ["React", "Frontend", "UI/UX"],
    liveUrl: "https://montanarosrls.netlify.app/",
    featured: true,
  },
  {
    repo: "Swords-and-Beers",
    title: "Swords and Beers Game",
    category: "Brand / Showcase",
    shortDescription:
      "A themed web experience with strong visual identity, storytelling and engaging layout structure.",
    tech: ["React", "Design", "Responsive"],
    liveUrl: "",
    featured: true,
  },
  {
    repo: "my-portfolio-react",
    title: "Portfolio Website",
    category: "Personal Brand",
    shortDescription:
      "My personal portfolio built to showcase projects, technical profile and a modern digital presence.",
    tech: ["React", "Tailwind", "MUI"],
    liveUrl: "https://lucacirio.it",
    featured: false,
  },
  {
    repo: "gamesandtoys-website",
    title: "Games and Toys Website",
    category: "Business Website",
    shortDescription:
      "A structured website concept designed to present products and improve browsing experience.",
    tech: ["React", "Frontend", "Web Design"],
    liveUrl: "https://gamesandtoys-website.onrender.com/",
    featured: false,
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const repoMap = useMemo(() => {
    return FEATURED_PROJECTS.reduce((acc, item) => {
      acc[item.repo] = item;
      return acc;
    }, {});
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responses = await Promise.all(
          FEATURED_PROJECTS.map((item) =>
            fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${item.repo}`)
          )
        );

        const data = await Promise.all(
          responses.map(async (response) => {
            if (!response.ok) {
              return null;
            }
            return response.json();
          })
        );

        const mergedProjects = data
          .filter(Boolean)
          .map((project) => ({
            ...project,
            ...(repoMap[project.name] || {}),
          }));

        setProjects(mergedProjects);
      } catch (error) {
        console.error("Errore nel recupero dei progetti:", error);

        // fallback: mostra comunque i progetti base anche se GitHub fallisce
        setProjects(
          FEATURED_PROJECTS.map((item) => ({
            name: item.repo,
            html_url: `https://github.com/${GITHUB_USERNAME}/${item.repo}`,
            description: item.shortDescription,
            updated_at: new Date().toISOString(),
            stargazers_count: 0,
            language: item.tech?.[0] || "Web",
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
    <section
      id="projects"
      className="relative z-10 px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.8rem",
            }}
          >
            FEATURED PROJECTS
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 700,
              mt: 1,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              lineHeight: 1.1,
            }}
          >
            Selected work built with care and modern tools
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.72)",
              maxWidth: "760px",
              mx: "auto",
              fontSize: { xs: "0.98rem", md: "1.08rem" },
              lineHeight: 1.8,
            }}
          >
            A selection of projects that reflect my approach to web development:
            clean interfaces, solid structure, responsiveness and attention to
            real user experience.
          </Typography>
          <Typography
            sx={{
              color: "rgba(184, 183, 183, 0.72)",
              maxWidth: "760px",
              mx: "auto",
              fontSize: { xs: "0.88rem", md: "0.98rem" },
              lineHeight: 1.5,
            }}
          >
          More on GitLab : @luca.cirio 
          
          </Typography>
        </div>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item key={project.id || project.name || index} xs={12} md={6}>
                <Card
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    borderRadius: "24px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "#fff",
                    boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
                    transition:
                      "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 28px 70px rgba(0,0,0,0.38)",
                      borderColor: "rgba(255,255,255,0.18)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "1px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="overline"
                          sx={{
                            color: "rgba(255,255,255,0.58)",
                            letterSpacing: "0.18em",
                            fontSize: "0.72rem",
                          }}
                        >
                          {project.category || "Web Project"}
                        </Typography>

                        <Typography
                          variant="h5"
                          sx={{
                            mt: 0.5,
                            fontWeight: 700,
                            fontFamily: "Gidole",
                            lineHeight: 1.2,
                          }}
                        >
                          {project.title || project.name}
                        </Typography>
                      </Box>

                      {project.featured && (
                        <Chip
                          label="Featured"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.08)",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,0.12)",
                          }}
                        />
                      )}
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255,255,255,0.76)",
                        lineHeight: 1.8,
                        mb: 2.5,
                        fontFamily: "Gidole",
                      }}
                    >
                      {project.shortDescription ||
                        project.description ||
                        "No description available."}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      flexWrap="wrap"
                      sx={{ mb: 3 }}
                    >
                      {(project.tech || [])
                        .slice(0, 4)
                        .map((item) => (
                          <Chip
                            key={item}
                            label={item}
                            size="small"
                            sx={{
                              bgcolor: "rgba(255,255,255,0.06)",
                              color: "#fff",
                              border: "1px solid rgba(255,255,255,0.10)",
                            }}
                          />
                        ))}

                      {project.language && !(project.tech || []).includes(project.language) && (
                        <Chip
                          label={project.language}
                          size="small"
                          sx={{
                            bgcolor: "rgba(255,255,255,0.06)",
                            color: "#fff",
                            border: "1px solid rgba(255,255,255,0.10)",
                          }}
                        />
                      )}
                    </Stack>

                    <Box sx={{ mt: "auto" }}>
                      <Stack
                        direction="row"
                        spacing={2}
                        useFlexGap
                        flexWrap="wrap"
                        sx={{
                          mb: 2.5,
                          color: "rgba(255,255,255,0.58)",
                          fontSize: "0.9rem",
                        }}
                      >
                        <Typography variant="caption" sx={{ color: "inherit" }}>
                          Updated:{" "}
                          {project.updated_at
                            ? new Date(project.updated_at).toLocaleDateString()
                            : "N/A"}
                        </Typography>

                        <Typography variant="caption" sx={{ color: "inherit" }}>
                          Stars: {project.stargazers_count ?? 0}
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
                        {project.liveUrl && (
                          <Button
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            sx={{
                              borderRadius: "999px",
                              px: 2.4,
                              py: 1,
                              textTransform: "none",
                              fontWeight: 600,
                              bgcolor: "#fff",
                              color: "#111",
                              boxShadow: "none",
                              "&:hover": {
                                bgcolor: "rgba(255,255,255,0.92)",
                                boxShadow: "none",
                              },
                            }}
                          >
                            Live Preview
                          </Button>
                        )}

                        <Button
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          sx={{
                            borderRadius: "999px",
                            px: 2.4,
                            py: 1,
                            textTransform: "none",
                            fontWeight: 600,
                            color: "#fff",
                            borderColor: "rgba(255,255,255,0.20)",
                            "&:hover": {
                              borderColor: "rgba(255,255,255,0.45)",
                              backgroundColor: "rgba(255,255,255,0.04)",
                            },
                          }}
                        >
                          View Repository
                        </Button>
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </section>
  );
};

export default Projects;