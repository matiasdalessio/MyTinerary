import React from "react"
import Header from '../components/Header'
import Footer from "../components/Footer"


class Cities extends React.Component{
    

    render() {
        return(
            <div className="granContenedor">
                <div class= "hero" style={{backgroundImage: `url('./img/travolta.gif')`, width:'100%', height: '150vh', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat',  }}>
                <h1 className="animate__animated animate__fadeInDownBig">MyTinerary</h1>
                    <h2 className="animate__animated  animate__fadeInRightBig">¡Find your perfect trip, designed by insiders who know and love their cities!</h2>
                </div>
                <Header />
                <div className="body">
                <h1>Próximamente...</h1>
                </div>
                <Footer />
            </div>
        
        )
    }

}

export default Cities
