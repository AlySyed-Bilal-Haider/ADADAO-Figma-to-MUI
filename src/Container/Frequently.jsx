import React from 'react'
import {Container,Grid,Typography,Box} from "@mui/material";
import Bounce from 'react-reveal/Bounce';
const FrequentlyQuestions = () => {
  return <>
     <Grid container display="flex"  sx={{backgroundColor:'#080523',color:'white',paddingTop:'20px' ,minHeight:'450px',
   marginTop:{sm:20,xs:20}}}>
         <Grid item xs={12} textAlign="center">
             <Typography variant="h4" padding="10px" sx={{fontSize:{sm:22,xs:18}}}>Frequemtly Questions</Typography>
             <Container>
             <Grid container display="flex" spacing={2} justifyContent="space-around" alignItems="baseline">
             <Grid item  md={4} sm={12} xs={12}>
                  <Bounce left>
                     <Box sx={{border:'1px solid white'}} p={3}>
                     <Typography>1. What is asking?</Typography>
                     <Typography>Staking is a way to earn rewards for holding Adadao $WZRD
                        cryptocurrency in a stacking pool that Adadao provides.
                     </Typography>
                     </Box>
                     <Box sx={{border:'1px solid white'}} mt={5}  p={3}>
                     <Typography>2. Where will I get my rewards? (Wellete)</Typography>
                     </Box>
                  </Bounce>
             </Grid>
             {/* //second Box */}
             <Grid item md={4} sm={12} xs={12}>
                        <Bounce top>
                        <Box  sx={{border:'1px solid white'}} mt={3}  p={3}>
                        <Typography>3. Where can I stacke my Adadoa Rokens (ADADAO)</Typography>
                        </Box>
                        </Bounce>
                        <Bounce bottom>
                        <Box sx={{border:'1px solid white'}} mt={2}  p={3}>
                        <Typography>4. What is asking?</Typography>
                        <Typography>Staking is a way to earn rewards for holding Adadao $WZRD
                           cryptocurrency in a stacking pool that Adadao provides.
                        </Typography>
                     </Box>
                     </Bounce>
             </Grid>
             {/* //three box */}
             <Grid item  md={4} sm={12} xs={12}>
                <Bounce right>
                     <Box sx={{border:'1px solid white'}}  p={3}>
                     <Typography>5. How does asking?</Typography>
                     </Box>
                     <Box sx={{border:'1px solid white'}}  p={3} mt={2}>
                     <Typography>6.Where can buy token?</Typography>
                     </Box>
               </Bounce>
             </Grid>
             </Grid>
             </Container>
        </Grid>
     </Grid>
  </>
}

export default FrequentlyQuestions