import React, { useState } from "react";
import EmailJSComponent from "../components/EmailJSComponent";
import {
  Grid,
  Typography,
  Card,
  Button,
  Box,
  Chip,
  Stack,
} from "@mui/material";

const socialLinks = [
  {
    title: "LinkedIn",
    subtitle: "@Luca Cirio",
    description: "Professional profile, experience and network.",
    href: "https://www.linkedin.com/in/luca-cirio-453485283/",
    buttonText: "Visit LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    bg: "linear-gradient(135deg, rgba(0,153,249,0.95), rgba(0,102,204,0.95))",
  },
  {
    title: "GitHub",
    subtitle: "@Lucaalex00",
    description: "Code repositories, projects and technical workflow.",
    href: "https://github.com/Lucaalex00",
    buttonText: "View GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    bg: "linear-gradient(135deg, rgba(40,40,40,0.95), rgba(15,15,15,0.95))",
  },
  {
    title: "Instagram",
    subtitle: "@Luca.alex_",
    description: "A more personal side and daily creative inspiration.",
    href: "https://www.instagram.com/luca.alex_/",
    buttonText: "Visit Instagram",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    bg: "linear-gradient(135deg, rgba(228,64,95,0.95), rgba(131,58,180,0.95))",
  },
  {
    title: "Curriculum Vitae",
    subtitle: "PDF Download",
    description: "Download my CV for a full overview of skills and experience.",
    href: "/Luca_Cirio_CV.pdf",
    buttonText: "Download CV",
    icon: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
    bg: "linear-gradient(135deg, rgba(198,40,40,0.95), rgba(123,20,20,0.95))",
    download: true,
  },
];

const ContactPage = () => {
  const [message, setMessage] = useState("");

  const handleSuccess = () => {
    setMessage("Email sent successfully!");
  };

  const handleError = () => {
    setMessage("An error occurred while sending the email.");
  };

  return (
    <section
      id="contacts"
      className="relative z-10 px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.8rem",
            }}
          >
            CONTACT
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
            Let’s build something solid together
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.72)",
              maxWidth: "760px",
              mx: "auto",
              fontSize: { xs: "0.98rem", md: "1.1rem" },
            }}
          >
            If you are looking for a developer who cares about clean interfaces,
            maintainable code and real user experience, feel free to reach out.
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
              label="Available for collaborations"
              sx={{
                bgcolor: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
              }}
            />
            <Chip
              label="Freelance mindset"
              sx={{
                bgcolor: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
              }}
            />
            <Chip
              label="Modern web solutions"
              sx={{
                bgcolor: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
              }}
            />
          </Stack>
        </div>

        {/* Social / contact cards */}
        <Grid container spacing={3}>
          {socialLinks.map((item) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={item.title}>
              <Card
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: 280,
                  p: 3,
                  borderRadius: "22px",
                  color: "#fff",
                  background: item.bg,
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "left",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 28px 70px rgba(0,0,0,0.40)",
                    borderColor: "rgba(255,255,255,0.25)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
                    pointerEvents: "none",
                  },
                }}
              >
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    sx={{
                      width: 62,
                      height: 62,
                      borderRadius: "18px",
                      bgcolor: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={`${item.title} logo`}
                      style={{ width: 34, height: 34, objectFit: "contain" }}
                    />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontFamily: "Gidole",
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.82)",
                      mb: 1.5,
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.78)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                <Button
                  href={item.href}
                  target={item.download ? undefined : "_blank"}
                  rel={item.download ? undefined : "noopener noreferrer"}
                  download={item.download || false}
                  variant="contained"
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    mt: 3,
                    alignSelf: "flex-start",
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
                  {item.buttonText}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Contact form area */}
        <Box
          sx={{
            mt: 8,
            borderRadius: "28px",
            p: { xs: 3, md: 5 },
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              textAlign: "center",
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            Contact Me
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.72)",
              textAlign: "center",
              maxWidth: "680px",
              mx: "auto",
              mb: 4,
            }}
          >
            Tell me about your project, your idea or the kind of collaboration
            you have in mind. I will get back to you as soon as possible.
          </Typography>

          <EmailJSComponent onSuccess={handleSuccess} onError={handleError} />

          {message && (
            <Box
              sx={{
                mt: 3,
                mx: "auto",
                maxWidth: "fit-content",
                px: 2.2,
                py: 1.2,
                borderRadius: "999px",
                fontWeight: 700,
                textAlign: "center",
                color: message.includes("successfully") ? "#86efac" : "#fca5a5",
                backgroundColor: message.includes("successfully")
                  ? "rgba(34,197,94,0.12)"
                  : "rgba(239,68,68,0.12)",
                border: message.includes("successfully")
                  ? "1px solid rgba(34,197,94,0.28)"
                  : "1px solid rgba(239,68,68,0.28)",
              }}
            >
              {message}
            </Box>
          )}
        </Box>
      </div>
    </section>
  );
};

export default ContactPage;