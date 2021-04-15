import axios from "axios"
import React from "react"
import { NavLink } from 'react-router-dom';


class Cities extends React.Component{
    toTop= () => {window.scroll({
        top:0, 
        left:0,
        behavior:'smooth'
    })}

    state={
        cities:[]
    }
    componentDidMount(){
        this.toTop()
        axios.get('http://localhost:4000/api/cities')
        .then(response =>this.setState ({cities: response.data.respuesta, original: [...response.data.respuesta]}))
        
    }    

     filtro = ((e) => {
        const aBuscar = e.target.value
        this.setState({
            cities: this.state.original.filter(city => city.name.toLowerCase().indexOf(aBuscar.trim().toLowerCase())=== 0 )            

        })
    })

    render() {
        if (this.state.cities.length === 0) {
            return(
                <div className="preloader">
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
                <div id="heroAvion" className= "hero" style={{backgroundImage: "url('./img/heroimg2.jpg')"}}>
                </div>
                <main className="body">
                    <div className="tituloCities">
                        <img className="avionH1Cities" src="/img/avionH1CitiesL.png" alt="avion izquierda"/>
                        <h1>Available cities</h1>
                        <img className="avionH1Cities" src="/img/avionH1CitiesR.png" alt="avion derecha"/>
                    </div>
                    <div className="tituloCities">
                        <input placeholder="Search a City" className="finder" type='text'  onChange={this.filtro}></input>
                    </div>
                    <div className= "cityBanners">
                    {this.state.cities.length >0 
                        ? this.state.cities.map(city =>{
                        const imgBanner= require(`../assets/${city.img}`)
                        return <NavLink key={city._id} to={`/city/${city._id}`}> 
                                    <div className="cityBanner" style={{backgroundImage: `url('${imgBanner.default}')`}}> 
                                        <h1 className="cityName">{city.name}</h1> 
                                    </div>
                                </NavLink>
                    }): <div className="cityBanner" style={{backgroundImage: `url('./img/mapa.jpg')`}}> 
                            <h1 className="cityName">Looks like the city that you're looking for doesn't exist here yet... 
                                <p>Try another one!</p> 
                            </h1>
                        </div>}
                        <NavLink className="nav-link btnHomeEnCities text-dark" exact to="/">Back to Home</NavLink>
                    </div>
                </main>
            </div>
        
        )
    }

}

export default Cities
