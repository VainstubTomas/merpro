import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoMerPro from '../assets/Merpro/Logos/merproBlanco.png';
import LogoMerPro2 from '../assets/Merpro/Logos/merproNegro.png';

const drawerWidth = 240;
const navItems = [
   { label: 'CONTACTO', id: 'contacto' },
   { label: 'CATALOGO', id: 'catalogo' },
   { label: 'NUESTRAS MARCAS', id: 'nuestrasMarcas' },
];

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={LogoMerPro2} alt="logo-merpro" style={{ height: '22px'}} loading="lazy"/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
          <ListItemButton
            sx={{ textAlign: 'center' }}
            onClick={() => {
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              handleDrawerToggle();
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
        ))}
      </List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="static" sx={{ backgroundColor:'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={LogoMerPro} alt="logo-merpro" style={{ height: '22px'}} loading="lazy"/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap:'40px', color:'white' }}>
             {navItems.map((item) => (
                <Button
                key={item.id}
                sx={{ 
                    color: '#fff', 
                    textTransform: 'capitalize', 
                    fontFamily: 'roboto', 
                    fontStyle:'bold', 
                    fontWeight:400, 
                    fontSize:'15px', 
                    lineHeight:'28px',
                    transition:'color 0.2s',
                    '&:hover': {
                        color: '#DE5E14', // <-- color hover
                    }  
                  }}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                {item.label}
                </Button>
            ))}
            </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Appbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Appbar;
