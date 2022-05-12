import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Carddata from './Carddata';
import Card from './data.js'


const Highlights = () => {
  const [data , setData] = React.useState(Card);
  return (
    <Container maxWidth="xl" 
    sx={{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'secondary',
    marginTop:{md:'100px' , xs:'30px'}
    }}
    >
    <Box sx={{
        display:'flex',
        justifyContent:'center',
    }}>
    <Typography variant="h4"
    sx={{color:'#4c4c4c',
    margin:'10px 20px 50px 20px'
    }}
    >
 Delivering the Best Support is our Top Priority
 </Typography>
    </Box>
    <Box sx={{
      display:'flex' ,
      justifyContent:{md:'space-around' , xs:'center'},
      flexWrap:'wrap',
      // marginBottom:'40px'
      }}>
      <Carddata data= {data}/>
    </Box>

    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
    <Button variant="contained" size="large"
          sx={{
                    width:{md:'25%' , xs:'auto'},
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
         See Customer Support Stats
        </Button>
    </Box>
  
    </Container>
   
  )
}

export default Highlights