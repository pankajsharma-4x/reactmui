import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Balance from "../images/balanceslide.webp"
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

const Slide1 = () => {
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
         <Grid item md={6} xs={12}>
         <Typography >
                   <img className={classes.sliderimage}   src={Balance} />
                </Typography>
         </Grid>
         <Grid item md={6} xs={12} 
         sx={{
           backgroundColor:'#fefefe',
           padding:{xs:'0px' , md:'0px 60px'},
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
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
               letterSpacing: '-1px',
               textTransform: 'none',
             }}
             >
             Balance Everything with Certified EHR Software
             </Typography>
            <Typography>
            How do you keep your ophthalmology and optometry business moving forward, while managing compliance, costs, cash flow, efficiencies, and staff too? Balance it all with secure unified EHR software, ophthalmic image management, practice management solutions, and end-to-end optometric revenue cycle management and medical billing services.
            </Typography>
            <Typography>
            Since 1994, we’ve focused on seeing eye care through the customer’s lens. Our solutions are shaped by a unique customer feedback loop that solicits your input at every point of care. 
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
         See Commitment to Security
        </Button>
           </Box>
        </Grid>
       </Grid>
    </Container>
  )
}

export default Slide1