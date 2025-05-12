import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import {Route, Routes, Link } from "react-router-dom";


// const pages = ['Home', 'Library', 'Page 3', 'Page 4']
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {  
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#1e1e1e'}}>
        <Toolbar>
        <Box 
          component="img"
          src='../fileIcon.png'
          alt="Logo"
          sx={{
              height: 40,
              mr: 2
          }}
        />
        <Box sx={{flexGrow: 1}}>
          <Button color="primary" component={Link} to="/">Home</Button>
          <Button color="primary" component={Link} to="./Library">Library</Button>
          <Button color="primary" component={Link} to="/">Page 3</Button>
        </Box>

        
          
        <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Library" element={<About />} />
          <Route path="/contact" element={<Contact />} />
       </Routes> */}
    </Box>
  );
}
    
    // <nav className="navbar">
    //     <div className="navbar-brand">
    //         <Link to="/">File Inhaler</Link>
    //     </div>
    //     <div className="navbar-links">
    //         <Link to="/" className="nav-link">Home</Link>
    //         <Link to="/Library" className="nav-link">Library</Link>
    //     </div>
    // </nav>
export default Navbar


//<Container maxWidth="xl">
{/* <Toolbar disableGutters>
           
<Box 
    component="img"
    src='../fileIcon.png'
    alt="Logo"
    sx={{
        height: 40,
    }}
>                 
</Box>

<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
  <IconButton
    size="large"
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={handleOpenNavMenu}
    color="inherit"
  >
    <MenuIcon />
  </IconButton>
  <Menu
    id="menu-appbar"
    anchorEl={anchorElNav}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    open={Boolean(anchorElNav)}
    onClose={handleCloseNavMenu}
    sx={{ display: { xs: 'block', md: 'none' } }}
  >
    {pages.map((page) => (
      <MenuItem key={page} onClick={handleCloseNavMenu}>
        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
      </MenuItem>
    ))}
  </Menu>
</Box>
<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
<Typography
  variant="h5"
  noWrap
  component="a"
  href="#app-bar-with-responsive-menu"
  sx={{
    mr: 2,
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  }}
>
  LOGO
</Typography>
<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  {pages.map((page) => (
    <Button
      key={page}
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      {page}
    </Button>
  ))}
</Box>
<Box sx={{ flexGrow: 0 }}>
  <Tooltip title="Open settings">
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    </IconButton>
  </Tooltip>
  <Menu
    sx={{ mt: '45px' }}
    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
  >
    {settings.map((setting) => (
      <MenuItem key={setting} onClick={handleCloseUserMenu}>
        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
      </MenuItem>
    ))}
  </Menu>
</Box>
</Toolbar>
</Container> */}