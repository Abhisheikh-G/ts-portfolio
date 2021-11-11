import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Underline from "../Underline/Underline";

function CertificationBlock(props: any) {
  const { imgSrc, alt } = props;
  return (
    <Box
      sx={{
        ">div": {
          margin: 4,
        },
      }}
    >
      <Image src={`/${imgSrc}`} height={125} width={125} alt={alt} />
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
        }}
        component="section"
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="left"
            width="5.5em"
            gutterBottom
            fontFamily="Zen Tokyo Zoo"
            sx={{
              mb: "2em",
              textTransform: "uppercase",
            }}
          >
            <Box component="span" sx={{ color: "secondary.main" }}>
              My
            </Box>{" "}
            <Box component="span" sx={{ color: "custom.yellow" }}>
              Certs
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
