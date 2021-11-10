import Box from "@mui/material/Box";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Certifications from "../components/Certifications/Certifications";
import Skills from "../components/Skills/Skills";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
const ContactDynamic = dynamic(() => import("../components/Contact/Contact"));
export default function Index(props: any) {
  const { projects, skills, certificates } = props;
  return (
    <Box>
      <Hero />
      <Skills skills={skills} />
      <Certifications certificates={certificates} />
      <Projects projects={projects} />
      <ContactDynamic />
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
