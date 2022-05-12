import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import Header from "./components/Header"
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Highlights from './components/Highlights';
import LatestNews from './components/LatestNews';
import Trash from './components/Trash'
import Links from './components/Links'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';




//************   THEME STARTS HERE  ***********************//

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },

    secondary: {
      main: "#ffa500"
    }
  },
  typography:{
    fontFamily:'Mulish'
  }
});

//************   THEME ENDS HERE  ***********************//

function App() {
  return (
    <ThemeProvider theme={theme}>
    {/* <Routes>
      <Route path='/MaximEyes.com' element = { <Trash />}>      </Route>
      <Route path='/EHR' element = { <Slide2 />}>     </Route>
      <Route path='/ImageManagement' element = { <Highlights />}> </Route>
      <Route path='/PracticeManagement' element = { <LatestNews />}> </Route>
      <Route path='/RCMServices' element = { <Links />}> </Route>
    </Routes> */}
        <Header />
        <Trash />
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Highlights />
        <LatestNews />
        <Links />
        <Footer />
    </ThemeProvider>
  
  )

}

export default App;
