import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import './App.css';
import Engagement from "./components/Engagement";
import { MainContainer } from './components/HomePage/styles';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<MainContainer/>} />
          <Route path="/home" exact element={<MainContainer/>} />
          <Route path="/engagement" exact element={<Engagement/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
