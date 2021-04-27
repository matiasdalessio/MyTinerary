import React from "react"
import Home from "./pages/Home";
import './styles.css'
import './preloader.css'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Cities from "./pages/Cities";
import CityBanner from "./pages/CityItineraries";
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from "./pages/Error";
import ServerDown from "./pages/ServerDown";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";




function App() {

  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cities" component={Cities} />
            <Route path="/city/:id" component={CityBanner} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/serverdown" component={ServerDown} />
            <Route path="/error" component={Error} />
            <Redirect to="/error" />
        </Switch>
      </BrowserRouter>    
  );
}

export default App;

