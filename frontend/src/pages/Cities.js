import React from "react"
import Header from '../components/Header'
import Footer from "../components/Footer"


class Cities extends React.Component{
    

    render() {
        return(
            <div className="granContenedor">
                <div class= "hero" style={{backgroundImage: `url('./img/heroimg.jpg')`, width:'100%', height: '150vh', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat',  }}>
                    <h1>MyTinerary</h1>
                    <h2>¡Find your perfect trip, designed by insiders who know and love their cities!</h2>
                </div>
                <Header />
                <div className="callToAction">
                     <div class="imagenArriba" style={{backgroundImage: "url('./img/call to action1.png')", width:"500px",  height:"500px", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div> 
                     <div class="imagenAbajo" style={{backgroundImage: "url('./img/call to action2.png')", width:"500px",  height:"500px", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                    <div>
                        <h2>What are you waiting for?</h2>
                        <h2>Feel free to check our itineraries and activities!</h2>
                        <button type="button" className="btn btn-link border border-dark">Check Cities!</button> 
                    </div>
                    <div class="imagenAbajo" style={{backgroundImage: "url('./img/call to action3.png')", width:"500px",  height:"500px", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                    <div class="imagenArriba" style={{backgroundImage: "url('./img/call to action4.png')", width:"500px",  height:"500px", backgroundPosition:"center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                </div>
                <div className="body">
                <h1>Próximamente...</h1>
                </div>
                <Footer />
            </div>
        
        )
    }

}

export default Cities
