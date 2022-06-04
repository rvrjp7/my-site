import './App.css';
import { MainContainer } from './components/HomePage/styles';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Raviraj Patil</h1>
        <h6>Something is cooking..... 🍲</h6>
      </header>
      <Navbar/>
      <MainContainer/>
    </div>
  );
}

export default App;
