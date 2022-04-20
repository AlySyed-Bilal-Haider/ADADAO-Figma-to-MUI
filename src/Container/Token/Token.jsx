import React from 'react'
import {Grid,Typography,Box,Button,useMediaQuery} from "@mui/material";
import gate1 from '../../Images/gate.png';
import Circle from '../../Images/dsr.png';
import pancake from '../../Images/pancake.png';
import ADADAO from '../../Images/ADADAO.png';
import Lary from '../../Images/lines.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
const Token = () => {
    const matches = useMediaQuery('(min-width:600px)');
  return <>
     <Grid container display="flex"  sx={{backgroundImage:`url(${Circle})`,backgroundRepeat:'no-repeat',
    paddingTop:'20px' ,minHeight:'800px'}}>
         <Grid item  md={6} xs={12}>
             <Box sx={{
            justifyContent:{lg:'center', md:'flex-start' },
            alignItem:{lg:'center', md:'flex-start' },
            m:{lg:'346px 0px 0px 110px',xs:'300px 0px 0px 20px'},color:'white'}}>
              <Bounce left>
            <Typography variant="h3" sx={{ fontSize:{  lg:25, md:22,sm:20,xs:18 }}}>ADADAO STAKING</Typography>
          <br/>
             <Typography  sx={{ fontSize:{  lg:18, md:16,sm:14,xs:10 }}}>Adadao staking program rewards token holders with generous token  rewards and special 
                NFT prizes. Try out the calculator below to see how you could benefit. Or buy some $WZRD now,
                If you haven't already!</Typography>  </Bounce>
            </Box>
         </Grid>
         <Grid item md={6} xs={12}>
         <Bounce right> <Box sx={{width:'70%', height:'344px',m:{lg:'237px 0px 0px 10%',
           md:'237px 0px 0px 10%',sm:'200px 0px 0px 8%',xs:'100px 0px 0px 11%'},
           backgroundColor:' linear-gradient(180deg, rgba(238, 233, 233, 0.49) 0%, rgba(238, 233, 233, 0.15) 100%)',
           borderRadius:'21px',borderBox:'box-sizing',
           boxShadow:{lg:'0px 4px 9px #101023',md:'0px 4px 9px #101023',sm:'5px 4px 12px #101023',xs:'10px 10px 15px #101023'}}}>
             <br/>
           <Typography variant="h5" textAlign="center" mt={3} sx={{color:{lg:'#020b36',sm:'white',xs:'white'}}} fonWeight="bold">
           Token sale is live<br/>
           <ArrowRightAltIcon fontSize="large" />
          </Typography><br/>
          <Typography  textAlign="center" sx={{color:{lg:'#020b36',sm:'white',xs:'white'}}}>
          Buy Adadao tokens
          </Typography><br/>
            <Box display="flex" justifyContent="space-around">
                <Button variant="contained" sx={{borderRadius:'0% 16% 10% 24% / 10% 14% 1% 17% ',
                height:'47px',width:'30%'}}>
                    <img src={gate1} alt="" style={{width:'100%',postion:'relative'}}/>
                </Button>
                <Button   variant="contained" sx={{borderRadius:'0% 16% 10% 24% / 10% 14% 1% 17% ', height:'47px',width:'30%'}}>
                <img src={pancake} alt="" style={{width:'100%',postion:'relative'}}/>
                </Button>
            </Box>
            <br/>
            <Button variant="contained" style={{margin:'25px 0px 0px 10%',height:'44px',width:'80%'}}>
                <img src={ADADAO} alt="" style={{width:'100%',postion:'relative'}}/>
            </Button>
           </Box> </Bounce> 
         </Grid><br/>
         <Grid item xs={12} sx={{backgroundColor: '#080523',color:'white', 
         textAlign:'center',marginTop:"100px",paddingBottom:'1%',height:'622px'}}>
             <img src={Lary} alt="" style={{width:'100%',height:'600px',position:'relative'}}/>
             <Box style={{ marginTop:matches?'-200px':'-320px'}} width="90%">
            <Zoom top>
             <Typography variant="h5" style={{fontSize:matches?'':'16px',padding:matches?'10px':'10px'}}>STAKE TOKEN TO EARN MORE</Typography>
             <Typography sx={{ fontSize:{ lg:16,md:14,sm:12,xs:12 }}}> Adadoe stacking program rewards broken holders with generates token rewards and special token prices</Typography>
             </Zoom> 
             </Box>
            
         </Grid>
     </Grid>
  </>
}

export default Token