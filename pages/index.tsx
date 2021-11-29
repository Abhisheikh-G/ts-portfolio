import { certificates } from 'public/certificates.json';
import { projects } from 'public/projects.json';
import { skills } from 'public/skills.json';
import Certifications from '@/components/Certifications/Certifications';
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Box from '@mui/material/Box';
import Contact from '@/components/Contact/Contact';
import Skills from '@/components/Skills/Skills';

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
