import React from "react"
import Home from "./pages/Home";
import './styles.css'
import './preloader.css'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Cities from "./pages/Cities";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CityBanner from "./components/CityItineraries";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <BrowserRouter id="pageBody">
        <Header className="header"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cities" component={Cities} />
          <Route path="/city/:id" component={CityBanner} />
          <Route path="/error" component={Home} />
          <Redirect to="/error" />
        </Switch>
        <Footer className="footer"/>
      </BrowserRouter>

    
  );
}

export default App;

