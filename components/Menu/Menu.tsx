import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import Mail from "@mui/icons-material/Mail";
import Work from "@mui/icons-material/Work";
import Underline from "../Underline/Underline";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "../../src/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
import Image from "next/image";

import TrapFocus from "@mui/material/Unstable_TrapFocus";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
const styles = {
  menu: {
    background: "background.default",
  },
  link: {
    color: "secondary.main",
    p: 0.5,
    mx: 0.5,
    textDecoration: "none",
    transition: "all .2s ease-in-out",
    "&:hover": {
      background: (theme: any) =>
        `linear-gradient(to right, ${theme.palette.custom.yellow}, ${theme.palette.secondary.main})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },
  icon: {
    color: "secondary.main",
    mx: 0.5,
    fontSize: {
      xs: "3em",
    },
    transition: "all .2s ease-in-out",
    "&:hover": {
      color: "custom.yellow",
    },
  },
};

type Props = React.PropsWithChildren<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>;

const Menu: React.FC<Props> = ({ open, setOpen }) => {
  const router = useRouter();
  console.log(router.asPath);
  const list = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <List
        sx={{
          backgroundColor: "background.default",
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
            <Fade in={true} timeout={1000}>
              <Link
                href="/"
                onClick={() => {
                  setOpen(!open);
                  window.scrollTo(0, 0);
                  // router.push("#contact");
                }}
              >
                <Image
                  src="/logo.svg"
                  alt="logo"
                  priority
                  height={125}
                  width={125}
                />
              </Link>
            </Fade>
          </Box>
        </ListItem>

        <Underline />

        <Fade in={true} timeout={1500}>
          <ListItem
            sx={{
              ...styles.link,
            }}
            button
            onClick={() => {
              setOpen(!open);
              router.push("/#contact");
            }}
          >
            <ListItemIcon>
              <Mail
                sx={{
                  color: "secondary.main",
                }}
              />
            </ListItemIcon>
            <Typography variant="body1" fontSize="2em">
              CONTACT ME
            </Typography>
          </ListItem>
        </Fade>
        <Divider />

        <Fade in={true} timeout={2000}>
          <ListItem
            sx={{
              ...styles.link,
            }}
            button
            onClick={() => {
              setOpen(!open);
              router.push("/#mywork");
            }}
          >
            <ListItemIcon>
              <Work
                sx={{
                  color: "secondary.main",
                }}
              />
            </ListItemIcon>
            <Typography variant="body1" fontSize="2em">
              MY WORK
            </Typography>
          </ListItem>
        </Fade>
        <Underline />
      </List>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box m={2}>
          <Fade in={true} timeout={2500}>
            <Link
              href="https://github.com/Abhisheikh-G"
              target="_blank"
              rel="noopener"
            >
              <IconButton sx={{ ...styles.icon }}>
                <GitHubIcon fontSize="inherit" aria-label="Github Icon" />
              </IconButton>
            </Link>
          </Fade>
        </Box>
        <Box m={2}>
          <Fade in={true} timeout={3000}>
            <Link
              href="https://www.linkedin.com/in/abhisheikh-gill/"
              target="_blank"
              rel="noopener"
            >
              <IconButton sx={{ ...styles.icon }}>
                <LinkedInIcon fontSize="inherit" aria-label="Linked In Icon" />
              </IconButton>
            </Link>
          </Fade>
        </Box>
      </Box>
    </Box>
  );

  return (
    <TrapFocus open={open}>
      <Modal open={open}>
        <Fade in={open}>
          <Box
            component={Paper}
            sx={{
              height: "100vh",
              width: "100vw",
              backgroundColor: "background.default",
              borderRadius: 0,
            }}
          >
            <Underline />
            <Container maxWidth="lg" sx={{ pr: 4.75, pt: 3.25 }}>
              <Box
                onClick={() => setOpen(!open)}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <IconButton sx={{ color: "secondary.main" }} size="large">
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Box>
              {list()}
            </Container>
          </Box>
        </Fade>
      </Modal>
    </TrapFocus>
  );
};

export default Menu;
