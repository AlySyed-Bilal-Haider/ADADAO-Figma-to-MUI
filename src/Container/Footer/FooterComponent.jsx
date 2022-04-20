import React from 'react'
import {Container,Grid,Typography,Box} from "@mui/material";
import Footerlogo from '../../Images/footerlogo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return <>
  <Container style={{marginTop:"20px"}}>
     <Grid container display="flex" spacing={2}  sx={{backgroundColor:'#080523', padding:'20px' }}>
         <Grid  color="white" xs={6}>
                <Typography>
                    <img src={Footerlogo} alt=""/>
                </Typography>
         </Grid>
         <Grid item xs={6} >
           <Box style={{float:'right',color:'white'}} mr={5}>
               <FacebookIcon/>
               <YouTubeIcon/>
               <TwitterIcon/>
               </Box>
         </Grid>
     </Grid>
     </Container>
  </>
}

export default Footer