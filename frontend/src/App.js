import React from "react"
import Home from "./pages/Home";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Cities from "./pages/Cities";
import CityBanner from "./pages/CityItineraries";
import ServerDown from "./pages/ServerDown";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { connect } from "react-redux";
import loginActions from "./redux/actions/loginActions";
import './styles.css'
import './preloader.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  if (!props.userLogged && localStorage.getItem('token')) {  
    const userData = JSON.parse(localStorage.getItem('userLogged'))
    const userLS= {
      token: localStorage.getItem('token'),
      ...userData
    }
    props.forcedLoginByLS(userLS)
  }

  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cities" component={Cities} />
            <Route path="/city/:id" component={CityBanner} />
            <Route path="/serverdown" component={ServerDown} />
            <Route path="/error" component={Error} />
            {!props.userLogged && <Route path="/signup" component={SignUp} />}
            {!props.userLogged && <Route path="/login" component={LogIn} />}
            <Redirect to="/" />
        </Switch>
      </BrowserRouter>  
  );
}

const mapStateToProps = state => {
  return {
      userLogged: state.loginReducer.userLogged
  }
}
const mapDispatchToProps = {
  forcedLoginByLS :  loginActions.forcedLoginByLS,

}

export default connect(mapStateToProps,mapDispatchToProps)(App)
