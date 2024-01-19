import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';

const HeaderNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Inicio', link: '/' },
    { text: 'Segundo', link: '/' },
    { text: 'Tercero', link: '/' },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>               
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi App
          </Typography>
          <FormControl sx={{ flexGrow: 1, marginRight: '8px' }}>
            <InputLabel htmlFor="select-options" sx={{ color: 'white' }}>
              Select Options
            </InputLabel>
            <Select
              id="select-options"
              disableUnderline
              IconComponent={() => <ArrowDropDownIcon />}
              sx={{ color: 'white' }}
            >
              <MenuItem value={10}>Opción 1</MenuItem>
              <MenuItem value={20}>Opción 2</MenuItem>
            </Select>
          </FormControl>
          <IconButton color="inherit" sx={{marginRight: '24px'}}>
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="Usuario" src={avatar} /> 
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: '100%' }}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={item.link}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HeaderNav;
