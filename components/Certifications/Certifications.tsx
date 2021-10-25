import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import Image from "next/image";
import React from "react";
import Underline from "../Underline/Underline";

function CertificationBlock(props: any) {
  const { imgSrc, alt } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{
        ">div": {
          height: "12.5em",
          width: "12.5em",
          margin: 4,
          [theme.breakpoints.down("sm")]: {
            height: "8em",
            width: "8em",
          },
        },
      }}
    >
      <Image src={`/${imgSrc}`} height={150} width={160} alt={alt} />
    </Box>
  );
}

interface Certification {
  imgSrc: string;
  alt: string;
}

export default function Certifications(props: any) {
  const { certificates } = props;

  return (
    <React.Fragment>
      <Box
        sx={{
          paddingTop: 2,
          paddingBottom: 8,
          backgroundColor: "primary.main",
        }}
        component="section"
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="left"
            width="9.15em"
            gutterBottom
            sx={{
              marginBottom: "1em",
              marginTop: "1em",
              textTransform: "uppercase",
            }}
          >
            <Box component="span" sx={{ color: "secondary.main" }}>
              My
            </Box>{" "}
            <Box component="span" sx={{ color: "custom.yellow" }}>
              Certifications
            </Box>
            <Underline />
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
