import Box from "@mui/material/Box";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Certifications/Certifications";
import dynamic from "next/dynamic";
import projectsJSON from "../public/projects.json";
import skillsJSON from "../public/skills.json";
import certificatesJSON from "../public/certificates.json";

const Contact = dynamic(() => import("../components/Contact/Contact"));
const Skills = dynamic(() => import("../components/Skills/Skills"));

const { projects } = projectsJSON;
const { skills } = skillsJSON;
const { certificates } = certificatesJSON;

export default function Index() {
  return (
    <Box>
      <Hero />
      <Skills skills={skills} />
      <Certifications certificates={certificates} />
      <Projects projects={projects} />
      <Contact />
    </Box>
  );
}
