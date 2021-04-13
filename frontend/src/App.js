import React from "react"
import Home from "./pages/Home";
import './styles.css'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Cities from "./pages/Cities";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  

  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cities" component={Cities} />
          <Route path="/error" component={Home} />
          <Redirect to="/error" />
        </Switch>
        <Footer />
      </BrowserRouter>

    
  );
}

export default App;
