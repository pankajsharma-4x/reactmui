import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Balance from "../images/balanceslide.webp"
import Button from '@mui/material/Button';
import Examine from "../images/doctor-exam-child.webp"

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

const Slide3 = () => {
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
         <Grid item xs={12} md={6}  >
         <Typography >
                   <img className={classes.sliderimage}   src={Examine} />
                </Typography>
         </Grid>
         <Grid item xs={12}  md={6} 
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
            MaximEyes: Eye Care EHR Software Designed for Efficiency and Ease
             </Typography>
            <Typography>
            See your patients and your practice more clearly with MaximEyes. Our one system ophthalmology and optometry EHR software replaces paper charts and rigid systems with: customizable templates and workflows, one-screen summaries, deep reporting, powerful search tools, online patient intake forms, online scheduling, patient engagement tools, and ophthalmic equipment integrations. Personalize your workflow and templates—or start with the system, as is—and get to work right away.
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
         Explore MaximEyes EHR
        </Button>
           </Box>
        </Grid>
       </Grid>
    </Container>
  )
}

export default Slide3