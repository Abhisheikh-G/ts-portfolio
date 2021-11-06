import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import Underline from "../Underline/Underline";
import CustomButton from "../CustomButton/CustomButton";
import React, { FormEvent, useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <Box
        id="contact"
        component="section"
        sx={{
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="left"
            gutterBottom
            fontFamily="Zen Tokyo Zoo"
            sx={{
              width: "7em",
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
              p: {
                lg: 8,
                xs: 4,
              },
              margin: "auto",
              maxWidth: 600,
            }}
            boxShadow={8}
            onSubmit={handleSubmit}
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
              value={name}
              onChange={({ target: { value } }) => setName(value)}
              placeholder="Enter your name here.."
              required
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
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              placeholder="Enter your email here.."
              name="email"
              required
            />
            <FormLabel
              htmlFor="message"
              sx={{
                width: "100%",
                my: 2,
              }}
              focused
              required
            >
              Message
            </FormLabel>
            <TextField
              multiline
              rows={5}
              sx={{
                width: "100%",
                mb: 2,
              }}
              id="message"
              name="message"
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
              placeholder="Enter your message here.."
              required
            />

            <CustomButton type="submit">Submit</CustomButton>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
