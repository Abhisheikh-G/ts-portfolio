import Box from "@mui/material/Box";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Certifications/Certifications";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
const Contact = dynamic(() => import("../components/Contact/Contact"));
const Skills = dynamic(() => import("../components/Skills/Skills"));

export default function Index(props: any) {
  const { projects, skills, certificates } = props;
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

export const getStaticProps: GetStaticProps = async (_context) => {
  let { projects } = await import("../public/projects.json");

  let { skills } = await import("../public/skills.json");

  let { certificates } = await import("../public/certificates.json");

  return {
    props: {
      projects,
      skills,
      certificates,
    },
  };
};
