import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Drawer from "../Drawer/Drawer";
import { useTheme } from "@mui/material";

export default function ButtonAppBar() {
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
            <MenuIcon />
          </IconButton>
          <Drawer open={open} setOpen={setOpen} />

          <Box ml={1} mt={1}>
            <Image
              priority
              src="/logo.svg"
              alt="logo"
              height={100}
              width={100}
            />
          </Box>
          <Box height={25} width={25} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
