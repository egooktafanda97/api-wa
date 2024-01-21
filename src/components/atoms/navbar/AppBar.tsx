import React from 'react';
import { AppBarConfig } from './AppBarConfig';
import { Badge, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FormSeracrh from '../athomic-components/FormSeracrh';

interface AppBarProps {
  open: boolean;
  toggleDrawer: any;
}

export default function AppBar({ open, toggleDrawer }: AppBarProps) {
  return (
    <AppBarConfig position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px' // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' })
          }}
        >
          <MenuIcon />
        </IconButton>
        <div className="flex justify-between items-center w-full">
          <FormSeracrh />
          <IconButton color="primary">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBarConfig>
  );
}
