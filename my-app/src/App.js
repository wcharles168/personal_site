import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header.js'
import {Experience} from './components/Experience.js'

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="section">
          <Experience/>
        </div>
    </div>
  );
}

export default App;
