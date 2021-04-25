import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Itineraries from "../components/Itineraries"
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import citiesActions from "../redux/actions/citiesActions";


class CityItineraries extends React.Component{
    
    state={
        city: null,
        loading: true,
    }

    toTop= () => {window.scroll({
        top:0, 
        left:0,
    })}

    componentDidMount() {
        this.props.loadItineraries(this.props.match.params.id, this.props) 
        this.toTop()
        if (this.props.cities.length !== 0) {
            this.setState({
                city: this.props.cities.find(city => city._id === this.props.match.params.id),
                loading : false
            })             
        } else {
            this.props.fetchCities(this.props)         
        }               
    }

    componentDidUpdate(prevProps){
        if (prevProps.cities.length === 0 && this.props.cities.length !== 0) {
            this.setState({
                city: this.props.cities.find(city => city._id === this.props.match.params.id)
            })            
        } 
    }  
    
    render(){         
        if (this.state.loading) {
            return(
                <div className="main preloader">
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
                            </div>
                            <img className="avionH1Cities" src="/img/avionH1CitiesR.png" alt="avion derecha"/>
                        </div>
                        <h2 className="itinerariesSubtitle">¡Here is some of our Itineraries!</h2>
                        <div className="cityBanners">
                            { this.props.itineraries !== null &&  this.props.itineraries.length !== 0
                            ? this.props.itineraries.map((itinerary, index) =>{
                                return <Itineraries  key= {index} itinerary ={itinerary}/>                                
                                })
                            :   <div className= "cityBanners divErrorBanner notFoundItineraries">
                                    <div className="animate__animated animate__fadeIn  errorBanner" style={{backgroundImage: `url('/img/itineraryBackground.jpg')`}}> 
                                        <h2 className="cityName">We don't have any itineraries here right now</h2>
                                        <h3 className="cityName">Try another city!</h3> 
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
    fetchCities: citiesActions.fetchCities,
    loadItineraries: itinerariesActions.loadItineraries
}


export default connect(mapStateToProps, mapDispatchToProps)(CityItineraries)