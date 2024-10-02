import React from 'react';
import { Box, Typography, Avatar, Container } from '@mui/material';
import me from '../../assets/dp.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <Box
      component="header"
      id="home"
      sx={{
        height: '100vh',
        paddingTop: '7rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h5" component="p">
          Hello, I'm
        </Typography>
        <Typography variant="h2" component="h1">
          Muhammad Shahzad Akmal
        </Typography>

        <Typography variant="h7" component="p"sx={{ marginTop: '1rem' }}>
          Mobile App And Web Developer
        </Typography>

        {/* Circular image and centered */}
        <Box
          sx={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%', // Takes full width to ensure proper centering
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '15rem', // Adjust size as needed
              height: '15rem',
            
            }}
          >
            <Avatar
              src={me}
              alt="me"
              sx={{
                width: '94%',
                height: '98%',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>

        <HeaderSocials marginTop="20px" />
        </Container>
    </Box>
  );
};

export default Header;
