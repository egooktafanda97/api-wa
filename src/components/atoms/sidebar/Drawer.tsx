import { Box, Divider, IconButton, List, Toolbar } from '@mui/material';
import React from 'react';
import { DrawerConfig } from './DrawerConfig';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DrawerItems from './DrawerItems';
import { defaultColorScema } from '@/config/app';
import '@/assets/scss/sidebar.scss';

interface DrawerProps {
  open: boolean;
  toggleDrawer: any;
}

import { FaHome } from 'react-icons/fa';

export default function Drawers({ open, toggleDrawer }: DrawerProps) {
  return (
    <DrawerConfig
      PaperProps={{
        sx: {
          backgroundColor: defaultColorScema.secondary
        }
      }}
      variant="permanent"
      open={open}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1]
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {/* {mainListItems} */}
        <DrawerItems />
        <Divider sx={{ my: 1 }} />
        {/* {secondaryListItems} */}
      </List>
    </DrawerConfig>
  );
}
