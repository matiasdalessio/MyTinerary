import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"


class SignUp extends React.Component{

    toTop= () => {window.scroll({
        top:0, 
        left:0,
        behavior:"smooth"
    })}

    componentDidMount(){  
        this.toTop()
    }
    

    render() {
        return(
            <div className="granContenedor">
                <Header className="header"/>
                <div id="heroAvion" className= "hero" style={{backgroundImage: "url('./img/heroimg2.jpg')"}}/>
                <main className="main">
                    <form>
                        
                    </form>
                </main>
                <Footer className="footer"/>
            </div>        
        )
    }
}


export default SignUp
