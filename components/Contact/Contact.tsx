import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import Underline from "../Underline/Underline";
import CustomButton from "../CustomButton/CustomButton";
import CircularProgress from "@mui/material/CircularProgress";
import dynamic from "next/dynamic";
import React, { FormEvent, useState, useRef } from "react";
import { Alert, AlertTitle } from "@mui/material";
const HCaptcha = dynamic(() => import("@hcaptcha/react-hcaptcha"));

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [captchaResponse, setCaptchaResponse] = useState({
    challenge_ts: "",
    credit: false,
    hostname: "",
    success: false,
  });
  let captchaRef = useRef(null);

  const handleVerificationSuccess = async (token: any) => {
    const res = await fetch("/api/captcha", {
      method: "POST",
      body: JSON.stringify({ token }),
    });
    const captchaRes = await res.json();
    setCaptchaResponse(captchaRes);
    if (res.status === 200) {
      setVerified(true);
    } else {
      setError(true);
      setResponseMessage(
        "There was a problem verifying your captcha. Please try again or reach out to me on LinkedIn."
      );
    }
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    if (!verified) {
      setResponseMessage(
        "You must complete the captcha before your message can be sent."
      );
      setError(true);
    } else {
      if (
        name.length > 1 ||
        subject.length > 1 ||
        email.length > 1 ||
        message.length > 1 ||
        !captchaResponse.success
      ) {
        setLoading(true);

        let mailRes = await fetch("/api/mail", {
          method: "POST",
          body: JSON.stringify({
            name,
            subject,
            email,
            message,
            token: captchaResponse,
          }),
        });

        if (mailRes.status === 200) {
          setLoading(false);
          setVerified(false);
          setSuccess(true);
          setResponseMessage(
            "Message sent successfully, I will get back to you as soon as possible"
          );
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
          setCaptchaResponse({
            challenge_ts: "",
            credit: false,
            hostname: "",
            success: false,
          });

          if (captchaRef !== null) {
            // @ts-ignore
            captchaRef?.current?.resetCaptcha();
          }
        } else {
          setLoading(false);
          setError(true);
          setResponseMessage(
            "There was a problem sending this message. Please try again or reach out to me on LinkedIn."
          );
        }
      }
    }
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
                lg: 5,
                xs: 3,
              },
              py: {
                xs: 3,
              },
              margin: "auto",
              maxWidth: 500,
            }}
            boxShadow={8}
            onSubmit={handleSubmit}
          >
            {error && (
              <Alert
                severity="error"
                onClose={() => setError(false)}
                sx={{ mb: 1 }}
              >
                <AlertTitle>Error</AlertTitle>
                {responseMessage}
              </Alert>
            )}

            {success && (
              <Alert
                severity="success"
                onClose={() => setSuccess(false)}
                sx={{ mb: 1 }}
              >
                <AlertTitle>Success</AlertTitle>
                {responseMessage}
              </Alert>
            )}

            {loading && (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}

            <FormLabel
              htmlFor="name"
              sx={{
                width: "100%",
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
              placeholder="Enter a subject for your message.."
              name="subject"
              required
            />

            <FormLabel
              htmlFor="email"
              sx={{
                width: "100%",
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
              type="email"
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
              }}
              focused
              required
            >
              Message
            </FormLabel>
            <TextField
              multiline
              rows={4}
              sx={{
                width: "100%",
                m: 1,
              }}
              id="message"
              name="message"
              value={message}
              onChange={({ target: { value } }) => setMessage(value)}
              placeholder="Enter a brief message here.."
              required
            />
            <CustomButton type="submit">SUBMIT</CustomButton>
            <Box height={16} />
            <HCaptcha
              //@ts-ignore
              ref={captchaRef}
              theme="dark"
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_CLIENT!}
              onVerify={(token: string) => handleVerificationSuccess(token)}
              onExpire={() => {
                setVerified(false);
                setCaptchaResponse({
                  challenge_ts: "",
                  credit: false,
                  hostname: "",
                  success: false,
                });
                //@ts-ignore
                captchaRef?.current?.resetCaptcha();
              }}
            />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
