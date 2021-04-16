import {NavLink, Link} from 'react-router-dom'
import HeaderSm from "../components/HeaderSm"

const Header = () =>{ 
    return(
        <header className= "header">
            <div className= "logo animate__animated animate__fadeInLeft"style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/logo.png'})`}}>
            </div>  
            <div className="animate__animated animate__fadeInRight headerDer"> 
            <div className="navbar">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
                <NavLink className="nav-link" exact to="/cities">Cities</NavLink>   
            </div>   
            <HeaderSm />    
            <ul className="nav-item">
                <button style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/generic-user-icon.jpg'})`}} className="nav-link genericUser  " data-bs-toggle="dropdown" ></button>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item  " to="/">Log In</Link></li>
                    <li><Link className="dropdown-item  " to="/">Sign Up</Link></li>
                </ul>
            </ul>
            </div>
        </header>        
     )}

export default Header