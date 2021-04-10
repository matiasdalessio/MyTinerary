import {NavLink, Link} from 'react-router-dom'


const Footer = () =>{

    return(
        <div className="footer">
            <h2>MyTinerary 2021 All rights Reserved</h2>
            <div class="navFooter">
                <Link className="nav-link text-dark" exact to="/">Home</Link>
                <Link className="nav-link text-dark" exact to="/cities">Cities</Link>
                <Link className="nav-link text-dark" exact to="/">Sing In</Link>
                <Link className="nav-link text-dark" exact to="/">Sing Up</Link>
            </div>
        </div>
    )

}

export default Footer