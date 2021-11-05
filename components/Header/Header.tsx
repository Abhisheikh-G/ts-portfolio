import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
// import Drawer from "../Drawer/Drawer";
// import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "../../src/Link";
import { Container } from "@mui/material";
import Underline from "../Underline/Underline";

const styles = {
  link: {
    backgroundColor: "secondary.main",
    color: "secondary.contrastText",
    p: 0.5,
    mx: 1,
    textDecoration: "none",
    transition: "all .2s ease-in-out",
    "&:hover": {
      backgroundColor: "primary.main",
      color: "custom.yellow",
    },
  },
};

export default function Header() {
  // const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Underline />
        <Toolbar
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              mb={1}
              mt={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Link href="/">
                <Image
                  priority
                  src="/logo.svg"
                  alt="logo"
                  height={100}
                  width={100}
                />
              </Link>
              <Box display="flex" justifyContent="space-evenly" maxWidth={300}>
                <Link
                  href="#contact"
                  sx={{
                    ...styles.link,
                  }}
                >
                  CONTACT
                </Link>
                <Link
                  href="#mywork"
                  sx={{
                    ...styles.link,
                  }}
                >
                  MY WORK
                </Link>
              </Box>
            </Box>

            {/* <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                size="large"
                aria-label="menu"
                onClick={() => setOpen(!open)}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
            <Drawer open={open} setOpen={setOpen} /> */}
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

{
  /* <Box>
<Link href="https://github.com/Abhisheikh-G" target="_blank">
  <IconButton sx={{ color: "white" }}>
    <GitHubIcon fontSize="large" />
  </IconButton>
</Link>
</Box> */
}
