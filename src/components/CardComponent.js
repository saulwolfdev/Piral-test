import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardComponent = ({ title, content, backgroundColor, color }) => {
  return (
    <Card sx={{margin: 2}}>
      <CardContent sx={{backgroundColor: backgroundColor, color: color}}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;