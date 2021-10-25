import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import Underline from "../Underline/Underline";
import Image from "next/image";
import React from "react";

const Skill = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  height: "7em",
  width: "7em",
  borderRadius: theme.spacing(2),
  backgroundColor: "grey",
  filter: `invert(0%)  saturate(80%) hue-rotate(10deg) brightness(80%) contrast(50%)`,
  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.complex,
  }),
  "&:hover": {
    borderRadius: theme.spacing(20),
    filter: "none",
  },
}));

const SkillImage = styled(Image)(({ theme }) => ({
  height: "4em",
  width: "4em",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    height: "3.5em",
    width: "3.5em",
  },
  "&:hover": {
    filter: "none",
  },
}));

interface SkillBlock {
  imgSrc: string;
  text: string;
  alt: string;
  color: string;
  textColor: string;
}

function SkillBlock(props: SkillBlock) {
  const { imgSrc, text, alt, color, textColor } = props;
  return (
    <Skill
      sx={{
        color: `${textColor}`,
        backgroundColor: `${color}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ["&:hover"]: {
          backgroundColor: `${color}`,
        },
      }}
    >
      <SkillImage
        priority={true}
        src={`/${imgSrc}`}
        height={48}
        width={48}
        alt={`${alt}`}
      />
      <Typography variant="body2" component={"p"}>
        {text}
      </Typography>
    </Skill>
  );
}

interface SkillsProps {
  skills: Array<SkillBlock>;
}

export default function Skills(props: SkillsProps) {
  const { skills } = props;
  return (
    <React.Fragment>
      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 8,
          backgroundColor: "primary.dark",
        }}
        component="section"
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            gutterBottom
            width="4.75em"
            align="left"
            sx={{
              marginTop: "1em",
              color: "common.white",
              textAlign: "left",
              textTransform: "uppercase",
            }}
          >
            <Box component="span" sx={{ color: "secondary.main" }}>
              My
            </Box>{" "}
            <Box
              component={"span"}
              sx={{
                color: "custom.yellow",
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
                  textColor={skill.textColor}
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
