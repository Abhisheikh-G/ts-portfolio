import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

import Link from "../../src/Link";
function Copyright() {
  return (
    <Typography variant="body1" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://abhisheikhgill.com/">
        Abhisheikh Gill
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles: Function = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box m={2}>
              <Link href="https://github.com/Abhisheikh-G" target="_blank">
                <IconButton sx={{ color: "white" }}>
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Link>
            </Box>
            <Box m={2}>
              <Link
                href="https://www.linkedin.com/in/abhisheikh-gill/"
                target="_blank"
              >
                <IconButton sx={{ color: "white" }}>
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Link>
            </Box>
          </Box>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
