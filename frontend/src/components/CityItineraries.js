import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";



class CityItineraries extends React.Component{
    
    state={
        city:[]
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/cities/${this.props.match.params.id}`)
        .then(response =>this.setState({city: response.data.respuesta}))
        
    }
    
    

    
    render(){
        if (this.state.city.length === 0) {
            return(
                <div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div>
            )
        }

        const imgBanner= require(`../assets/${this.state.city.img}`)
            return (
        
                <main >
                    <div className="granContenedor">
                        <div id="heroAvion" className= "hero" style={{backgroundImage: `url('${imgBanner.default}')`}}>
                        </div>
                        <div className="tituloCities">
                            <img className="avionH1Cities" src="/img/avionH1CitiesL.png" alt="avion izquierda"/>
                            <h1>{this.state.city.name} - {this.state.city.pais}</h1>
                            <img className="avionH1Cities" src="/img/avionH1CitiesR.png" alt="avion derecha"/>
                        </div>
                        </div>
                        <div className="cityBanners">
                        <div className="cityBanner" style={{backgroundImage: `url('/img/mapa.jpg')`}}> 
                            <h1 className="cityName">PAGE UNDER CONSTRUCTION     
                                <p>please wait just another week...</p> 
                            </h1>
                        </div>
                        </div>
                        <div className="d-flex justify-content-center ">
                            <NavLink className="nav-link btnHomeEnCities text-dark" exact to="/">Back to Home</NavLink>
                            <NavLink className="nav-link btnHomeEnCities text-dark" exact to="/cities">Back to Cities</NavLink>
                        </div>
                    
                </main>
            
          
              
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
  