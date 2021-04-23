import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Itineraries from "../components/Itineraries"
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";


class CityItineraries extends React.Component{

    toTop= () => {window.scroll({
        top:0, 
        left:0,
    })}

    componentDidMount() {
        this.toTop()
        if (this.props.cities.length > 0) {
            this.setState({
                city: this.props.cities.find(city => city._id === this.props.match.params.id),
                loading : false, itineraries: this.props.itineraries.filter(itinerary => itinerary.cityID._id === this.props.match.params.id)
            })            
        } else {
            (this.props.history.push('/cities'))            
        }                
    }

    state={
        itineraries: null,
        city: null,
        loading: true
    }
    
    render(){
        if (this.state.loading) {
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
        const imgcityItinerary= require(`../assets/${this.state.city.img}`)

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
                                <h1>{this.state.city.name}</h1>
                                <h2>¡Here is some of our Itineraries!</h2>
                            </div>
                            <img className="avionH1Cities" src="/img/avionH1CitiesR.png" alt="avion derecha"/>
                        </div>
                        <div className="cityBanners">
                            { this.state.itineraries.length > 0 
                            ? this.state.itineraries.map((itinerary, index) =>{
                                return <Itineraries  key= {index} itinerary ={itinerary}/>                                
                                })
                            :   <div className= "cityBanners divErrorBanner">
                                    <div className="animate__animated animate__fadeIn  errorBanner" style={{backgroundImage: `url('/img/itineraryBackground.jpg')`}}> 
                                        <h1 className="cityName">We don't have any itineraries here right now 
                                            <p>Try another city!</p> 
                                        </h1>
                                    </div>
                                </div>
                            }                                                   
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
        cities: state.cityReducer.cities,
        city: state.cityReducer.city,
        itineraries: state.itineraryReducer.itineraries
    }
}

const mapDispatchToProps = {
    loadItineraries: itinerariesActions.loadItineraries
}


export default connect(mapStateToProps, mapDispatchToProps)(CityItineraries)