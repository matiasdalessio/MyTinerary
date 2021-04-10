import {NavLink, Link} from 'react-router-dom'

const Header = () =>{ {
    return(
    <div className= "header">
        <div style={{backgroundImage: "url('./img/LOGO.png')", width:"20vh",  height:"20vh", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
        </div>   
        <div className="navbar">
            <ul className="nav nav-pills">         
                <li className="nav-item">
                    <NavLink className="nav-link text-dark" exact to="/">Home</NavLink></li>
                <li className="nav-item">
                    <NavLink className="nav-link text-dark" exact to="/cities">Cities</NavLink></li>        
            </ul>
            <ul className="nav-item">
               <button style={{backgroundImage: "url('./img/generic-user-icon.jpg')", width:"80px",  height:"80px", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} class="nav-link genericUser text-dark " data-bs-toggle="dropdown"  role="button" ></button>
                <ul class="dropdown-menu">
                    <li><Link class="dropdown-item  text-dark" href="house-data.html">Sign In</Link></li>
                    <li><Link class="dropdown-item  text-dark" href="#">Sign Up</Link></li>
                </ul>
            </ul>
        </div>
        
    </div>
    )
}

}

export default Header
