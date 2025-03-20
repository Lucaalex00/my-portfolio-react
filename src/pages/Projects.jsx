import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Grid, CircularProgress } from "@mui/material";

const GITHUB_USERNAME = "Lucaalex00"; // Il tuo nome utente GitHub
const GITHUB_TOKEN = import.meta.env.VITE_SECRET_GITHUB_KEY; // Sostituisci con il tuo token GitHub

// Nomi delle repository che vuoi recuperare
const SELECTED_REPOS = [
  "montanarosrls-shop",
  "Swords-and-Beers",
  "react_portfolio",
  "laravel-dc-comics",
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = [];

      for (let i = 0; i < SELECTED_REPOS.length; i++) {
        try {
          const response = await fetch(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${SELECTED_REPOS[i]}`,
            {
              headers: {
                "Authorization": `token ${GITHUB_TOKEN}`,
              },
            }
          );
          const data = await response.json();

          // Se la repository esiste, aggiungi i dati alla lista
          if (data.name) {
            fetchedProjects.push(data);
          }
        } catch (error) {
          console.error("Errore nel recupero della repository:", error);
        }
      }

      setProjects(fetchedProjects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" style={{ padding: "80px 40px", textAlign: "center", color: "#fff" }}>
      <Typography variant="h4" gutterBottom>I Miei Progetti</Typography>

      {loading ? (
        <CircularProgress color="primary" />
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={6}>
              <Card
                sx={{
                  backgroundColor: "#ffffff50",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Mantieni il contenuto distribuito verticalmente
                  height: "100%", // Card con altezza uguale
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // Centra verticalmente
                    height: "100%", // Assicurati che il contenuto occupi tutta la card
                    padding: "20px", // Padding extra per un miglior aspetto
                  }}
                >
                  <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: "10px", flex: 1 }}>
                    {project.description || "Nessuna descrizione disponibile."}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ alignSelf: "flex-center", width:"50%", m:"auto" }}
                  >
                    Scopri di più
                  </Button>
                  <Typography variant="caption" display="block" sx={{ marginTop: "10px", opacity: 0.7 }}>
                    Ultimo aggiornamento: {new Date(project.updated_at).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </section>
  );
};

export default Projects;
