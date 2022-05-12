import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container maxWidth="xl"
    sx={{
      textAlign:'center',
      backgroundColor:'#dedede',
      padding:'30px'
      }}
     >
     <Typography>
     ©1994-2022 First Insight Corporation. All Rights Reserved. MaximEyes® is a registered trademark of First Insight® Corporation.
     </Typography>
    </Container>
  )
}

export default Footer