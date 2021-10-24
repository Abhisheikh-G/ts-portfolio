import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";

const useStyles: Function = makeStyles((theme: any) => ({
  section: {
    width: "100%",
    height: "100%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
    background: theme.palette.primary.main,
  },
  underline: {
    width: "inherit",
    height: 5,
    background: `linear-gradient(to right, ${theme.palette.custom.yellow},${theme.palette.secondary.main})`,
    borderRadius: 10,
  },
  certBlock: {
    margin: theme.spacing(2),
    height: "auto",
    width: "auto",
    borderRadius: theme.spacing(20),
    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.complex,
    }),
  },
  certImage: {
    height: "4em",
    width: "4em",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      height: "3.5em",
      width: "3.5em",
    },
  },
  title: {
    textAlign: "left",
    textTransform: "uppercase",
    color: theme.palette.common.black,
  },
  highlight: {
    color: theme.palette.secondary.main,
  },
  secondaryHighlight: {
    color: theme.palette.custom.yellow,
  },
}));

function CertificationBlock(props: any) {
  const classes = useStyles(props);
  const { imgSrc, alt } = props;
  return (
    <Image
      src={`/${imgSrc}`}
      height={150}
      width={160}
      className={classes.certImage}
      alt={alt}
    />
  );
}

interface Certification {
  imgSrc: string;
  alt: string;
}

export default function Certifications(props: any) {
  const classes = useStyles(props);
  const { certificates } = props;

  return (
    <React.Fragment>
      <Box className={classes.section} component="section">
        <Container maxWidth="md">
          <Typography
            className={classes.title}
            variant="h3"
            align="left"
            width="9.15em"
            gutterBottom
            sx={{ marginBottom: "1em", marginTop: "1em" }}
          >
            <span className={classes.highlight}>My</span>{" "}
            <span className={classes.secondaryHighlight}>Certifications</span>
            <Box className={classes.underline} />
          </Typography>
          <Grid container justifyContent="space-evenly" spacing={2}>
            {certificates.map((certification: Certification) => (
              <Grid item key={certification.alt}>
                <CertificationBlock
                  imgSrc={certification.imgSrc}
                  alt={certification.alt}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
