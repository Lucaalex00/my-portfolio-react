import React, { useState } from "react";
import EmailJSComponent from "../components/EmailJSComponent";
import { Grid, Typography, Card, Button } from "@mui/material";

const ContactPage = () => {
  const [message, setMessage] = useState(''); //SUCCESS or ERROR

  // Success callback
  const handleSuccess = () => {
    setMessage("Email sent successfully!");
  };

  // Error callback
  const handleError = () => {
    setMessage("An error occurred while sending the email.");
  };

  return (
    <div id="contacts" className="contact-page z-1 py-20">
      <div className="contact-content mx-5 z-1">
        <Grid container spacing={3} justifyContent="center">
          {/* LinkedIn Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: "#0099f9",
                color: "#fff",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn logo"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography variant="h6" sx={{ mt: 2,fontFamily:"Gidole" }}>
                LinkedIn
              </Typography>
              <Typography variant="body2">@Luca Cirio</Typography>
              <Button
                href="https://www.linkedin.com/in/luca-cirio-453485283/"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Visit LinkedIn
              </Button>
            </Card>
          </Grid>

          {/* GitHub Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub logo"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography variant="h6" sx={{ mt: 2,fontFamily:"Gidole" }}>
                GitHub
              </Typography>
              <Typography variant="body2">@Lucaalex00</Typography>
              <Button
                href="https://github.com/Lucaalex00"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Visit GitHub
              </Button>
            </Card>
          </Grid>

          {/* Instagram Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: "#e4405f",
                color: "#fff",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram logo"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography variant="h6" sx={{ mt: 2,fontFamily:"Gidole" }}>
                Instagram
              </Typography>
              <Typography variant="body2">@Luca.alex_</Typography>
              <Button
                href="https://www.instagram.com/luca.alex_/"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Visit Instagram
              </Button>
            </Card>
          </Grid>

          {/* PDF CV Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                backgroundColor: "#c62828",
                color: "#fff",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF logo"
                style={{ width: "50px", height: "50px" }}
              />
              <Typography variant="h6" sx={{ mt: 2,fontFamily:"Gidole" }}>
                Download CV
              </Typography>
              <Typography variant="body2">Curriculum Vitae</Typography>
              <Button
                href="/Luca_Cirio_CV.pdf"
                download
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Download CV
              </Button>
            </Card>
          </Grid>
        </Grid>
      </div>

      {/* Contact Form */}
      <div className="contact-form ">
        <Typography variant="h5" sx={{ mt: 4, mb: 2, textAlign: "center" }}>
          Contact Me
        </Typography>

        {/* Render EmailJSComponent and pass the success/error handlers */}
        <EmailJSComponent onSuccess={handleSuccess} onError={handleError} />

        {/* Display success or error message */}
        {message && (
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: message.includes("successfully") ? "green" : "red",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {message}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
