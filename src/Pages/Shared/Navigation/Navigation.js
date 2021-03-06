import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/home">
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, textDecoration:'none' }} style={{color: '#fff'}}>
            Dodge Cars
          </Typography>
          </NavLink>
          <NavLink to="/login">
            <Button style={{color: 'white'}}>Items</Button>
          </NavLink>
          {user?.email && <NavLink to='/dashboard'>
            <Button style={{color: 'white'}} color="inherit">Dashboard</Button>
          </NavLink>}
          <NavLink to='/cars'>
            <Button style={{color: 'white'}} color="inherit">Cars</Button>
          </NavLink>
          <NavLink to='about'>
            <Button style={{color: 'white'}} color="inherit">About</Button>
          </NavLink>
          {
            user?.email ?
            
              <Button style={{color: 'white'}} onClick={logOut} color="inherit">LogOut</Button>
             :
            <NavLink to="/login">
              <Button style={{color: 'white'}} color="inherit">Login</Button>
            </NavLink>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;