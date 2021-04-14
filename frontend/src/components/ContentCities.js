import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CityBanner from './CityBanner';



const ContentCities = () =>{

    const cities= [   
            {id:1 , name: "Abu Dhabi", img: 'Abu Dhabi.jpg'},
            {id:2 , name: "Bakú", img: 'Baku.jpg'},
            {id:3 , name: "Bariloche", img: 'Bariloche.jpg'},
            {id:4 , name: "Dublin", img: 'Dublin.jpg'},
            {id:5 , name: "Kirkjufell", img: 'Kirkjufell.jpg'},
            {id:6 , name: "Le Castellet", img: 'Le Castellet.jpg'},
            {id:7 , name: "Montreal", img: 'Montreal.jpg'},
            {id:8 , name: "Nürburg", img: 'Nürburg.png'},
            {id:9 , name: "Portimão", img: 'Portimao.jpg'},
            {id:10 , name: "Sochi", img: 'Sochi.png'},
            {id:11 , name: "Tokyo", img: 'Tokyo.jpg'},
            {id:12 , name: "Yidda", img: 'Yidda.jpg'},
            {id:13 , name: "San Sebastian", img: 'San Sebastian.jpg'},
            {id:14 , name: "Paris", img: 'Paris.jpg'},
            {id:15 , name: "Los Angeles", img: 'Los Angeles.jpeg'},
        ]

        const [info, setInfo] = useState({
            resultado: cities
        })


        const filtro = ((e) => {
            const aBuscar = e.target.value
            setInfo({
                resultado: cities.filter(city => city.name.toLowerCase().indexOf(aBuscar.trim().toLowerCase())=== 0 )            
    
            })
        })
    return(
        <main className="body">
            <div className="tituloCities">
                <img className="avionH1Cities" src="./img/avionH1CitiesL.png" alt="avion izquierda"/>
                <h1>Cities</h1>
                <img className="avionH1Cities" src="./img/avionH1CitiesR.png" alt="avion derecha"/>
            </div>
            
            <div className="tituloCities">
                <input  type='text' name="finder" onChange={filtro}></input>
            </div>
            <div className= "cityBanners">
            {info.resultado.length >0 
                ? info.resultado.map(city =>{
                const imgBanner= require(`../assets/${city.img}`);
                <CityBanner key={city.id} name={city.name} img={imgBanner}/>
                return <NavLink exact to={`/city/`}> <div className="cityBanner" style={{backgroundImage: `url('${imgBanner.default}')`}}> <h1 class="cityName">{city.name}</h1>  
                </div></NavLink>
            }) : <div className="cityBanner" style={{backgroundImage: `url('./img/mapa.jpg')`}}> <h1 class="cityName">Looks like the city that you're looking for doesn't exist here yet... <p>Try another one!</p> </h1>
            </div>}
            </div>
        </main>

    )

}

export default ContentCities


