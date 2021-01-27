
import './App.css';
import Hero from './Components/Pages/Hero';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      
        <Hero />
      </Router>
    </div>
  );
}

export default App;
