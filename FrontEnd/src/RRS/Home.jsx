import React from 'react';
import NavBar from './NavBar';
import './Home.css';
import { Box, Button, FormControl, InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Home = () => {
  
  return (
    <>
    <NavBar/>
    <div className='cont1'>
      <Box sx={{width:1500,height:350,borderWidth:3,borderStyle:'solid'}} className='box1'>
        <div>
          <label style={{color:'red',marginLeft:'10px'}}> BOOKING DATE:</label>
          <input type='date' className='date1'></input>
          <input type='time' style={{marginLeft:2}}></input>
        </div>
        <div className='m1'>
          <FormControl sx={{ m:1, minWidth: 100 }} className='inp1'>
            <InputLabel sx={{backgroundColor:'red',width:100,height:20,borderColor:'',borderWidth:3,borderStyle:'solid'}}>MEMBERS</InputLabel>
            <Select>
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
              <MenuItem>4</MenuItem>
              <MenuItem>5</MenuItem>
              <MenuItem>6</MenuItem>
              <MenuItem>7</MenuItem>
              <MenuItem>8</MenuItem>
            
            </Select>
          </FormControl>
          <FormControl sx={{ m:1, minWidth: 100 }} className='inp1'>
            <InputLabel sx={{backgroundColor:'red',width:100,height:20,borderColor:'',borderWidth:3,borderStyle:'solid'}}>DINE IN TYPE</InputLabel>
            <Select>
              <MenuItem>OUT DOOR</MenuItem>
              <MenuItem>IN DOOR</MenuItem>
             
            </Select>
          </FormControl>
         
          <FormControl sx={{ m:1, minWidth: 100 }} className='inp1'>
            <InputLabel sx={{backgroundColor:'red',width:100,height:20,borderColor:'',borderWidth:3,borderStyle:'solid'}}>DISH TYPE</InputLabel>
            <Select>
              <MenuItem>SEA FOOD GRILL</MenuItem>
              <MenuItem>MEAT GRILL</MenuItem>
              <MenuItem>VEG GRILL</MenuItem>
              <MenuItem>MIXED GRILL</MenuItem>
             
            </Select>
          </FormControl>

        </div>
        <div>
        <img src='/images/hh.jpg' width='250' height='250' style={{marginLeft:'50%',marginTop:'-9%'}}></img>
          <input type='text' placeholder='SPECIFIC DINE IN FEED BACK' className='r1'/>
          <Button variant='contained' sx={{height:30,marginLeft:2}}>POST</Button>
        </div>
      </Box><br/>
      <Box sx={{width:1500,height:500,borderColor:'red',borderWidth:4,borderStyle:'double',backgroundColor:'black'}}>
        <h2 style={{textAlign:'center'}}>NEW</h2>
        <div>
          
          <img src='/images/post1.jpg' width='300' height='400' style={{marginLeft:'70px'}}></img>
          
          <img src='/images/post3.jpg' width='300' height='400' style={{marginLeft:'70px'}}></img>
          <img src='/images/post9.jpg' width='300' height='400' style={{marginLeft:'70px'}}></img>
          <img src='/images/post10.jpg' width='300' height='400' style={{marginLeft:'70px'}}></img>
         
        </div>

      </Box>
      <div>
        
      </div>
    </div>
    </>
  );
}

export default Home
