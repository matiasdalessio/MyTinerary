import React from "react"
import ContentCities from "../components/ContentCities"


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
                <div id="heroMontaña" className= "hero" style={{backgroundImage: "url('./img/heroimg2.jpg')"}}>
                </div>
                <ContentCities />
            </div>
        
        )
    }

}

export default Cities
