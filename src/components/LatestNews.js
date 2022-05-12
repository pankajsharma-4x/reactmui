import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import  News from './news.js'
import Newscard from "./Newscard"

const LatestNews = () => {
  const [newsData , setNewsData] = React.useState(News);
  return (
    <Container maxWidth="lg" 
    sx={{height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    marginTop:{md:'0' , xs:'15rem'}
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
   Latest News from First Insight
 </Typography>
    </Box>
    <Box sx={{
      display:'flex' ,
      justifyContent:'space-around',
      flexWrap:'wrap'
      }}>
      <Newscard newsData = {newsData}/>
    </Box>
    </Container>
  )
}

export default LatestNews