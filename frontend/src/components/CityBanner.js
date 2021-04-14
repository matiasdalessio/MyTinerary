import React from "react"
import ContentCarousel from "../components/ContentCarousel"
import {Link} from 'react-router-dom'


class CityBanner extends React.Component{

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
            <h1>hola</h1>
        )
    }

}

export default CityBanner
