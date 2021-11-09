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
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let res = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        name,
        subject,
        email,
        message,
      }),
    });

    console.log(res);
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
              width: "7.1em",
              mb: "1.5em",
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
              px: {
                lg: 6,
                xs: 4,
              },
              py: {
                lg: 4,
                xs: 3,
              },
              margin: "auto",
              maxWidth: 500,
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
              htmlFor="subject"
              sx={{
                width: "100%",
                margin: 1,
              }}
              focused
              required
            >
              Subject
            </FormLabel>
            <TextField
              sx={{
                width: "100%",
                margin: 1,
              }}
              type="text"
              id="subject"
              value={subject}
              onChange={({ target: { value } }) => setSubject(value)}
              placeholder="Enter your subject here.."
              name="subject"
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
