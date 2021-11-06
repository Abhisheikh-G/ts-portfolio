import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

import Link from "../../src/Link";
function Copyright() {
  return (
    <Typography
      variant="body1"
      align="center"
      sx={{ color: "secondary.light" }}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://abhisheikhgill.com/"
        rel="noopener"
        aria-label="Return Home"
      >
        Abhisheikh Gill
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        component="footer"
        sx={{
          padding: 3,
          marginTop: "auto",
          color: "primary.contrastText",
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box m={2}>
              <Link
                href="https://github.com/Abhisheikh-G"
                target="_blank"
                rel="noopener"
                aria-label="Link to Abhisheikh's Git Hub"
              >
                <IconButton sx={{ color: "secondary.main" }}>
                  <GitHubIcon fontSize="large" aria-label="Github Icon" />
                </IconButton>
              </Link>
            </Box>
            <Box m={2}>
              <Link
                href="https://www.linkedin.com/in/abhisheikh-gill/"
                target="_blank"
                rel="noopener"
                aria-label="Link to Abhisheikh's Linked In"
              >
                <IconButton sx={{ color: "secondary.main" }}>
                  <LinkedInIcon fontSize="large" aria-label="Linked In Icon" />
                </IconButton>
              </Link>
            </Box>
          </Box>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
