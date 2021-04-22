import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Itineraries from "../components/Itineraries"
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";


class CityItineraries extends React.Component{
    toTop= () => {window.scroll({
        top:0, 
        left:0,
    })}
    
    componentDidMount() {
        this.toTop()
        this.props.loadCity(this.props.match.params.id)

    }  


    
    render(){
        if (this.props.city === null || this.props.city._id !== this.props.match.params.id) {
            return(
                <div className="animate__animated animate__fadeIn preloader">
                    <div className="sk-folding-cube">
                        <div className="sk-cube1 sk-cube"></div>
                        <div className="sk-cube2 sk-cube"></div>
                        <div className="sk-cube4 sk-cube"></div>
                        <div className="sk-cube3 sk-cube"></div>
                    </div>
                </div>
            )
        }

        const imgcityItinerary= require(`../assets/${this.props.city.img}`)

        return (   
            <div>     
                <Header className="header"/>
                <main className="main">
                    <div className="granContenedor">
                        <div id="heroAvion" className= "hero" style={{backgroundImage: `url('${imgcityItinerary.default}')`}}>
                        </div>
                        <div className="tituloCities">
                            <img className="avionH1Cities" src="/img/avionH1CitiesL.png" alt="avion izquierda"/>
                            <div>
                                <h1>{this.props.city.name}</h1>
                                <h2>{this.props.city.country}</h2>
                            </div>
                            <img className="avionH1Cities" src="/img/avionH1CitiesR.png" alt="avion derecha"/>
                        </div>
                        <div className="cityBanners">
                            <Itineraries/>                        
                            <div className="d-flex justify-content-center ">
                                <NavLink className="nav-link btnHomeEnCities " exact to="/">Back to Home</NavLink>
                                <NavLink className="nav-link btnHomeEnCities " exact to="/cities">Back to Cities</NavLink>
                            </div>
                        </div>
                    </div>                              
                </main>
                <Footer className="footer"/>
            </div>
        )
    ;}
}
  

const mapStateToProps = state => {
    return {
        city: state.onlyOne.city
    }
}

const mapDispatchToProps = {
    loadCity: citiesActions.fetchSingleCity,
    showMoreToggle: itinerariesActions.showMoreToggle
}


export default connect(mapStateToProps, mapDispatchToProps)(CityItineraries)