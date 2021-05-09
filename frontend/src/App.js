import React from "react"
import Home from "./pages/Home";
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Cities from "./pages/Cities";
import CityItineraries from "./pages/CityItineraries";
import ServerDown from "./pages/ServerDown";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { connect } from "react-redux";
import loginActions from "./redux/actions/loginActions";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './preloader.css'
import './mediaQueries.css'

class App extends React.Component{

  componentDidMount() {
    if (!this.props.userLogged && localStorage.getItem('token')) {  
      const userData = JSON.parse(localStorage.getItem('userLogged'))
      const userLS= {
        token: localStorage.getItem('token'),
        ...userData
      }
      this.props.forcedLoginByLS(userLS)
    }
  }
  render(){

  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cities" component={Cities} />
            <Route path="/city/:id" component={CityItineraries} />
            <Route path="/serverdown" component={ServerDown} />
            {!this.props.userLogged && <Route path="/signup" component={SignUp} />}
            {!this.props.userLogged && <Route path="/login" component={LogIn} />}
            <Redirect to="/" />
        </Switch>
      </BrowserRouter>  
  );
}}

const mapStateToProps = state => {
  return {
      userLogged: state.loginReducer.userLogged
  }
}
const mapDispatchToProps = {
  forcedLoginByLS :  loginActions.forcedLoginByLS,

}

export default connect(mapStateToProps,mapDispatchToProps)(App)
