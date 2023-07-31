import React from 'react'
import { Button } from '@mui/material';
import './Restaurant.css';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import {useNavigate} from 'react-router-dom'

const Restaurant = () => {
    const nav = useNavigate();
    const goBack = () => {
        window.history.back();
    };
  return (
    <div className='head'>
    <div className='card1'>
    <Card variant="outlined" sx={{width:400,backgroundImage:'linear-gradient(90deg, rgba(232,56,56,1) 0%, rgba(82,53,53,1) 35%, rgba(173,169,169,1) 100%);'}}>
      <Typography level="h1" sx={{fontSize:'x-larger',color:'white'}}>OUT DOOR</Typography>
      <Typography sx={{color:'blacksmoke'}}>
      "Experience the ultimate barbecue indulgence under the starlit sky at GRILL DAY , where our expertly crafted outdoor setup elevates your dining experience to new heights."
      </Typography>
      <Button onClick={() => nav('/Reserve')} className='btn' variant="contained" sx={{backgroundImage:'linear-gradient(90deg, rgba(151,145,145,1) 0%, rgba(146,94,94,1) 35%, rgba(248,3,3,1) 100%)'}}>Reserve</Button>
    </Card>
    </div>
    <div className='card2'>
    <Card variant="outlined" sx={{width:400,backgroundImage:'linear-gradient(90deg, rgba(232,56,56,1) 0%, rgba(82,53,53,1) 35%, rgba(173,169,169,1) 100%);'}}>
      <Typography level="h1" sx={{fontSize:'x-larger'}}>OUT DOOR</Typography>
      <Typography>
      "Indulge in the pleasure of year-round barbecues at GRILL DAY , where our state-of-the-art indoor grilling station ensures you can relish delectable barbecue dishes, rain or shine."</Typography>
      <Button onClick={() => nav('/Reserve')} className='btn' variant="contained" sx={{backgroundImage:'linear-gradient(90deg, rgba(151,145,145,1) 0%, rgba(146,94,94,1) 35%, rgba(248,3,3,1) 100%);'}}>Reserve</Button>
    </Card>
    </div>
    <div className='card3'>
    <Card variant="outlined" sx={{width:400,backgroundImage:'linear-gradient(90deg, rgba(232,56,56,1) 0%, rgba(82,53,53,1) 35%, rgba(173,169,169,1) 100%);'}}>
      <Typography level="h1" sx={{fontSize:'x-larger'}}>AT YOUR PLACE</Typography>
      <Typography>
      Experience the joy of hosting a private gourmet barbecue at your home, as our expert team transforms your backyard into a culinary haven, delivering delectable flavors and exceptional service right to your door.</Typography>
      <Button onClick={() => nav('/Reserve')} className='btn' variant="contained" sx={{backgroundImage:'linear-gradient(0deg, rgba(254,0,0,1) 0%, rgba(214,174,174,1) 100%);'}}>Reserve</Button>
    </Card>
    </div>
    <div className='card4'>
    <Card variant="outlined" sx={{width:400,backgroundImage:'linear-gradient(90deg, rgba(232,56,56,1) 0%, rgba(82,53,53,1) 35%, rgba(173,169,169,1) 100%);'}} className='card'>
      <Typography level="h1" sx={{fontSize:'x-larger'}}>DELIVERY</Typography>
      <Typography>
      Enjoy the mouthwatering flavors of our grilled specialties delivered right to your doorstep. Whether you're craving sizzling steaks, succulent kebabs, or grilled veggies, we've got you covered.      </Typography>
      <Button onClick={() => nav('/Reserve')} className='btn' variant="contained" sx={{backgroundImage:'linear-gradient(90deg, rgba(151,145,145,1) 0%, rgba(146,94,94,1) 35%, rgba(248,3,3,1) 100%);'}}>Reserve</Button>
    </Card>
    </div>

    </div>

  );
};

export default Restaurant;