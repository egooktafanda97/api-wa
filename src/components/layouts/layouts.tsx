import { ReactNode, FC, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AppBar from '../atoms/navbar/AppBar';
import Drawers from '../atoms/sidebar/Drawer';
import Footer from '../atoms/footer/footer';
import { createTheme } from '@mui/material';
import { defaultColorScema } from '@/config/app';
import LayoutProvider from './LayoutProvider';

type Props = { children: ReactNode };
const defaultTheme = createTheme();
export const Layout: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <LayoutProvider>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar open={open} toggleDrawer={toggleDrawer} />
        <Drawers open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container
            maxWidth="lg"
            sx={{ mt: 4, mb: 4 }}
            style={{
              background: defaultColorScema.background,
              color: '#111'
            }}
          >
            {children}
          </Container>
          <Footer />
        </Box>
      </Box>
    </LayoutProvider>
  );
};
