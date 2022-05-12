import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Carddata({data}) {
  return (
    <>
      {data.map((item) => {
        return(
          <>
          <Card sx={{ 
            maxWidth: 300,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:'20px'
           }}>
      <CardActionArea>
        <CardContent
        sx={{ 
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
           }}
        >
        <Typography  
       sx={{
           backgroundColor:'#3498db',
           width: 'fit-content',
           borderRadius: '60%',
           padding: '10px',
           margin:'10px'
           }}
       >
       
          <item.icon   sx={{ fontSize: 60 ,color:'#FFFFFF'}}/>
       </Typography>
          <Typography gutterBottom variant="h5" component="div">
             {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {item.descption}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </>
        )
      })}
    </>
   
  );
}
