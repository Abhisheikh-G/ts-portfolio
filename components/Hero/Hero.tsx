import { Container, Typography, Box } from "@mui/material";

import React from "react";
import { useRouter } from "next/router";
import Underline from "../Underline/Underline";
import CustomButton from "../CustomButton/CustomButton";

export default function Hero() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textTransform: "uppercase",
          color: "primary.contrastText",
          pb: 4,
          pt: 2,
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md" sx={{ mt: "2em" }}>
          <Typography variant="h5" align="left">
            Hello, my name is
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            align="left"
            sx={{
              marginBottom: (theme) => theme.spacing(2),
              maxWidth: "7.8em",
              fontWeight: (theme) => theme.typography.fontWeightLight,
            }}
          >
            <Box component="span" sx={{ color: "secondary.main" }}>
              Abhisheikh
            </Box>{" "}
            <Box component="span" sx={{ color: "custom.yellow" }}>
              Gill
            </Box>
            <Underline />
          </Typography>

          <Typography
            variant="body1"
            component={"p"}
            gutterBottom={true}
            align="left"
            maxWidth="30em"
            sx={{
              marginBottom: "1em",
              lineHeight: (theme) => theme.spacing(3.5),
              letterSpacing: (theme) => theme.spacing(0.2),
              fontWeight: (theme) => theme.typography.fontWeightMedium,
            }}
          >
            Nice to meet you, I'm a{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              full stack web developer
            </Box>{" "}
            and{" "}
            <Box component="span" sx={{ color: "custom.yellow" }}>
              certified I.T solutions expert
            </Box>{" "}
            from New Jersey, USA. I make applications using{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              React.js, Next.js, Gatsby.js, Node.js, PostgreSQL and MongoDB
            </Box>{" "}
            as well as provide expertise in{" "}
            <Box component="span" sx={{ color: "custom.yellow" }}>
              Linux System Administration, Networking, and CyberSecurity.
            </Box>
          </Typography>
          {/* <Box display="flex" justifyContent="flex-start" mt={2} mb={2}>
            <Image
              src="/code-slash.svg"
              height={50}
              width={50}
              alt="Code block icon"
            />
          </Box> */}

          <Box display="flex" justifyContent="flex-start">
            <CustomButton onClick={() => router.push("#contact")}>
              Contact Me
            </CustomButton>

            <CustomButton onClick={() => router.push("#mywork")}>
              My Work
            </CustomButton>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
