import certificatesJSON from 'public/certificates.json';
import projectsJSON from 'public/projects.json';
import skillsJSON from 'public/skills.json';

import Certifications from '@/components/Certifications/Certifications';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Box from '@mui/material/Box';
import Contact from '@/components/Contact/Contact';
import Skills from '@/components/Skills/Skills';

const { projects } = projectsJSON;
const { skills } = skillsJSON;
const { certificates } = certificatesJSON;

export default function Index() {
  return (
    <Box>
      <Hero />
      <Skills skills={skills} />
      <Certifications certificates={certificates} />

      {/* <Projects projects={projects} /> */}
      <Contact />
    </Box>
  );
}
