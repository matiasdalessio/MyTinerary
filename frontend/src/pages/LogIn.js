import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"
import { NavLink } from "react-router-dom"


class LogIn extends React.Component{
    toTop= () => {window.scroll({
        top:0, 
        left:0,
        behavior:"smooth"
    })}

    state={
        password:"",
        email: "",
    }

    readInput = ((e) => {
        const field = e.target.name
        const value = e.target.value
        this.setState({
            ...this.state,
            [field]: value
        })
    })

    send = async e => {
        e.preventDefault()
        const response = await axios.post('http://localhost:4000/api/user/login', this.state)
        console.log(response)           
    }

    componentDidMount(){  
        this.toTop()     
    }    

    render() {
        return(
            <div>
                <div className="granContenedor">
                    <Header className="header"/>
                    <main className= "backgroundSign" style={{backgroundImage: "url('./img/backgroundSign.jpg')"}}>
                        <div className="formCard">
                            <h2>Log In!</h2>
                            <form>
                                <input type="text" placeholder="E-Mail" name="email" value={this.state.email} onChange={this.readInput} ></input>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.readInput}></input>  
                                <button className="submit" onClick={this.send}>Send</button>                       
                            </form>
                            <h2>Log in with Google</h2>
                            <h2>Don't have an account?<NavLink exact to="/signup">Sign up!</NavLink></h2>
                        </div>
                    </main>
                    <Footer className="footer"/>
                </div>  
            </div>      
        )
    }
}


export default LogIn
