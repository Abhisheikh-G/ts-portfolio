import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import Underline from "../Underline/Underline";
import Image from "next/image";
import React from "react";
import { ISkill } from "../../@types";

function SkillBlock(props: ISkill) {
  const { imgSrc, text, alt, color, textColor } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: theme.spacing(2),
        height: "7em",
        width: "7em",
        borderRadius: theme.spacing(2),

        filter: `invert(0%)  saturate(80%) hue-rotate(10deg) brightness(80%) contrast(50%)`,
        transition: theme.transitions.create(["all"], {
          duration: theme.transitions.duration.complex,
        }),
        "&:hover": {
          borderRadius: theme.spacing(20),
          filter: "none",
          backgroundColor: `${color}`,
        },
        color: `${textColor}`,
        backgroundColor: `${color}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        priority={true}
        src={`/${imgSrc}`}
        height={48}
        width={48}
        alt={`${alt}`}
      />
      <Typography variant="body2" component={"p"}>
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
              my: "1em",
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
