
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Actual from './components/Actual';
import Contact from './components/Contact';
import Galeria from './components/Galeria';
import Jadlospis from './components/Jadlospis.js';
import Main from './components/Main';
import Navbars from './components/Navbars.js'
import Button from 'react-bootstrap/esm/Button.js';


function App() {

  const handleOnClick = () => {
    window.scrollTo(0,0)
  }


  return (
    <div className="App">
      <Navbars></Navbars>
      <Button onClick={handleOnClick} className='arrow-up' style={{width:'40px' , height:'40px' , backgroundColor:'black' , borderRadius:'30px'}}><i className="fa fa-arrow-up 2xl"></i></Button>
      <Main></Main>
      <Actual></Actual>
      <AboutUs></AboutUs>
      <Galeria></Galeria>
      <Jadlospis></Jadlospis>
      <Contact></Contact>
    </div>
  );
}

export default App;
