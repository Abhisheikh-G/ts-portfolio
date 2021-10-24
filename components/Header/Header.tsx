import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Drawer from "../Drawer/Drawer";
// import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "../../src/Link";
import { Container, useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ borderBottom: "1px solid white" }}>
        <Toolbar
          sx={{
            backgroundColor: theme.palette.primary.dark,
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box mb={1} mt={1}>
              <Link href="/">
                <Image
                  priority
                  src="/logo.svg"
                  alt="logo"
                  height={100}
                  width={100}
                />
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                size="large"
                aria-label="menu"
                onClick={() => setOpen(!open)}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
            <Drawer open={open} setOpen={setOpen} />
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
