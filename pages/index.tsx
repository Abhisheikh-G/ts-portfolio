import * as React from "react";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import ProTip from "../src/ProTip";
// import Link from "../src/Link";
// import Copyright from "../src/Copyright";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";
// import { Project } from "../components/Projects/Projects";

import { GetStaticProps } from "next";

export default function Index(props: any) {
  const { projects, skills } = props;

  console.log(projects);
  return (
    <React.Fragment>
      <Box sx={{ mt: "7em" }} />
      <Hero />
      <Skills skills={skills} />

      <Projects projects={projects} />
      <Contact />
      <Footer />
      {/* <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js v5-beta with TypeScript example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container> */}
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let res = await fetch(`${process.env.URL}/projects.json`);
  let data = await res.json();
  const { projects } = data;

  res = await fetch(`${process.env.URL}/skills.json`);
  data = await res.json();
  const { skills } = data;
  return {
    props: {
      projects,
      skills,
    },
  };
};
