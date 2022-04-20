import ResponsiveAppBar from './Container/Header/Navbar';
import Box from '@mui/material/Box';
import Token from './Container/Token/Token.jsx';
import Stacktoken from './Container/Token/Stacktoken';
import Footer from './Container/Footer/FooterComponent';
import FrequentlyQuestions from './Container/Frequently';
function App() {
  return <>
  <Box sx={{width:'100%', background: '#080523',p:'0px',m:'0px',overflowX:'hidden'}}>
   <ResponsiveAppBar/>
   <Token/>
   <Stacktoken/>
   <FrequentlyQuestions/>
   <Footer/>
  </Box>
  </>
}
export default App;
