
import './App.css';
import AboutUs from './components/AboutUs';
import Actual from './components/Actual';
import Contact from './components/Contact';
import Galeria from './components/Galeria';
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
      <Contact></Contact>
    </div>
  );
}

export default App;
