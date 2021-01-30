
import './App.css';
import Hero from './Components/Pages/Hero';
import Offer from './Components/Pages/Offer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Switch>
          

                  <Route exact path='/' component={Hero} />
                  <Route component={Offer} />
                  

        </Switch>
      </Router>
    </div>
  );
}

export default App;
