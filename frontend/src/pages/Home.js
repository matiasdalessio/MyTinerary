import React from "react"
import Header from '../components/Header'
import Footer from "../components/Footer"
import ContentCarousel from "../components/ContentCarousel"

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
                <div style={{backgroundImage: `url('./img/heroimg.jpg')`, width:'100vw', height: '100vh', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}></div>
                <Header />
                <div className="body">                    
                    <ContentCarousel cities = {this.infoCities}/>
                    <button type="button" className="btn btn-link">Cities</button> 
                </div>
                <Footer />
            </div>
        
        )
    }

}

export default Home
