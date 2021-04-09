import React from "react"
import Header from '../components/Header'
import Footer from "../components/Footer"
import ContentCarousel from "../components/ContentCarousel"

class Home extends React.Component{
    

    render() {
        return(
            <div className="granContenedor">
                <Header />
                <div style={{backgroundImage: `url('./img/heroimg.jpg')`, width:'100vw', height: '100vh', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}></div>
                <ContentCarousel cities = {this.props.infoCities}/>
                <button type="button" class="btn btn-link">Cities</button>
                <Footer />
            </div>
        
        )
    }

}

export default Home
