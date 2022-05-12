import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../images/logo-image.webp"
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import {Link} from "react-router-dom"


const pages = ['MaximEyes.com', 'EHR', 'ImageManagement' ,'PracticeManagement', 'RCMServices'];

//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE STARTS HERE  **************/
const useStyles = makeStyles(theme => ({
    root: {
      boxShadow: "none",
      backgroundColor: "#cccccc" ,
      color:'blue'
    },
    heading:{
        fontSize: '30'
    },
    logo:{
        width: '50',
        height: 50,
        objectFit: 'cover',
        marginTop:'-10px'
    },
    logosm:{
        height:'40px',
        objectFit:'cover',
        marginTop:'-15px',
    },
    tabs:{
        fontFamily:'emoji',
        width:'auto'
    },
  }));

//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE ENDS HERE  **************/


const Header = () => {
    const classes = useStyles();
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  return (
    <AppBar position='sticky'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link 
                  style={{textDecoration:'none' , color:'black'}}
                  to={`/${page}`}>
                {page}
                </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            sx={{ mr:2 , width:'100%' , display: { xs: 'flex', md: 'none' } ,justifyContent:'center', }}
          >
             <img className={classes.logosm}  src={Logo} />
          </Typography>
           <Grid container spacing={2} 
           sx={{ 
               display: { xs: 'none', md: 'flex' },
               justifyContent:'center',
               alignItems:'center',
               }}
           >
              <Grid item xs={2}>
                <Typography
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                   <img className={classes.logo}  src={Logo} />
                </Typography>
              </Grid>

             <Grid item xs={8}>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                <Button
                 key={page}
                 onClick={handleCloseNavMenu}
                 sx={{
                      my: 2,
                      mx:2 , 
                      color: 'Black', 
                      display: 'block' , 
                      textTransform:'capitalize',
                      fontSize:'16px'
                      }}
                >
                <Link style={{textDecoration:'none' , color:'black'}}
                to={`/${page}`}>
                {page}
                </Link>
 
               </Button>
               ))}
               </Box>
              </Grid>

          <Grid item xs={2}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button 
                sx={{
                    border: '2px solid #3498db',
                    borderRadius: '50px',
                    color: '#3498db',
                    display: 'inline-block',
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: 1,
                    padding: '5px 15px',
                    textDecoration: 'none',
                    transition: '.5s',
                    textTransform:'capitalize',
                    '&:hover': {
                    background: '#3498db',
                    color: '#fff'
                     },
                     }}
                    >
                    Request Demo
                    </Button>
            
                 </Box>
              </Grid>
        </Grid>
    </Toolbar>
  </Container>
 </AppBar>
  )
}

export default Header