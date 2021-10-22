import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";

const useStyles: Function = makeStyles((theme: any) => ({
  section: {
    width: "100%",
    height: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    background: `linear-gradient( ${theme.palette.primary.main},${theme.palette.common.white})`,
  },
  skillBlock: {
    margin: theme.spacing(2),
    height: "7em",
    width: "7em",
    borderRadius: theme.spacing(20),
    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.complex,
    }),
    color: (props: any) => props.textColor,
    backgroundColor: (props: any) => props.color,
    "&:hover": {
      backgroundColor: (props: any) => props.hover,
    },
    // [theme.breakpoints.down("sm")]: {
    //   height: "5em",
    //   width: "5em",
    // },
  },
  skillImg: {
    height: "4em",
    width: "4em",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      height: "3.5em",
      width: "3.5em",
    },
  },
  skillText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: ".95rem",
    },
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.palette.common.white,
  },
  highlight: {
    color: theme.palette.secondary.main,
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
  const classes = useStyles(props);
  const { imgSrc, text, alt, color, textColor } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className={classes.skillBlock}
      style={{
        color: `${textColor}`,
        backgroundColor: `${color}`,
      }}
    >
      <Image
        src={`/${imgSrc}`}
        height={48}
        width={48}
        className={classes.skillImg}
        alt={`${alt}`}
      />
      <Typography variant="body2" component={"p"} className={classes.skillText}>
        {text}
      </Typography>
    </Box>
  );
}

interface SkillsProps {
  skills: Array<SkillBlock>;
}

export default function Skills(props: SkillsProps) {
  const classes = useStyles();
  const { skills } = props;
  return (
    <React.Fragment>
      <Box className={classes.section} component="section">
        <Container maxWidth="md">
          <Typography
            className={classes.title}
            variant="h3"
            component={"p"}
            gutterBottom
          >
            My <span className={classes.highlight}>Skills</span>
          </Typography>
          <Grid container justifyContent="space-evenly">
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
