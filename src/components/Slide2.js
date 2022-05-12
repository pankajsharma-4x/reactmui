import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Practice from "../images/practice.webp"
import Button from '@mui/material/Button';

//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE STARTS HERE  **************/
const useStyles = makeStyles(theme => ({
  sliderimage:{
      // height:'85vh',
      // width:'50vw',
      // objectFit:'cover',
      maxWidth:'100%'

  },
}));

//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE ENDS HERE  **************/

const Slide2 = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl"
       sx={{
      marginBottom:{md:'0px' , xs:'2rem'}
    }}
    >
       <Grid container 
      //  spacing={2}
       >
       
         <Grid item md={6} xs={12}  order={{ md: 1, xs:2 }} 
         sx={{
           backgroundColor:'#fefefe',
           padding:{xs:'0px' , md:'0px 60px'},
           display:'flex',
           justifyContent:'center',
           alignItems:'center'
           }}
         >
           <Box>
             <Typography variant='h4'
             sx={{
               color:'#4c4c4c',
               fontSize: {xs:'24px' , md:'32px'},
               fontWeight: {xs:'500', md:'300'},
               lineHeight: '48px',
               fontStyle: 'normal',
              //  fontWeight: '300',
               letterSpacing: '-1px',
               textTransform: 'none',
             }}
             >
            Practice Management and EHR Systems Geared Towards Your Success
             </Typography>
            <Typography>
            Our cloud-based unified ophthalmology and optometry EHR software and practice management solutions make your life easier, so you can make your patients’ lives better. Our team is here for you and your staff every step of the way. We understand your practice, pair you with the right eye care software, and offer support when you need it.
            </Typography>
           
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
                    background: '#3498db',
                    color: '#fff',
                    '&:hover': {
                    background: '#3498db',
                    color: '#fff',
                    
                     },
                     }}
                    >
        Improve Practice Management
        </Button>
           </Box>
        </Grid>
        <Grid item md={6} xs={12}  order={{ md: 2, xs:1 }} 
        >
         <Typography >
                   <img className={classes.sliderimage}   src={Practice} />
                </Typography>
         </Grid>
       </Grid>
    </Container>
  )
}

export default Slide2;