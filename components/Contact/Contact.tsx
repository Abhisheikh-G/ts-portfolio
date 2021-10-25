import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import React from "react";
import Underline from "../Underline/Underline";
import { useTheme } from "@mui/system";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data, register);
  };
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box
        id="contact"
        component="section"
        sx={{
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: `primary.dark`,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="left"
            gutterBottom
            sx={{
              width: "6.1em",
              marginBottom: "1em",
              textTransform: "uppercase",
            }}
          >
            <Box component="span" sx={{ color: "secondary.main" }}>
              Contact
            </Box>{" "}
            <Box component="span" sx={{ color: "custom.yellow" }}>
              Me
            </Box>
            <Underline />
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "common.white",
              zIndex: 10,
              padding: 2,
              margin: "auto",
              width: "100%",
              [theme.breakpoints.up("lg")]: {
                width: "80%",
              },
            }}
            boxShadow={8}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormLabel
              htmlFor="name"
              sx={{
                width: "100%",
                margin: 1,
              }}
              required
              focused
            >
              Name
            </FormLabel>
            <TextField
              sx={{
                width: "100%",
                margin: 1,
              }}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here.."
            />

            <FormLabel
              htmlFor="email"
              sx={{
                width: "100%",
                margin: 1,
              }}
              focused
              required
            >
              Email
            </FormLabel>
            <TextField
              sx={{
                width: "100%",
                margin: 1,
              }}
              type="text"
              id="email"
              placeholder="Enter your email here.."
              name="email"
            />
            <FormLabel
              htmlFor="message"
              sx={{
                width: "100%",
                margin: 1,
              }}
              focused
              required
            >
              Message
            </FormLabel>
            <TextField
              multiline
              sx={{
                width: "100%",
                margin: 1,
              }}
              id="message"
              name="message"
              placeholder="Enter your message here.."
            />

            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
