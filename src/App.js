
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
import Events from './components/Events.js';



function App() {

  const handleOnClick = () => {
    window.scrollTo(0,0)
  }


  return (
    <div className="App">
   

   <Routes>
      <Route path='/' element={<Navbars></Navbars>}>
      <Route path='/' element={<Button onClick={handleOnClick} className='arrow-up' style={{width:'40px' , height:'40px' , backgroundColor:'grey' , borderRadius:'30px'}}><i className="fa fa-arrow-up 2xl"></i></Button>}></Route>
      <Route element={<Main></Main>}></Route>
      <Route element={<Actual></Actual>}></Route>
      <Route element={<AboutUs></AboutUs>}></Route>
      <Route element={<Events></Events>}></Route>
      <Route element={<Galeria></Galeria>}></Route>
      <Route element={<Jadlospis></Jadlospis>}></Route>
      <Route element={<Contact></Contact>}></Route>
      </Route>
     
      </Routes>


      {/* <Route><Navbars></Navbars></Route>
      <Button onClick={handleOnClick} className='arrow-up' style={{width:'40px' , height:'40px' , backgroundColor:'grey' , borderRadius:'30px'}}><i className="fa fa-arrow-up 2xl"></i></Button>
      <Main></Main>
      <Actual></Actual>
      <AboutUs></AboutUs>
      <Events></Events>
      <Galeria></Galeria>
      <Jadlospis></Jadlospis>
      <Contact></Contact> */}
    </div>
  );
}

export default App;
