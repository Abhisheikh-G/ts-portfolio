import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import React from "react";

const useStyles: Function = makeStyles((theme: any) => ({
  section: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    background: `linear-gradient( ${theme.palette.primary.main},${theme.palette.primary.dark})`,
  },
  title: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.palette.common.white,
  },
  highlight: {
    color: theme.palette.secondary.light,
  },
  textfield: {
    width: "100%",
    margin: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    zIndex: 10,
    padding: theme.spacing(2),
    margin: "auto",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
  },
}));

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data, register);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Box id="contact" component="section" className={classes.section}>
        <Container maxWidth="sm">
          <Typography
            className={classes.title}
            variant="h3"
            component={"p"}
            gutterBottom
          >
            Interested In Working With Me? <br />
            <span className={classes.highlight}>Send Me A Message</span>
          </Typography>
          <Box
            component="form"
            className={classes.form}
            boxShadow={8}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormLabel
              htmlFor="name"
              className={classes.textfield}
              required
              focused
            >
              Name
            </FormLabel>
            <TextField
              className={classes.textfield}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name here.."
            />

            <FormLabel
              htmlFor="email"
              className={classes.textfield}
              focused
              required
            >
              Email
            </FormLabel>
            <TextField
              className={classes.textfield}
              type="text"
              id="email"
              placeholder="Enter your email here.."
              name="email"
            />
            <FormLabel
              htmlFor="message"
              className={classes.textfield}
              focused
              required
            >
              Message
            </FormLabel>
            <TextField
              multiline
              className={classes.textfield}
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
