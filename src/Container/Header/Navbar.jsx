import React from 'react'
import {Grid,Typography,Box} from "@mui/material";
import websitelogo from '../../Images/logo.png';
import TemporaryDrawer from './Responisvedrawer';
import './Navbarcss.css';
const navbarstyling={
    padding:'10px',
    marginTop:'8%',
}
const Navbar = () => {
  return <>
   <Grid container position="absolute" top="0px" left="0px">
       <Grid item md={6}>
           <Typography sx={{ width:'161px',height:'38px',m:'52px 0px 0px 115px'}}>
             <img src={websitelogo} alt=""/>
           </Typography>
       </Grid>
       <Grid item md={6} 
        sx={{display:{
         lg:'block',
         md:'block',
         sm:'none',
         xs:'none'
       }}}>
           <nav style={navbarstyling}>
               <a href="">Home</a>
               <a href="">Github</a>
               <a href="">Whitepaper</a>
               <a href="">Contact Us</a>
            </nav>
       </Grid>
       <Grid item  md={6}
       sx={{color:'white',zIndex:1,display:{ lg:'none', md:'none',  sm:'block', xs:'block' }}} style={{position:'absolute'}}>
         <TemporaryDrawer/>
       </Grid>
   </Grid>

  </>
}

export default Navbar