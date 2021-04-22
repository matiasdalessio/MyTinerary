import React from "react"
import { NavLink } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import { connect } from "react-redux"
import citiesActions from "../redux/actions/citiesActions";


class Cities extends React.Component{

    toTop= () => {window.scroll({
        top:0, 
        left:0
    })}


    componentDidMount(){  
        this.toTop()
        this.props.loadCities()            
    }

    render() {
        if (this.props.cities === null) {
            return(
                <div className="animate__animated animate__fadeIn main preloader">
                    <div className="sk-folding-cube">
                        <div className="sk-cube1 sk-cube"></div>
                        <div className="sk-cube2 sk-cube"></div>
                        <div className="sk-cube4 sk-cube"></div>
                        <div className="sk-cube3 sk-cube"></div>
                    </div>
                </div>
            )
        } 
        
        return(
            <div className="granContenedor">
                <Header className="header"/>
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
                        {this.props.cities.length >0 
                            ? this.props.cities.map(city =>{
                            const imgBanner= require(`../assets/${city.img}`)
                            return <NavLink key={city._id} to={`/city/${city._id}`}> 
                                        <div className="animate__animated animate__fadeIn cityBanner" style={{backgroundImage: `url('${imgBanner.default}')`}}> 
                                            <h1 className="cityName">{city.name} - {city.country}</h1> 
                                            <p className="parrafoBanner">{city.info}</p>
                                        </div>
                                    </NavLink>
                            }) : 
                            <div className="animate__animated animate__fadeIn  notFound" style={{backgroundImage: `url('./img/mapa.jpg')`}}> 
                                <h1 className="cityName ">Oh no! Looks like that city doesn't exist here yet... 
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
        cities: state.onlyOne.cities
    }
}

const mapDispatchToProps = {
    loadCities: citiesActions.fetchCities,
    findCity: citiesActions.findCity
}


export default connect(mapStateToProps, mapDispatchToProps)(Cities)

