import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"


class CityItineraries extends React.Component{
    toTop= () => {window.scroll({
        top:0, 
        left:0,
    })}
    
    state={
        city:null
    }
    componentDidMount() {
        this.toTop()
        axios.get(`http://192.168.0.147:4000/api/city/${this.props.match.params.id}`)
        .then(response =>response.data.success
            ? this.setState({city: response.data.respuesta})
            : this.props.history.push('/error'))      
        .catch(error => this.props.history.push('/error')) 
    }  
    
    render(){
        if (this.state.city === null) {
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
                                <h2>{this.state.city.country}</h2>
                            </div>
                            <img className="avionH1Cities" src="/img/avionH1CitiesR.png" alt="avion derecha"/>
                        </div>
                    </div>
                    <div className="cityBanners">
                        <div className="itineraryBanner" style={{backgroundImage: `url('/img/mapa.jpg')`}}> 
                            <h1 className="itineraryTitle">PAGE UNDER CONSTRUCTION     
                                <p>please wait just another week...</p> 
                            </h1>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <NavLink className="nav-link btnHomeEnCities " exact to="/">Back to Home</NavLink>
                            <NavLink className="nav-link btnHomeEnCities " exact to="/cities">Back to Cities</NavLink>
                        </div>
                    </div>                              
                </main>
                <Footer className="footer"/>
            </div>
        )
    ;}
  }
  
  export default CityItineraries;
  




















// import axios from "axios";
// import { useEffect, useState } from "react";



// function CityBanner(props) {
    
//     const[idCity, setIdCity] = useState({
//         cities:[]
//     })
//     useEffect(()=> {
//         axios.get('http://localhost:4000/api/cities')
//         .then(response =>setIdCity ({cities: response.data.respuesta.filter(city => props.match.params.id == city.id)}))
//     },[])

//     const cities = idCity.cities
//     console.log(cities[0])
//     const imgBanner = require(`../assets/${idCity.cities[0].img}`)
    

//     return (
//         <main >
//             <div className="granContenedor">
//                 <div id="heroMontaña" className= "hero" style={{backgroundImage: `url('${imgBanner.default}')`}}>
//                 </div>
//             </div>
//         </main>
  
      
//     );
//   }
  
//   export default CityBanner;
  