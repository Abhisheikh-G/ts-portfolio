import Image from 'next/image';
import React from 'react';

import Underline from '@/components/Underline/Underline';
import { ISkill } from '@/types/index';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';

function SkillBlock(props: ISkill) {
  const { imgSrc, text, alt, color } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        m: {
          xs: 1.5,
          sm: 2,
        },
      }}
    >
      <Box
        sx={{
          mb: {
            xs: 0.5,
            sm: 1,
          },
          height: {
            xs: '5em',
            sm: '6em',
          },
          width: {
            xs: '5em',
            sm: '6em',
          },
          borderRadius: theme.spacing(2),

          filter: `invert(0%)  saturate(80%) hue-rotate(10deg) brightness(80%) contrast(50%)`,
          transition: theme.transitions.create(['all'], {
            duration: theme.transitions.duration.complex,
          }),
          '&:hover': {
            borderRadius: theme.spacing(20),
            filter: 'none',
            backgroundColor: `${color}`,
          },
          backgroundColor: `${color}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          priority={true}
          src={`/${imgSrc}`}
          height={48}
          width={48}
          alt={`${alt}`}
        />
      </Box>
      <Typography
        variant="body2"
        component={'p'}
        align="center"
        sx={{
          color: 'secondary.main',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

interface SkillsProps {
  skills: Array<ISkill>;
}

export default function Skills(props: SkillsProps) {
  const { skills } = props;
  return (
    <React.Fragment>
      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 4,
        }}
        component="section"
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            gutterBottom
            width="5.5em"
            align="left"
            fontFamily="Zen Tokyo Zoo"
            sx={{
              my: '1em',
              color: 'common.white',
              textAlign: 'left',
              textTransform: 'uppercase',
            }}
          >
            <Box component="span" sx={{ color: 'secondary.main' }}>
              My
            </Box>{' '}
            <Box
              component={'span'}
              sx={{
                color: 'custom.yellow',
              }}
            >
              Skills
            </Box>
            <Underline />
          </Typography>

          <Grid container justifyContent="center">
            {skills.map((skill) => (
              <Grid item key={skill.text}>
                <SkillBlock
                  color={skill.color}
                  text={skill.text}
                  imgSrc={skill.imgSrc}
                  alt={skill.alt}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
