import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'
import Svg from "../images/eyecare.svg"
import Container from '@mui/material/Container';


//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE STARTS HERE  **************/
const useStyles = makeStyles(theme => ({
  svgicon:{
      height:'100%',
      width:'100%'
  },
}));

//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE ENDS HERE  **************/

export default function Trash() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
    <Box sx={{ 
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:{md:'0px' , xs:'1rem'}
      }}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={6}  order={{ md: 1, xs:2 }} 
        sx={{
          display:'flex',  
          flexDirection:'column'  , 
          justifyContent:'space-evenly' ,
          }}
        >

      <Box >
       <Typography 
       variant="h3"
       color='text'
      
       gutterBottom
       sx={{
            fontFamily:'cursive',
            width: {md:'80%' , xs:'100%'},
            fontSize:{md:'3rem' , xs:'2rem'}
       }}
       >Eye Care Software That Improves Your Focus</Typography>
        <Typography 
        color='text'
        gutterBottom 
        sx={{
            fontFamily:'cursive',
            width: {md:'80%' , xs:'100%'}
       }}
        >MaximEyes eye care EHR, practice management, and optical point-of-sale software makes life better for you and your patients.</Typography>
     </Box>

     <Box 
     >
        <Button variant="contained" size="large"
          sx={{
                    width:{xs:'100%' ,md:'auto'},
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
                    margin:'20px 20px 10px 0px',
                    '&:hover': {
                    background: '#3498db',
                    color: '#fff', 
                     },
                   }}
                 >
          Events & Webinar
        </Button>
        <Button variant="contained" size="large"
        sx={{
                    width:{xs:'100%' ,md:'auto'},
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
                    margin:'20px 20px 10px 0px',
                    background: '#3498db',
                    color: '#fff',
                    '&:hover': {
                    background: '#3498db',
                    color: '#fff',
                    
                     },
                     }}
                    >
          Product Videos
        </Button>
        <Button variant="contained" size="large"
        sx={{
                    width:{xs:'100%' ,md:'auto'},
                    border: '2px solid #3498db',
                    borderRadius: '50px',
                    color: '#3498db',
                    display: {xs:'inline-block' , md:'none'},
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: 1,
                    padding: '5px 15px',
                    textDecoration: 'none',
                    transition: '.5s',
                    textTransform:'capitalize',
                    margin:'20px 20px 10px 0px',
                    '&:hover': {
                    background: '#3498db',
                    color: '#fff',
                    
                     },
                     }}
                    >
          Request Demo
        </Button>
   
    </Box>
        </Grid>
        <Grid item xs={12} md={6}  order={{ md: 2, xs:1 }} 
        >

          <Container
                sx={{ mr: 2 }}
                >
                   <img className={classes.svgicon}  src={Svg} />
                </Container>

        </Grid>

      </Grid>
    </Box>
    </Container>
  );
}
