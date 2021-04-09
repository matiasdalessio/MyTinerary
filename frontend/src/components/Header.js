import {NavLink, Link} from 'react-router-dom'

const Header = () =>{ {
    return(
        <div className= "header">
        <div style={{backgroundImage: "url('./img/LOGO.png')", minWidth:"12vw", height:"20vh", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>   
        <ul className="nav nav-pills">         
            <li className="nav-item">
            <NavLink className="nav-link text-dark" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link text-dark" exact to="/cities">Cities</NavLink>
            </li>
            <li className="nav-item">
            <a class="nav-link dropdown-toggle  text-dark " data-bs-toggle="dropdown" href="#" role="button" ><img  src="./img/generic-user-icon.jpg"  width="50"  alt="TGIF"/></a>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item  bg-transparent text-dark" href="house-data.html">Sign In</Link></li>
              <li><Link class="dropdown-item active  text-dark" href="#">Log In</Link></li>
            </ul></li>
        </ul>
    </div>
    )
}

}

export default Header
