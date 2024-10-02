// import React from 'react'
// import './nav.css'
// import {AiOutlineHome} from 'react-icons/ai'
// import {BiUser} from 'react-icons/bi'
// import {FaLaptopCode} from 'react-icons/fa'
// import {GoChecklist} from 'react-icons/go'
// import {BiMessageSquareDetail} from 'react-icons/bi'
// import { useState } from 'react'




// const Nav = () => {

//   const [activeNav, setActiveNav] = useState('#')
//   return (
    
//     <nav>
      
//        <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
//        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BiUser/></a>
//        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><FaLaptopCode/></a>
//        <a href="#myprojects" onClick={() => setActiveNav('#myprojects')} className={activeNav === '#myprojects' ? 'active': ''}><GoChecklist/></a>
//        <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active': ''}><BiMessageSquareDetail/></a>
      
//     </nav>
//   )
// }

// export default Nav


import React, { useState } from 'react';
import { Box, Button, IconButton, Menu, MenuItem, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null); // For menu anchor
  const [activeNav, setActiveNav] = useState('#'); // To track active section

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#myprojects', label: 'My Projects' },
    { href: '#contacts', label: 'Contacts' },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Set anchor element for Menu
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleNavClick = (href) => {
    setActiveNav(href); // Update active navigation item
    handleMenuClose();  // Close the menu on mobile after click
    scrollToSection(href); // Manually scroll to the section
  };

  const scrollToSection = (href) => {
    const section = document.querySelector(href); // Get the section by href (e.g., #about)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth', // Smooth scroll behavior
        block: 'start',     // Scroll to the start of the section
      });
    }
  };

  return (
    <Container maxWidth="lg" disableGutters sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 2 }}>
        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.href}
              onClick={() => handleNavClick(item.href)} // Smooth scroll on click
              sx={{ color: activeNav === item.href ? 'primary.main' : 'white' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleMenuOpen} // Open menu
            sx={{ color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl} // Bind menu to the IconButton
            open={Boolean(anchorEl)} // Toggle menu open state
            onClose={handleMenuClose} // Close the menu
            keepMounted // Ensures the menu is mounted for better performance
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.href}
                onClick={() => handleNavClick(item.href)} // Handle navigation and close
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </Container>
  );
};

export default Nav;


