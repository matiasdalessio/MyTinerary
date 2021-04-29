import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import loginActions from "../redux/actions/loginActions"
import swal from 'sweetalert'


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
        const respuesta = await this.props.logUser(this.state, this.props)
        if (respuesta=== "Invalid User or Password") {
            swal("Invalid User or Password", "Verify and try again!", "error")
        } else {
            swal("Loged in correctly!", respuesta, "success")
        }         
    }


    componentDidMount(){  
        this.toTop()     
    }    

    render() {
        return(
            <div>
                <div className="granContenedor">
                    <Header/>
                    <main className= "backgroundSign" style={{backgroundImage: "url('./img/backgroundSign.jpg')"}}>
                        <div className="animate__animated animate__fadeInDown formCard">
                            <h2>Log In with your account!</h2>
                            <form>
                                <input type="text" placeholder="E-Mail" name="email" value={this.state.email} onChange={this.readInput} ></input>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.readInput}></input>  
                                <button className="submit" onClick={this.send}>Log In</button>                       
                            </form>
                            <h4>Log in with Google</h4>
                            <h4>Don't have an account?<NavLink exact to="/signup"> Sign up!</NavLink></h4>
                        </div>
                    </main>
                    <Footer className="footer"/>
                </div>  
            </div>      
        )
    }
}

const mapStateToProps = state => {
    return {
        userLogged: state.loginReducer.userLogged
    }
}
const mapDispatchToProps = {
    logUser: loginActions.logUser
}


export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
