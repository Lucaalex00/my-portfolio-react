import React, { useRef, useState } from "react";
import {
  Typography,
  Box,
  Chip,
  Stack,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const skills = [
  {
    name: "HTML",
    logo: "Html.png",
    startDate: "2020-01",
    level: "Advanced",
    category: "Frontend",
    description:
      "Solid foundation for semantic structure, accessibility and clean content organization.",
  },
  {
    name: "CSS",
    logo: "Css.png",
    startDate: "2020-01",
    level: "Advanced",
    category: "Frontend",
    description:
      "Responsive layouts, styling systems and modern UI building with attention to detail.",
  },
  {
    name: "JavaScript",
    logo: "Js.png",
    startDate: "2020-01",
    level: "Advanced",
    category: "Frontend / Logic",
    description:
      "Core language for interactive interfaces, dynamic behavior and frontend application logic.",
  },
  {
    name: "React",
    logo: "React.png",
    startDate: "2024-05",
    level: "Advanced",
    category: "Frontend Framework",
    description:
      "Component-based UI development for modern, scalable and interactive web applications.",
  },
  {
    name: "Angular",
    logo: "Angular.png",
    startDate: "2024-11",
    level: "Advanced",
    category: "Frontend Framework",
    description:
      "Structured framework approach for large-scale frontend applications and enterprise workflows.",
  },
  {
    name: "Vue",
    logo: "Vue.png",
    startDate: "2024-03",
    level: "Intermediate",
    category: "Frontend Framework",
    description:
      "Flexible and lightweight frontend development with clean reactive patterns.",
  },
  {
    name: "Node.js",
    logo: "Node.png",
    startDate: "2024-08",
    level: "Advanced",
    category: "Backend",
    description:
      "JavaScript runtime used to build server-side logic and modern backend services.",
  },
  {
    name: "C#",
    logo: "Csharp.png",
    startDate: "2024-08",
    level: "Advanced",
    category: "Backend Language",
    description:
      "Structured object-oriented development for backend logic and software solutions.",
  },
  {
    name: ".NET",
    logo: "dotNET.svg",
    startDate: "2024-07",
    level: "Advanced",
    category: "Backend Framework",
    description:
      "Framework ecosystem for building robust backend applications and APIs.",
  },
  {
    name: "Python",
    logo: "Python.svg",
    startDate: "2024-09",
    level: "Intermediate",
    category: "Programming Language",
    description:
      "Versatile language for scripting, automation and broader development experimentation.",
  },
  {
    name: "PHP",
    logo: "PHP.png",
    startDate: "2024-04",
    level: "Intermediate",
    category: "Backend Language",
    description:
      "Backend development for dynamic websites and server-side application logic.",
  },
  {
    name: "Laravel",
    logo: "Laravel.svg",
    startDate: "2024-04",
    level: "Intermediate",
    category: "Backend Framework",
    description:
      "Elegant PHP framework for structured backend architecture and web application development.",
  },
  {
    name: "MySQL",
    logo: "MySQL.svg",
    startDate: "2024-04",
    level: "Advanced",
    category: "Database",
    description:
      "Relational database management for structured data, queries and persistence layers.",
  },
  {
    name: "SQLServer",
    logo: "SQLserver.svg",
    startDate: "2024-11",
    level: "Intermediate",
    category: "Database",
    description:
      "Database solution for enterprise-oriented storage, queries and backend integrations.",
  },
];

const Skills = () => {
  const sliderRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.offsetWidth * 0.8;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="skills" className="relative z-10 px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.8rem",
            }}
          >
            SKILLS
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
            A fast overview of my technical stack
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
            Scroll horizontally to explore the technologies I work with. Click
            on a card to open a quick detail view.
          </Typography>

          <Stack
            direction="row"
            spacing={1.2}
            justifyContent="center"
            useFlexGap
            flexWrap="wrap"
            sx={{ mt: 3 }}
          >
            <Chip
              label="Interactive"
              sx={{
                bgcolor: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
            <Chip
              label="Quick overview"
              sx={{
                bgcolor: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
            <Chip
              label="Frontend + Backend"
              sx={{
                bgcolor: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
          </Stack>
        </div>

        {/* Controls */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1.5,
            mb: 2.5,
          }}
        >
          <IconButton
            onClick={() => scrollSlider("left")}
            sx={{
              width: 48,
              height: 48,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.12)",
              backgroundColor: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            <ArrowBackIosNewRoundedIcon fontSize="small" />
          </IconButton>

          <IconButton
            onClick={() => scrollSlider("right")}
            sx={{
              width: 48,
              height: 48,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.12)",
              backgroundColor: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(10px)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.12)",
              },
            }}
          >
            <ArrowForwardIosRoundedIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Horizontal slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {skills.map((skill, index) => (
            <Box
              key={index}
              onClick={() => setSelectedSkill(skill)}
              sx={{
                minWidth: { xs: 260, sm: 300, md: 340 },
                maxWidth: 340,
                flex: "0 0 auto",
                cursor: "pointer",
                scrollSnapAlign: "start",
                borderRadius: "26px",
                p: 3,
                position: "relative",
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
                backdropFilter: "blur(14px)",
                transition:
                  "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.01)",
                  boxShadow: "0 28px 70px rgba(0,0,0,0.38)",
                  borderColor: "rgba(255,255,255,0.20)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01))",
                  pointerEvents: "none",
                },
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    width: 84,
                    height: 84,
                    borderRadius: "22px",
                    mb: 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <img
                    src={`/img/${skill.logo}`}
                    alt={skill.name}
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Typography
                  variant="overline"
                  sx={{
                    color: "rgba(255,255,255,0.58)",
                    letterSpacing: "0.18em",
                    fontSize: "0.72rem",
                  }}
                >
                  {skill.category}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontFamily: "Gidole",
                    mt: 0.5,
                    mb: 1.2,
                  }}
                >
                  {skill.name}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.75,
                    minHeight: 95,
                    fontFamily: "Gidole",
                    mb: 2.2,
                  }}
                >
                  {skill.description}
                </Typography>

                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                  <Chip
                    label={skill.level}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.08)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />

                  <Chip
                    label={new Date(skill.startDate)
                      .toLocaleDateString("it-IT", {
                        year: "numeric",
                        month: "long",
                      })
                      .replace(/^\w/, (c) => c.toUpperCase())}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.08)",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  />
                </Stack>
              </Box>
            </Box>
          ))}
        </div>

        {/* Hint */}
        <Typography
          sx={{
            mt: 2.5,
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.92rem",
          }}
        >
          Tap or click on a skill card to view more details.
        </Typography>
      </div>

      {/* Modal */}
      <Dialog
        open={Boolean(selectedSkill)}
        onClose={() => setSelectedSkill(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "26px",
            background:
              "linear-gradient(180deg, rgba(20,20,20,0.96), rgba(10,10,10,0.96))",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
            backdropFilter: "blur(20px)",
          },
        }}
      >
        {selectedSkill && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                pr: 2,
                pb: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  <img
                    src={`/img/${selectedSkill.logo}`}
                    alt={selectedSkill.name}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="overline"
                    sx={{
                      color: "rgba(255,255,255,0.55)",
                      letterSpacing: "0.18em",
                    }}
                  >
                    {selectedSkill.category}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                      fontFamily: "Gidole",
                    }}
                  >
                    {selectedSkill.name}
                  </Typography>
                </Box>
              </Box>

              <IconButton
                onClick={() => setSelectedSkill(null)}
                sx={{ color: "#fff" }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ pt: 1, pb: 4 }}>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>
                <Chip
                  label={`Level: ${selectedSkill.level}`}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                />
                <Chip
                  label={`Since ${new Date(selectedSkill.startDate)
                    .toLocaleDateString("it-IT", {
                      year: "numeric",
                      month: "long",
                    })
                    .replace(/^\w/, (c) => c.toUpperCase())}`}
                  sx={{
                    bgcolor: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                />
              </Stack>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 3 }} />

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.9,
                  fontFamily: "Gidole",
                }}
              >
                {selectedSkill.description}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </section>
  );
};

export default Skills;