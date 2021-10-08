import * as React from "react";
import Box from "@mui/material/Box";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";

import { GetStaticProps } from "next";

export default function Index(props: any) {
  const { projects, skills } = props;
  return (
    <React.Fragment>
      <Box sx={{ mt: "7em" }} />
      <Hero />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async (_context) => {
  let res = await import("../public/projects.json");
  const { projects } = res;
  let skillRes = await import("../public/skills.json");
  const { skills } = skillRes;
  return {
    props: {
      projects,
      skills,
    },
  };
};
