import {Link} from 'react-router-dom'
import HeaderSm from "../components/HeaderSm"

const Header = () =>{ 
    return(
        <header className= "header">
            <div className= "logo animate__animated animate__fadeInLeft"style={{backgroundImage: "url('./img/LOGO.png')"}}>
            </div>  
            <div class="animate__animated animate__fadeInRight headerDer">
            <HeaderSm />            
            <ul className="nav-item">
                <button style={{backgroundImage: "url('./img/generic-user-icon.jpg')"}} class="nav-link genericUser text-dark " data-bs-toggle="dropdown" ></button>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item  text-dark" href="house-data.html">Log In</Link></li>
                    <li><Link class="dropdown-item  text-dark" href="#">Sign Up</Link></li>
                </ul>
            </ul>
            </div>
        </header>        
     )}

export default Header