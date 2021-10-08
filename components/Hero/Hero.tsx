import { Container, Typography, Box, Button } from "@mui/material";

import React from "react";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import Image from "next/image";

const useStyles: Function = makeStyles((theme: any) => ({
  highlight: {
    color: theme.palette.secondary.light,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    textTransform: "uppercase",
    background: `linear-gradient( ${theme.palette.primary.dark},${theme.palette.primary.main})`,
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
  // const [title, setTitle] = useState(false);
  // const [body, setBody] = useState(false);

  return (
    <React.Fragment>
      <Box className={classes.content}>
        <Container maxWidth="lg" sx={{ mt: "1em" }}>
          <Typography variant="h4" gutterBottom={true} align="center">
            Hello, my name is
            <span className={classes.highlight}>{` Abhisheikh Gill.`}</span>
          </Typography>

          <Typography
            variant="h6"
            component={"p"}
            gutterBottom={true}
            align="center"
          >
            Nice to meet you, I'm a{" "}
            <span className={classes.highlight}>full stack web developer</span>{" "}
            and{" "}
            <span className={classes.highlight}>
              ceritified IT solutions expert
            </span>{" "}
            from New Jersey, USA. I make applications using{" "}
            <span className={classes.highlight}>
              React.js, Next.js, Gatsby.js, Node.js, PostgreSQL and MongoDB
            </span>{" "}
            as well as provide expertise in{" "}
            <span className={classes.highlight}>
              Linux System Administration, Networking, and CyberSecurity.
            </span>
          </Typography>
          <Box display="flex" justifyContent="center" mb={2}>
            <Image
              src="/code-slash.svg"
              height={50}
              width={50}
              alt="Code block icon"
            />
          </Box>

          <Box display="flex" justifyContent="center">
            <Button
              onClick={() => router.push("#contact")}
              variant="outlined"
              sx={{ textDecoration: "none", mr: "1em" }}
              color="secondary"
            >
              Contact Me
            </Button>

            <Button
              variant="outlined"
              onClick={() => router.push("#mywork")}
              sx={{ textDecoration: "none", ml: "1em" }}
              color="secondary"
            >
              My Work
            </Button>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
