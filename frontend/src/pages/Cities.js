import React from "react"
import { NavLink } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import { connect } from "react-redux"
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Loader from "../components/Loader";


class Cities extends React.Component{

    state={
        filteredCities:[]
    }

    toTop= () => {window.scroll({
        top:0, 
        left:0,
        behavior:"smooth"
    })}

    componentDidMount(){  
        this.toTop()
        this.props.fetchCities(this.props.history)   
        this.props.cleanItineraries() 
        this.setState({filteredCities: this.props.filteredCities})
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.filteredCities.length === 0 && this.props.filteredCities.length !==0) {
            this.setState({filteredCities: this.props.filteredCities})
        } 
    }

    render() {
        if (this.state.filteredCities.length === 0) {
            return(
                <Loader />
            )
        } 
        
        return(
            <div className="granContenedor">
                <Header />
                <div id="heroAvion" className= "hero" style={{backgroundImage: "url('./img/heroimg2.jpg')"}}/>
                <main className="main">
                    <div className="tituloCities">
                        <img className="avionH1Cities" src="/img/avionH1CitiesL.png" alt="avion izquierda"/>
                        <h1>Available cities</h1>
                        <img className="avionH1Cities" src="/img/avionH1CitiesR.png" alt="avion derecha"/>
                    </div> 
                    <div className="tituloCities">
                        <input placeholder="Search a City" className="finder" type='text'  onChange={(e) => this.props.findCity(e.target.value)}></input>
                    </div>
                    <div className= "cityBanners">
                        {this.props.filteredCities.length >0 
                            ? this.props.filteredCities.map(city =>{
                            return <NavLink key={city._id} to={`/city/${city._id}`}> 
                                        <div className="animate__animated animate__fadeIn cityBanner" style={{backgroundImage: `url('${city.img}')`}}> 
                                            <h1 className="cityName">{city.name} - {city.country}</h1> 
                                            <p className="parrafoBanner">{city.info}</p>
                                        </div>
                                    </NavLink>
                            }) : 
                            <div className="animate__animated animate__fadeIn  notFound" style={{backgroundImage: `url('./img/mapa.jpg')`}}> 
                                <h1 className="cityName cityNotFound">Oh no! Looks like that city doesn't exist here yet... 
                                    <p>Try another one!</p> 
                                </h1>
                            </div>}
                        <NavLink className="nav-link btnHomeEnCities" exact to="/">Back to Home</NavLink>
                    </div>
                </main>
                <Footer className="footer"/>
            </div>        
        )
    }
}
const mapStateToProps = state => {
    return {
        filteredCities: state.cityReducer.filteredCities
    }
}

const mapDispatchToProps = {
    fetchCities: citiesActions.fetchCities,
    findCity: citiesActions.findCity,
    cleanItineraries: itinerariesActions.cleanItineraries
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)

