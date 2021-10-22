import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Mail, Work } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 240,

    backgroundColor: theme.palette.primary.dark,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
    "&:hover": {
      textDecoration: "none",
    },
  },
  drawerLink: {
    color: theme.palette.common.white,
  },
  drawerIcon: {
    color: theme.palette.common.white,
  },
  drawerHeader: {
    height: 150,
    justifyContent: "center",
    display: "flex",
  },
  drawer: {
    backgroundColor: theme.palette.primary.dark,
    borderRight: `1px solid ${theme.palette.secondary.main}`,
  },
  logo: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(6),
  },
}));

interface DrawerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Drawer = (props: DrawerProps) => {
  const { open, setOpen } = props;
  const router = useRouter();
  const classes = useStyles();
  const drawerLink = clsx([classes.drawerLink, classes.link]);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const list = () => (
    <React.Fragment>
      <List className={classes.list}>
        <ListItem className={classes.drawerHeader}>
          <Image
            className={classes.logo}
            src="/logo.svg"
            alt="logo"
            priority
            height={125}
            width={125}
          />
        </ListItem>
        <Divider />
        <ListItem
          className={drawerLink}
          button
          onClick={() => {
            setOpen(!open);
            router.push("#contact");
          }}
        >
          <ListItemIcon>
            <Mail className={classes.drawerIcon} />
          </ListItemIcon>
          <ListItemText primary={"Contact Me"} />
        </ListItem>
      </List>
      <Divider />
      <List className={classes.list}>
        <ListItem
          className={drawerLink}
          button
          onClick={() => {
            setOpen(!open);
            router.push("#mywork");
          }}
        >
          <ListItemIcon>
            <Work className={classes.drawerIcon} />
          </ListItemIcon>
          <ListItemText primary={"My Work"} />
        </ListItem>
      </List>
    </React.Fragment>
  );

  return (
    <SwipeableDrawer
      open={open}
      classes={{ paper: classes.drawer }}
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
