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

export default function StickyFooter() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        component="footer"
        sx={{
          padding: 3,
          marginTop: "auto",
          backgroundColor: "primary.dark",
          color: "primary.contrastText]",
        }}
      >
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
      </Box>
    </Box>
  );
}
