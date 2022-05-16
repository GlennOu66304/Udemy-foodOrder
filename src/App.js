import react from 'react';
import Navbar from './components/navBar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
// import Home from './components/pages/Home';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
import {Home, Services, Products, SignUp} from "./pages"

function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component= {Home} />
      <Route path='/services' exact component= {Services} />
      <Route path='/products' exact component= {Products} />
      <Route path='/sign-up' exact component= {SignUp} />

    </Switch>

   </Router>

   </>
  );
}

export default App;
