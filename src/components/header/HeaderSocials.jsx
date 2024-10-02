import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, IconButton } from '@mui/material';

const HeaderSocials = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',   // Center horizontally
        position: 'absolute',
        left: '51.5%',                // Horizontally center the icons
        transform: 'translate(-50%, -50%)', // Correct for top/left 50%
        gap: '1rem',
        marginTop:'2rem'
      }}
    >
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/muhammad-shahzad-akmal"
        target="_blank"
        rel="noreferrer"
        sx={{ color: 'var(--color-primary)' }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://github.com/shehzynice"
        target="_blank"
        rel="noreferrer"
        sx={{ color: 'var(--color-primary)' }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.facebook.com/profile.php?id=61564181436487&mibextid=ZbWKwL"
        target="_blank"
        rel="noreferrer"
        sx={{ color: 'var(--color-primary)' }}
      >
        <FacebookIcon/>
      </IconButton>

      {/* Line under the social icons */}
      <Box
        // sx={{
        //   width: '1px',
        //   height: '2rem',
        //   backgroundColor: 'var(--color-primary)',
        //   marginTop: '1rem',
        // }}
      />
    </Box>
  );
};

export default HeaderSocials;
