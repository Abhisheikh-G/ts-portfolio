import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Drawer from "../Drawer/Drawer";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "../../src/Link";
import { useTheme } from "@mui/material";

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ borderBottom: "1px solid white" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor: theme.palette.primary.dark,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer open={open} setOpen={setOpen} />

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
          <Box>
            <Link
              href="https://github.com/Abhisheikh-G"
              target="_blank"
              sx={{ color: "white" }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
