import React from "react"
import Header from '../components/Header'
import Footer from "../components/Footer"
import ContentCarousel from "../components/ContentCarousel"
import {NavLink} from 'react-router-dom'

class Home extends React.Component{

    infoCities =[   
        [ 
        {id:1 , name: "Abu Dabi", img: 'Abu Dabi.jpg'},
        {id:2 , name: "Bakú", img: 'Bakú.jpeg'},
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

    render() {
        return(
            <div className="granContenedor">
                <div id="hero" className= "hero" style={{backgroundImage: `url('./img/heroimg.jpg')`}}>
                    <h1 className="animate__animated animate__fadeInDownBig">MyTinerary</h1>
                    <h2 className="animate__animated  animate__fadeInRightBig">¡Find your perfect trip, designed by insiders who know and love their cities!</h2>
                </div>
                <Header />
                <div className="callToAction">
                     <div className="imgCallToAction" style={{backgroundImage: "url('./img/call to action1.png')", width:"500px",  height:"500px", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div> 
                     <div className="imgCallToAction" style={{backgroundImage: "url('./img/call to action2.png')", width:"500px",  height:"500px", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                    <div>
                        <h2>What are you waiting for?</h2>
                        <h2>Feel free to check our itineraries and activities!</h2>
                        <button type="button" className="btn btn-link border border-dark"><NavLink className="nav-link text-dark" exact to="/cities">Go There!</NavLink></button> 
                    </div>
                    <div className="imgCallToAction" style={{backgroundImage: "url('./img/call to action3.png')", width:"500px",  height:"500px", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                    <div className="imgCallToAction" style={{backgroundImage: "url('./img/call to action4.png')", width:"500px",  height:"500px", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                </div>
                <div className="body">                    
                    <ContentCarousel cities = {this.infoCities}/>
                    
                </div>
                <Footer />
            </div>
        
        )
    }

}

export default Home
