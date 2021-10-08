import { makeStyles } from "@mui/styles";

import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Collapse from "@mui/material/Collapse";
import Image from "next/image";
import React, { useState } from "react";

const useStyles: Function = makeStyles((theme: any) => ({
  section: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    background: `linear-gradient( ${theme.palette.common.white},${theme.palette.primary.main})`,
  },
  root: {
    margin: "auto",
    borderRadius: 0,
    boxShadow: theme.shadows[0],
    maxWidth: 600,
    height: "auto",
    // [theme.breakpoints.up("sm")]: {
    //   width: 400,
    // },
    // [theme.breakpoints.up("md")]: {
    //   width: 500,
    // },
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.palette.common.white,
  },
  highlight: {
    color: theme.palette.secondary.contrastText,
  },
}));

interface Project {
  title: string;
  description: string;
  image: string;
  work: string;
  projectLink: string;
}

interface Projects {
  projects: [];
}

export function Project(props: Project) {
  const { title, description, work, image, projectLink } = props;
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  function handleExpand() {
    setExpanded(!expanded);
  }

  return (
    <Box display="flex" flexDirection="column" margin="auto" boxShadow={4}>
      <Card
        className={classes.root}
        classes={{ root: classes.root }}
        raised={false}
      >
        <CardMedia>
          <Image
            height={250}
            width={600}
            quality={100}
            src={`/${image}`}
            alt="Project Photo"
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>

        <CardActions
          style={{ display: "flex", justifyContent: "space-between" }}
          disableSpacing
        >
          <div>
            <Button
              size="small"
              color="primary"
              component="a"
              target="_blank"
              rel="noopener"
              href={projectLink}
              style={{ textDecoration: "none" }}
            >
              Visit The Site
            </Button>
            <Button onClick={handleExpand} size="small" color="primary">
              Learn More
            </Button>
          </div>
          <IconButton
            aria-label="expand icon"
            onClick={handleExpand}
            component={Box}
            mr={2}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>More Details:</Typography>
            <Typography paragraph>{work}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

export default function Projects(props: any) {
  const { projects } = props;
  const classes = useStyles();

  return (
    <Box id="mywork" component="section" className={classes.section}>
      <Container maxWidth="lg">
        <Typography
          className={classes.title}
          variant="h3"
          component={"p"}
          gutterBottom
        >
          My Work
        </Typography>
        <Grid container justifyContent="space-evenly" spacing={4}>
          {projects.map((project: Project) => (
            <Grid item key={project.title}>
              <Project
                title={project.title}
                description={project.description}
                image={project.image}
                work={project.work}
                projectLink={project.projectLink}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
