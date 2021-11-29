import { useRouter } from 'next/router';
import React from 'react';
import CustomButton from '@/components/CustomButton/CustomButton';
import Underline from '@/components/Underline/Underline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Hero() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textTransform: 'uppercase',
          color: 'primary.contrastText',
          pb: 4,
          height: 'auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h5" align="left">
            Hello, my name is
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            align="left"
            fontFamily="Zen Tokyo Zoo"
            sx={{
              mt: 2,
              marginBottom: (theme) => theme.spacing(2),
              maxWidth: '9.15em',
              fontSize: 30,
            }}
          >
            <Box component="span" sx={{ color: 'secondary.main' }}>
              Abhisheikh
            </Box>{' '}
            <Box component="span" sx={{ color: 'custom.yellow' }}>
              Gill
            </Box>
            <Underline />
          </Typography>
          <Typography
            variant="body1"
            component={'p'}
            gutterBottom={true}
            align="left"
            maxWidth="30em"
            sx={{
              my: '1.5em',
              lineHeight: (theme) => theme.spacing(3.5),
              letterSpacing: (theme) => theme.spacing(0.18),
              fontWeight: (theme) => theme.typography.fontWeightMedium,
            }}
          >
            Nice to meet you, I'm a{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              full stack web developer
            </Box>{' '}
            and{' '}
            <Box component="span" sx={{ color: 'custom.yellow' }}>
              certified I.T solutions expert
            </Box>{' '}
            from New Jersey, USA. I make applications using{' '}
            <Box component="span" sx={{ color: 'secondary.main' }}>
              React.js, Next.js, Gatsby.js, Node.js, PostgreSQL and MongoDB
            </Box>{' '}
            as well as provide expertise in{' '}
            <Box component="span" sx={{ color: 'custom.yellow' }}>
              Linux System Administration, Networking, and CyberSecurity.
            </Box>
          </Typography>

          <Box display="flex" justifyContent="flex-start">
            <CustomButton onClick={() => router.push('#contact')}>
              Contact Me
            </CustomButton>

            <CustomButton onClick={() => router.push('#mywork')}>
              My Work
            </CustomButton>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
