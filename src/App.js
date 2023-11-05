
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Actual from './components/Actual';
import Contact from './components/Contact';
import Galeria from './components/Galeria';
import Jadlospis from './components/Jadlospis.js';
import Main from './components/Main';
import Navbars from './components/Navbars.js'


function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
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
