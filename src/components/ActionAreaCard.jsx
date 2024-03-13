import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({country, color}) {
  return (
    <Card sx={{ maxWidth: 345, height: 150 }}>
      <CardActionArea sx={{height: '100%', background: color, color: 'white'}}>
        <CardContent>
          <Typography sx={{display: 'grid', placeItems: 'center'}} gutterBottom variant='body1' component="div">
            {country.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}