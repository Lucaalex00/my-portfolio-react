import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

const skills = [
  { name: "HTML", logo: "Html.png", startDate: "2020-01" },
  { name: "CSS", logo: "Css.png", startDate: "2020-01" },
  { name: "JavaScript", logo: "Js.png", startDate: "2020-01" },
  { name: "React", logo: "React.png", startDate: "2024-05" },
  { name: "Angular", logo: "Angular.png", startDate: "2024-11" },
  { name: "Vue", logo: "Vue.png", startDate: "2024-03" },
  { name: "Node.js", logo: "Node.png", startDate: "2024-08" },
  { name: "C#", logo: "Csharp.png", startDate: "2024-08" },
  { name: ".NET", logo: "dotNET.svg", startDate: "2024-07" },
  { name: "Python", logo: "Python.svg", startDate: "2024-09" },
  { name: "PHP", logo: "PHP.png", startDate: "2024-04" },
  { name: "Laravel", logo: "Laravel.svg", startDate: "2024-04" },
  { name: "MySQL", logo: "MySQL.svg", startDate: "2024-04" },
  { name: "SQLServer", logo: "SQLserver.svg", startDate: "2024-11" },
];

const Skills = () => {
  return (
    <section id="skills" style={{ padding: "60px 20px", textAlign: "center", color: "#fff" }}>
      <Typography variant="h4" gutterBottom>Le Mie Competenze</Typography>

      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card 
              sx={{ 
                backgroundColor: "#646460aa", 
                color: "#fff", 
                borderRadius: "8px", 
                transition: "transform 0.3s ease-in-out", 
                "&:hover": { 
                  transform: "scale(1.05)", 
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.7)" 
                } 
              }}
            >
              <CardContent sx={{ textAlign: "center", padding: "16px" }}>
                <img 
                  src={`/img/${skill.logo}`} 
                  alt={skill.name} 
                  style={{ width: "80px", height: "60px", marginBottom: "12px", margin:"auto" }} 
                />
                <Typography variant="h5" sx={{fontFamily:"Gidole"}} gutterBottom>
                  {skill.name}
                </Typography>
                <Typography variant="caption" display="block" sx={{ color:"white", marginTop: "10px", opacity:"0.7",fontFamily:"Gidole"}}>
                  {new Date(skill.startDate).toLocaleDateString("it-IT", { year: "numeric", month: "long" }).replace(/^\w/, (c) => c.toUpperCase())}
                </Typography>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;
