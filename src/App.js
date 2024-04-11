
import { Route, Router, Routes , Link } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Actual from './components/Actual';
import Contact from './components/Contact';
import Galeria from './components/Galeria';
import Jadlospis from './components/Jadlospis.js';
import Main from './components/Main';
import Navbars from './components/Navbars.js'
import Button from 'react-bootstrap/esm/Button.js';
import Rekrutacja from './components/pages/Rekrutacja.js';

import Grupa1 from './components/pages/Grupa1.js';
import Grupa2 from './components/pages/Grupa2.js';
import Grupa3 from './components/pages/Grupa3.js'
import Grupa4 from './components/pages/Grupa4.js'
import Grupa5 from './components/pages/Grupa5.js'
import { projectStorage , projectFirestore } from './firebase/config.js';
import Dyzurwakacyjny from './components/pages/Dyzurwakacyjny.js';



function App() {

  const handleOnClick = () => {
    window.scrollTo(0,0)
  }

  const handleOnClickFontZoom = () => {
    const font = document.querySelector('.App')
    console.log(font)

    font.classList.toggle('zoom')
  }


  

  return (
    <div className="App">
   

   <Routes>
        <Route  path='*' element={
      <>
          <Navbars link={Link}></Navbars>
          <Button onClick={handleOnClick} className='arrow-up' style={{width:'40px' , height:'40px' , backgroundColor:'grey' , borderRadius:'30px'}}><i className="fa fa-arrow-up 2xl"></i></Button>
          <Button onClick={handleOnClickFontZoom} > <i class="fa-solid fa-font"></i></Button>
          <Main></Main>
          <Actual></Actual>
          <AboutUs></AboutUs>
          <Galeria></Galeria>
          <Jadlospis></Jadlospis>
          <Contact></Contact>
        
      </>
      }/>
      
        <Route path='/grupa1' element={<Grupa1></Grupa1>}></Route>
        <Route path='/grupa2' element={<Grupa2></Grupa2>}></Route>
        <Route path='/grupa3' element={<Grupa3></Grupa3>}></Route>
        <Route path='/grupa4' element={<Grupa4></Grupa4>}></Route>
        <Route path='/grupa5' element={<Grupa5></Grupa5>}></Route>
        <Route path='/rekrutacja' element={<Rekrutacja></Rekrutacja>}></Route>
        <Route path='/dyzur' element={<Dyzurwakacyjny></Dyzurwakacyjny>}></Route>


      </Routes>
    </div>
  );
}

export default App;
