import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer,
  IconButton,
  Box,
} from "@mui/material";
import { Mail, Work } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/router";

import Link from "../../src/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface DrawerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Drawer = (props: DrawerProps) => {
  const { open, setOpen } = props;
  const router = useRouter();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const list = () => (
    <React.Fragment>
      <List
        sx={{
          width: 240,

          backgroundColor: "primary.dark",
        }}
      >
        <ListItem
          sx={{
            height: 150,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Box
            sx={{
              "> div": { marginTop: "1em", marginLeft: "6em" },
            }}
          >
            <Image
              src="/logo.svg"
              alt="logo"
              priority
              height={125}
              width={125}
            />
          </Box>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            color: "common.white",
          }}
          button
          onClick={() => {
            setOpen(!open);
            router.push("#contact");
          }}
        >
          <ListItemIcon>
            <Mail
              sx={{
                color: "common.white",
              }}
            />
          </ListItemIcon>
          <ListItemText primary={"CONTACT ME"} />
        </ListItem>

        <Divider />

        <ListItem
          sx={{
            color: "common.white",
          }}
          button
          onClick={() => {
            setOpen(!open);
            router.push("#mywork");
          }}
        >
          <ListItemIcon>
            <Work
              sx={{
                color: "common.white",
              }}
            />
          </ListItemIcon>
          <ListItemText primary={"MY WORK"} />
        </ListItem>
        <Divider />
      </List>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box m={2}>
          <Link
            href="https://github.com/Abhisheikh-G"
            target="_blank"
            rel="noopener"
          >
            <IconButton sx={{ color: "white" }}>
              <GitHubIcon fontSize="large" aria-label="Github Icon" />
            </IconButton>
          </Link>
        </Box>
        <Box m={2}>
          <Link
            href="https://www.linkedin.com/in/abhisheikh-gill/"
            target="_blank"
            rel="noopener"
          >
            <IconButton sx={{ color: "white" }}>
              <LinkedInIcon fontSize="large" aria-label="Linked In Icon" />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  );

  return (
    <SwipeableDrawer
      open={open}
      sx={{
        ".MuiDrawer-paper": {
          backgroundColor: "primary.dark",
        },
      }}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      {list()}
    </SwipeableDrawer>
  );
};

export default Drawer;
