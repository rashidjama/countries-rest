import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import './CountryCard.css'

const CountryCard = ({ name, flag, population, capital, region }) => {
  return (
    <div className='Card'>
          <Card style={{boxShadow: '3px 2px 4px grey'}} sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={flag}alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" style={{fontWeight: 'bold'}} sx={{ fontSize: 'md', mt: 2 }}>
        { name }
      </Typography>
      <Typography level="body2" sx={{ mt: 3 }}>
        Population: {population}
      </Typography>  
      <Typography level="body2" sx={{ mt: 1, mb: 1 }}>
        Region: { region }
      </Typography>
      <Typography level="body2">
        Capital: { capital }
      </Typography>
    </Card>
    </div>
  );
}

export default CountryCard