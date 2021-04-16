import React from "react"
import ContentCarousel from "../components/ContentCarousel"
import {NavLink} from 'react-router-dom'

class Home extends React.Component{

    toTop= () => {window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })}

    infoCities =[   
    [ 
        {id:1 , name: "Abu Dhabi", img: 'Abu Dhabi.jpg'},
        {id:2 , name: "Baku", img: 'Baku.jpg'},
        {id:3 , name: "Bariloche", img: 'Bariloche.jpg'},
        {id:4 , name: "Dublin", img: 'Dublin.jpg'},
    ],
    [
        {id:5 , name: "Kirkjufell", img: 'Kirkjufell.jpg'},
        {id:6 , name: "Le Castellet", img: 'Le Castellet.jpg'},
        {id:7 , name: "Montreal", img: 'Montreal.jpg'},
        {id:8 , name: "Nürburg", img: 'Nürburg.png'},
    ],
    [
        {id:9 , name: "Portimão", img: 'Portimao.jpg'},
        {id:10 , name: "Sochi", img: 'Sochi.png'},
        {id:11 , name: "Tokyo", img: 'Tokyo.jpg'},
        {id:12 , name: "Yidda", img: 'Yidda.jpg'}
    ]
    ]

    componentDidMount(){
        this.toTop()
    }

    render() {
 
        return(
            <div className="granContenedor">
                <div id="hero" className= "hero" style={{backgroundImage: "url('./img/heroimg.jpg')"}}>
                    <h1 className="animate__animated animate__fadeInDown">¡Find your perfect trip, designed by insiders who know and love their cities!</h1>
                </div>
                <div className="callToAction">
                     <div className="imgCallToAction" style={{backgroundImage: "url('./img/call to action1.png')"}}></div> 
                     <div className="imgCallToAction" style={{backgroundImage: "url('./img/call to action2.png')"}}></div>
                    <div className="textoYBoton">
                        <h2>What are you waiting for?</h2>
                        <h2>Feel free to check our itineraries and activities!</h2>
                        <NavLink className="nav-link btnCta" exact to="/cities">Go There!</NavLink> 
                    </div>
                    <div className="imgCallToAction" style={{backgroundImage: "url('./img/call to action3.png')"}}></div>
                    <div className="imgCallToAction" style={{backgroundImage: "url('./img/call to action4.png')"}}></div>
                </div>
                <div className="main">                    
                    <ContentCarousel cities = {this.infoCities}/>
                    
                </div>
            </div>
        
        )
    }

}

export default Home
