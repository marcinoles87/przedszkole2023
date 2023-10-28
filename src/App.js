
import './App.css';
import Actual from './components/Actual';
import Main from './components/Main';
import Navbars from './components/Navbars.js'

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Main></Main>
      <Actual></Actual>
    </div>
  );
}

export default App;
