import React from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Svg from "../images/eyecare.svg"
import Button from '@mui/material/Button';


//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE STARTS HERE  **************/
const useStyles = makeStyles(theme => ({
    svgicon:{
        height:'85vh',
        width:'40vw'

    },
  }));

//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE ENDS HERE  **************/

const Eyecareintro = () => {
    const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} 
      sx={{
        display:'flex' , 
        flexDirection:{xs:'column' , md:'row'}, 
        justifyContent:'center' , 
        alignItems:'center'}}
       >


      <Grid item md={7} xs={12} 
      sx={{display:'flex' , flexDirection:'column' , justifyContent:'space-around'}}
       >
      <Box >
       <Typography variant="h3"
       sx={{
            color:'#3498db',
            width:'80%',
            marginBottom:'20px',
            fontFamily:'cursive'
       }}
       >Eye Care Software That Improves Your Focus</Typography>
        <Typography variant='h6' 
        sx={{
            width:'80%',
            marginBottom:'20px'
        }}
        >MaximEyes eye care EHR, practice management, and optical point-of-sale software makes life better for you and your patients.</Typography>
     </Box>
     <Box 
     sx={{
            width:'100%',
            marginBottom:'20px'
        }}
      >
     <div>
        <Button variant="contained" size="large"
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
          Product Videos
        </Button>
        <Button variant="contained" size="large"
        sx={{
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
      </div>
    </Box>
     
      </Grid>

      <Grid item md={5} xs={12}>
      <Typography
                sx={{ mr: 2 }}
                >
                   <img className={classes.svgicon}  src={Svg} />
                </Typography>
     </Grid>
      </Grid>
      </Container>
  )
}

export default Eyecareintro