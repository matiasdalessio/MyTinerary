import React from "react"
import Header from '../components/Header'
import Footer from "../components/Footer"


class Cities extends React.Component{
    toTop= () => {window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })}

    componentDidMount(){
        this.toTop()
    }

    render() {
        return(
             <div className="granContenedor">
                <div id="heroMontaña" className= "hero" style={{backgroundImage: "url('./img/heromontañas.jpeg')"}}>
                    <h1 className="sloganCities animate__animated animate__fadeInDown">¡Find your perfect trip, designed by insiders who know and love their cities!</h1>
                </div>
                <div className="body">
                <h1>Próximamente...</h1>
                </div>
            </div>
        
        )
    }

}

export default Cities
