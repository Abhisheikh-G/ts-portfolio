import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import Underline from "../Underline/Underline";

const useStyles: Function = makeStyles((theme: any) => ({
  section: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // background: `linear-gradient( ${theme.palette.primary.main},${theme.palette.common.white})`,
    background: ` ${theme.palette.primary.dark}`,
  },
  skillBlock: {
    margin: theme.spacing(2),
    height: "7em",
    width: "7em",
    borderRadius: 0,
    backgroundColor: "grey",
    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.complex,
    }),
    "&:hover": {
      borderRadius: theme.spacing(5),
      marginTop: "5px",
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
    textAlign: "left",
    textTransform: "uppercase",
    color: theme.palette.common.white,
  },
  highlight: {
    color: theme.palette.secondary.main,
  },
  secondaryHighlight: {
    color: theme.palette.custom.yellow,
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
      sx={{
        color: `${textColor}`,
        backgroundColor: `${color}`,

        ["&:hover"]: {
          backgroundColor: `${color}`,
        },
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
            width="4.75em"
          >
            <span className={classes.highlight}>My</span>{" "}
            <span className={classes.secondaryHighlight}>Skills</span>
            <Underline />
          </Typography>
          <Grid container justifyContent="left">
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
