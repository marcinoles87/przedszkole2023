
import './App.css';
import Actual from './components/Actual';
import Contact from './components/Contact';
import Main from './components/Main';
import Navbars from './components/Navbars.js'

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Main></Main>
      <Actual></Actual>
      <Contact></Contact>
    </div>
  );
}

export default App;
