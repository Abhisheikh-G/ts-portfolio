import { Container, Typography, Box, Button, useTheme } from "@mui/material";

import React from "react";
import { styled } from "@mui/styles";
import { useRouter } from "next/router";
import Underline from "../Underline/Underline";
// import Image from "next/image";

const CustomButton = styled(Button)(({ theme }) => ({
  height: theme.spacing(6),
  fontSize: "1.25em",
  margin: ".25em",
  borderColor: theme.palette.secondary.main,
  borderRadius: theme.spacing(20),
  color: theme.palette.secondary.main,
  transition: "all 0.2s ease-in",
  textDecoration: "none",
  "&:hover": {
    borderColor: theme.palette.custom.yellow,
    color: theme.palette.custom.yellow,
  },
}));

export default function Hero() {
  const router = useRouter();
  const theme = useTheme();
  // const [title, setTitle] = useState(false);
  // const [body, setBody] = useState(false);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textTransform: "uppercase",
          backgroundColor: `primary.main`,
          color: "primary.contrastText",
          paddingTop: 2,
          paddingBottom: 8,
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md" sx={{ mt: "2em" }}>
          <Typography variant="h5" gutterBottom={true} align="left">
            Hello, my name is
          </Typography>

          <Typography
            variant="h3"
            gutterBottom
            align="left"
            sx={{ marginBottom: theme.spacing(2), maxWidth: "8em" }}
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
            variant="h6"
            component={"p"}
            gutterBottom={true}
            align="left"
            maxWidth="30em"
            sx={{ marginBottom: "1em" }}
          >
            Nice to meet you, I'm a{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              full stack web developer
            </Box>{" "}
            and{" "}
            <Box component="span" sx={{ color: "custom.yellow" }}>
              ceritified IT solutions expert
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
            <CustomButton
              onClick={() => router.push("#contact")}
              variant="outlined"
            >
              Contact Me
            </CustomButton>

            <CustomButton
              variant="outlined"
              onClick={() => router.push("#mywork")}
            >
              My Work
            </CustomButton>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
