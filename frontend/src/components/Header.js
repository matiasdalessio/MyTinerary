import {NavLink, Link} from 'react-router-dom'
import HeaderSm from "../components/HeaderSm"

const Header = (props) =>{ 

    console.log(props)

    const logOut=((e)=> {
        alert(`See you soon ${JSON.parse(localStorage.getItem("loginInfo")).firstName}`)
        localStorage.removeItem("loginInfo")
    })

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
                    <button style={localStorage.getItem("loginInfo") ?  {backgroundImage: `url(${JSON.parse(localStorage.getItem("loginInfo")).img})`} : {backgroundImage: `url(${'/img/generic-user-icon.jpg'})`}} className="nav-link genericUser" data-bs-toggle="dropdown" ></button>
                    {localStorage.getItem("loginInfo") 
                    ?<ul className="dropdown-menu">
                        <li><Link className="dropdown-item" onClick={(e)=>logOut(e.target)} to="/">Log Out</Link></li>
                    </ul> 
                    :<ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/login">Log In</Link></li>
                        <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                    </ul>}
                </ul>
            </div>
        </header>        
    )
}

export default Header