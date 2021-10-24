import { Container, Typography, Box, Button, useTheme } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import Image from "next/image";

const useStyles: Function = makeStyles((theme: any) => ({
  highlight: {
    color: theme.palette.secondary.light,
  },
  secondaryHighlight: {
    color: theme.palette.custom.yellow,
  },
  underline: {
    width: "inherit",
    height: 5,
    background: `linear-gradient(to right, ${theme.palette.custom.yellow},${theme.palette.secondary.main})`,
    borderRadius: 10,
  },
  button: {
    margin: ".25em",
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    transition: "all 0.2s ease-in",
    textDecoration: "none",
    "&:hover": {
      borderColor: theme.palette.custom.yellow,
      color: theme.palette.custom.yellow,
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
    textTransform: "uppercase",
    background: `linear-gradient( ${theme.palette.primary.dark},${theme.palette.primary.main})`,
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "left",
  },
  avatarLarge: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  link: {
    marginLeft: "1em",
    marginRight: "1em",
    textDecoration: "none",

    color: theme.palette.common.white,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Hero() {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  // const [title, setTitle] = useState(false);
  // const [body, setBody] = useState(false);

  return (
    <React.Fragment>
      <Box className={classes.content}>
        <Container maxWidth="md" sx={{ mt: "2em" }}>
          <Typography variant="h5" gutterBottom={true} align="left">
            Hello, my name is
          </Typography>

          <Typography
            variant="h3"
            gutterBottom
            align="left"
            sx={{ marginBottom: theme.spacing(2), maxWidth: "8em" }}
          >
            <span className={classes.highlight}>Abhisheikh</span>{" "}
            <span className={classes.secondaryHighlight}>Gill</span>
            <Box className={classes.underline} />
          </Typography>

          <Typography
            variant="h6"
            component={"p"}
            gutterBottom={true}
            align="left"
            maxWidth="30em"
          >
            Nice to meet you, I'm a{" "}
            <span className={classes.highlight}>full stack web developer</span>{" "}
            and{" "}
            <span className={classes.secondaryHighlight}>
              ceritified IT solutions expert
            </span>{" "}
            from New Jersey, USA. I make applications using{" "}
            <span className={classes.highlight}>
              React.js, Next.js, Gatsby.js, Node.js, PostgreSQL and MongoDB
            </span>{" "}
            as well as provide expertise in{" "}
            <span className={classes.secondaryHighlight}>
              Linux System Administration, Networking, and CyberSecurity.
            </span>
          </Typography>
          <Box display="flex" justifyContent="flex-start" mt={2} mb={2}>
            <Image
              src="/code-slash.svg"
              height={50}
              width={50}
              alt="Code block icon"
            />
          </Box>

          <Box display="flex" justifyContent="flex-start">
            <Button
              onClick={() => router.push("#contact")}
              variant="outlined"
              className={classes.button}
            >
              Contact Me
            </Button>

            <Button
              variant="outlined"
              onClick={() => router.push("#mywork")}
              className={classes.button}
            >
              My Work
            </Button>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
