import * as React from "react";
import Box from "@mui/material/Box";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Certifications from "../components/Certifications/Certifications";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

import Link from "../src/Link";
import { GetStaticProps } from "next";

export default function Index(props: any) {
  const { projects, skills, certificates } = props;
  return (
    <Box>
      <Box sx={{ mt: "6em" }} />

      <Hero />
      <Skills skills={skills} />
      <Certifications certificates={certificates} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
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
