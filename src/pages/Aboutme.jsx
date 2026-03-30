import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Stack,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutMe = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section id="aboutme" className="relative z-10 py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.8rem",
            }}
          >
            ABOUT ME
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
            A developer focused on impact, clarity and evolution
          </Typography>

          <Typography
            sx={{
              maxWidth: "760px",
              mx: "auto",
              color: "rgba(255,255,255,0.72)",
              fontSize: { xs: "0.98rem", md: "1.08rem" },
              lineHeight: 1.8,
            }}
          >
            I build digital experiences with a balance between clean design,
            modern development and real functionality. My goal is not just to
            create websites, but to deliver solutions that feel solid,
            intuitive and valuable.
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
              label="Modern Web Development"
              sx={{
                bgcolor: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
            <Chip
              label="UI Focus"
              sx={{
                bgcolor: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
            <Chip
              label="Continuous Learning"
              sx={{
                bgcolor: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
          </Stack>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Box
            sx={{
              alignSelf: "start",
              p: { xs: 0.5, md: 1 },
              borderRadius: "24px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 16px 45px rgba(0,0,0,0.20)",
            }}
          >
            <Accordion
              disableGutters
              elevation={0}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              sx={{
                bgcolor: "transparent",
                color: "#fff",
                borderRadius: "20px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "white",
                      transition: "transform 0.3s ease",
                    }}
                  />
                }
                sx={{
                  px: 3,
                  py: 1,
                  bgcolor: expanded === "panel1"
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.04)",
                  transition: "background-color 0.3s ease",
                  "& .MuiAccordionSummary-content": {
                    my: 1.5,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                  }}
                >
                  📌 Professional Profile
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: 3,
                  pb: 3,
                  pt: 1,
                  bgcolor: "transparent",
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.9,
                    fontFamily: "Gidole",
                  }}
                >
                  I am a web developer focused on modern technologies and on
                  constant growth. I like building dynamic, interactive and
                  well-structured digital products that combine usability,
                  performance and visual consistency. I am particularly drawn to
                  programming, artificial intelligence and everything related to
                  the continuous evolution of the digital world.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

         <Box
            sx={{
              alignSelf: "start",
              p: { xs: 0.5, md: 1 },
              borderRadius: "24px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 16px 45px rgba(0,0,0,0.20)",
            }}
          >
            <Accordion
              disableGutters
              elevation={0}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              sx={{
                bgcolor: "transparent",
                color: "#fff",
                borderRadius: "20px !important",
                overflow: "hidden",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "white",
                      transition: "transform 0.3s ease",
                    }}
                  />
                }
                sx={{
                  px: 3,
                  py: 1,
                  bgcolor: expanded === "panel2"
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.04)",
                  transition: "background-color 0.3s ease",
                  "& .MuiAccordionSummary-content": {
                    my: 1.5,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                  }}
                >
                  😊 Beyond Code
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: 3,
                  pb: 3,
                  pt: 1,
                  bgcolor: "transparent",
                }}
              >
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.9,
                    fontFamily: "Gidole",
                  }}
                >
                  Beyond development, I enjoy travelling, music, discovering new
                  ideas and challenging myself in different areas, from sport to
                  personal projects. I consider curiosity one of the most useful
                  qualities in both life and work. I also value communication
                  and team energy, and I always try to bring a constructive,
                  positive mindset into every collaboration.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;