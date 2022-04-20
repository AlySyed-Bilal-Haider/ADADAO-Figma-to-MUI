import React from 'react'
import {Container,Grid,Typography,Box,Button,TextField,Radio,useMediaQuery } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import Jal from '../../Images/Jal.png';
import Vector from '../../Images/Vector.png';
import Group from '../../Images/groups.png';
import Lines from '../../Images/lines.png';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
const border={
    border:'1px solid white',
    marginTop:'5px',
    display:"flex",
    justifyContent:"space-between"
}
const Buttonstyle={
    width:'100%',
    border:'1px solid white',
    color:'white'
}
const APYdetails={
 margin:"2%"
}
const inputstyling={
    width:'30%',
    height:'30px',
    float:'right',
    marginRight:'20px',
    padding:'5px',
    border:'none',
    borderRadius:'5px'
}
const Stacktoken = () => {
    const matches1 = useMediaQuery('(min-width:770px)');
    const matches= useMediaQuery('(min-width:600px)');
  return <>
     <Grid container display="flex"  sx={{backgroundColor:'#080523',backgroundRepeat:'no-repeat'}}>
        <Grid item md={6} mt={5}>
            <Bounce left>
          <Box sx={{width:'70%',height:'600px',
          justifyContent:'center',
          background: 'radial-gradient(circle, rgba(28,24,172,1) 0%, rgba(15,9,73,1) 71%)',
          color:'white',
          padding:'10px',
          margin:'auto',
          boxShadow:'5px 5px 10px 2px lightgray,-5px 5px 10px 2px lightgray'
         }}>
                <Typography sx={{margin:'20px 30px 30px 30px'}} variant="h5">Stake Tokens</Typography>
                <Typography sx={{margin:'0px 20px 20px 20px',float:'left'}}>Stack amount</Typography>
                 <input type="text" name="amount" placeholder='Meno' style={inputstyling}/><br/><br/>
                    <Box display="flex" variant="outlined" justifyContent="space-between"
                    alignItem="center" style={{marginTop:'10px'}}>
                     <Zoom top cascade>
                    <Button style={Buttonstyle}  margin="'matches?5px 5px 5px 5px':'5px 5px 5px 0px'">25%</Button>
                    <Button style={Buttonstyle} margin="'matches?5px 5px 5px 5px':'5px 5px 5px 0px'">50%</Button>
                    <Button style={Buttonstyle} margin="'matches?5px 5px 5px 5px':'5px 5px 5px 0px'">75%</Button>
                    <Button style={Buttonstyle} margin="'matches?5px 5px 5px 5px':'5px 5px 5px 0px'">100%</Button>
                    </Zoom>
                   </Box><br/>
                    <Typography textAlign="left">Stake period</Typography>
                    <Zoom top cascade> 
                    <Box style={border} variant="outlined">
                    <Radio/>
                    <strong style={APYdetails}>APY 13%</strong> <strong style={APYdetails}>4 months</strong></Box>
                    <Box style={border} variant="outlined">
                    <Radio/>
                    <strong style={APYdetails}>APY 33%</strong>
                    <strong style={APYdetails}>6 months</strong>
                    </Box>
                    <Box style={border} variant="outlined" >
                    <Radio/>
                    <strong style={APYdetails}>APY 53%</strong>
                     <strong style={APYdetails}>10 months</strong>
                    </Box>
                    </Zoom>
                    <Typography sx={{fontSize:'14px',width:'90%'}} margin="5%">
                    You can stake up to 20000 tokens in each pool. Once staked, 
                    you will generate a reward and won't be able to withdraw your 
                    staked tokens until the staking period ends.
                    </Typography>
                    <Box width="100%" display="flex" justifyContent="space-between" height="auto" style={{display:matches?'block':'none'}}>
                        <img  style={{width:matches1?'32%':'26%',marginLeft:"-8px",position:'relative'}} src={Vector} alt=""/>
                        <img src={Jal}  alt="" width="58%" height="25%" style={{marginBottom:'10px',float:'right'}}/>
                    </Box>
                    </Box>
                    </Bounce>
               </Grid>
                <Grid md={6} paddingBottom="10px">
                <img src={Group} alt=""  style={{marginTop:'-30px',width:"100%",position:'relative'}}/>
                
                <Box style={{margin:'-80% 0px 0px 10px',color:'white',textAlign:'center'}} >
                <Bounce right> <Typography variant="h5">Your Balance</Typography> </Bounce>
                    <Bounce right>
                    <Typography marginTop="10px" width="90%" fontSize={{
                        lg:14,
                        md:12,
                        sm:10
                    }}>Please connect to wallet and switch to Binance Smart Chain network</Typography>
                    </Bounce>
                    <Bounce right> 
                    <Button variant="outlined" sx={{width:'80%',height:'53px',borderRadius:'3px',marginTop:'10%'}}>Connect Wallet</Button>
                    </Bounce>
                </Box>
                </Grid>
            <Grid item xs={12} sx={{backgroundImage: '#080523',color:'white', textAlign:'center',marginTop:"20px",
            paddingBottom:'1%',display:{sm:'none',xs:'none'}}}>
             <img src={Lines} alt="" style={{width:'100%',height:'300px'}}/>
         </Grid>
     </Grid>
  </>
}

export default Stacktoken