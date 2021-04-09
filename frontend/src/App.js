import React from "react"
import Home from "./pages/Home";
import './styles.css'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Cities from "./pages/Cities";


function App() {


  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cities" component={Cities} />
          <Route path="/error" component={Home} />
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>

    
  );
}

export default App;
