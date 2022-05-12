import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


const Newscard = ({newsData}) => {
  return (
      <>
       {newsData.map((item) => {
           return(
               <>
               <Card key={item.id} 
               sx={{ 
                 maxWidth: 345,
                 marginBottom:'20px'
                  }}>
    <CardMedia
      component="img"
      height="140"
      image= {item.cover}
      alt="green iguana"
    />
    <CardContent>
      <Typography  gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {item.descption}
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
               </>
           )
       })}

      </>
  
  )
}

export default Newscard