import React from "react"
import {NavLink} from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"

class Error extends React.Component{

    toTop= () => {window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })}


    componentDidMount(){
        this.toTop()
    }

    render() {
 
        return( 
            <div className="granContenedor">
                <Header className="header"/>
                <div id="heroAvion" className= "hero" style={{backgroundImage: "url('/img/heroimg2.jpg')"}}/>                  
                <div className= "cityBanners divErrorBanner">
                    <div className="animate__animated animate__fadeIn  errorBanner" style={{backgroundImage: `url('./img/mapa.jpg')`}}> 
                        <h1 className="cityName">It seems like that page doesn't exist... 
                            <p>Try this options</p> 
                        </h1>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <NavLink className="nav-link btnHomeEnCities " exact to="/">Back to Home</NavLink>
                        <NavLink className="nav-link btnHomeEnCities " exact to="/cities">Back to Cities</NavLink>
                    </div>
                </div>
                <Footer className="footer"/>
            </div>
    )
    }
}

export default Error
