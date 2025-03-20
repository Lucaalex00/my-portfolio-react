import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AboutMe = () => {
  return (
    <section id="aboutme" className="py-10 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Chi Sono</h2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Profilo Professionale */}
        <div className="w-full md:w-1/2">
          <Accordion> 
            <AccordionSummary sx={{ backgroundColor: "#646460ff", borderRadius:"4px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }} expandIcon={<ExpandMoreIcon sx={{color:"white",}} />}>
              <Typography sx={{color:"white",}}>📌 Profilo Professionale</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: "#646460ff"}}>
              <Typography sx={{backgroundColor: "#646460ff", color:"white", fontFamily:"Gidole"}}>
                Sono uno sviluppatore web specializzato in tecnologie moderne che cerca di aggiornarsi sempre per non rimanere indietro.
                Lavoro nel settore da diversi anni
                creando soluzioni web dinamiche e interattive.
                Amante della programmazione, dell'intelligenza artificiale e di tutto quello che circonda questo mondo in constante crescita.

              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* La Mia Persona */}
        <div className="w-full md:w-1/2">
          <Accordion>
            <AccordionSummary sx={{backgroundColor: "#646460ff", borderRadius:"4px",  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"}} expandIcon={<ExpandMoreIcon sx={{color:"white",}} />}>
              <Typography sx={{color:"white",}}>😊 La Mia Persona</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: "#646460ff",}}>
              <Typography sx={{backgroundColor: "#646460ff", color:"white", fontFamily:"Gidole"}}>
                Oltre alla programmazione, mi piace viaggiare, ascoltare musica
                e scoprire nuove tecnologie.
                Sono una persona curiosa e adoro mettermi alla prova in tutti i campi, che siano sport, hobby oppure sfide personali.
                Amo comunicare con i miei colleghi e cerco di tenere sempre il mood di tutti il più positivo possibile.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
