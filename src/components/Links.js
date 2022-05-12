import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Logo from "../images/logo-image.webp"
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Drummond from "../images/Drummond.webp"

//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE STARTS HERE  **************/
const useStyles = makeStyles(theme => ({
    logosm:{
        height:'80px',
        objectFit:'cover',
        opacity: '0.4',
    },
  }));

//***********    CUSTOMIZATION OF STYLES USING MAKE STYLE ENDS HERE  **************/

const Links = () => {
    const classes = useStyles();
  return (
    <Container maxWidth="lg" 
    sx={{
      marginTop:{xs:'220px' , md:'0px'},
    }}
    >
        <Grid container >
        <Grid item md={6} xs={12}>
          <Typography 
          sx={{ fontWeight:'lighter'}}
          >
             <img className={classes.logosm}  src={Logo} />
          </Typography>
          <Typography
          sx={{margin:'20px 40px 20px 0px'}}
          >
          MaximEyes EHR and practice management eye care software by First Insight is a unified solution that helps improve clinical decision-making and enhance patient care for optometry and ophthalmology practices. The user interface is clean, modern, and intuitive to simplify your workflow and business functions with fewer clicks. The self-guided integrated Learning Center streamlines your implementation and training experience.
          </Typography>
          <Box  >
             <FacebookIcon color='info'  fontSize= 'large' sx={{marginRight:'20px' ,opacity:'0.4' }}/>
             <TwitterIcon  color='info'  fontSize= 'large' sx={{marginRight:'20px' ,opacity:'0.4' }} />
             <LinkedInIcon color='info'  fontSize= 'large' sx={{marginRight:'20px' ,opacity:'0.4' }} />
             <YouTubeIcon  color='info'  fontSize= 'large' sx={{marginRight:'20px' ,opacity:'0.4' }} />
          </Box>
        </Grid>

        <Grid item md={6} xs={12} 
        sx={{
          margin:'20px 0px',
          padding: {xs:'0px' , md:'0px 30px'},
          }}
        >
            <Typography variant='h5'>
             ONC Certification
            </Typography>
            <Typography>
            MaximEyes.com is Cures Update certified for all of the currently required criteria. MaximEyes.com and MaximEyes EHR are 2015 Edition compliant and have been certified by an ONC-ACB in accordance with the applicable certification criteria adopted by the Secretary of the U.S. Department of Health and Human Services. Read more.
            </Typography>
             <Typography 
             sx={{
                 display:'flex',
                 justifyContent:'center',
                 alignItems:'center',
                 margin:'20px 0px'
                 }}
             >
                <img  src={Drummond}/>
             </Typography>
        </Grid>
        </Grid>
    </Container>
  )
}

export default Links