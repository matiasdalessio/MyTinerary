import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import loginActions from "../redux/actions/loginActions"
import swal from 'sweetalert'
import GoogleLogin from 'react-google-login';


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


    send = async (e = null, googleUser = null) => {
        e && e.preventDefault()
        let userInfo= e ? this.state : googleUser
        const respuesta = await this.props.logUser(userInfo, this.props)
        if (respuesta.error) {
            swal(respuesta.error, "Verify and try again!", "error")
        } else {
            swal("Loged in correctly!", respuesta, "success")
        }   
    }
    
        
    responseGoogle = (response) => {
        const {email, googleId} = response.profileObj
        this.send(null,{email: email, password: "matias"+googleId, country: "null"})
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
                            <h4>Don't have an account?<NavLink exact to="/signup"> Sign up!</NavLink></h4>
                            <form>
                                <div>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16 iconForm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>
                                    <input type="text" placeholder="E-Mail" name="email" value={this.state.email} onChange={this.readInput} ></input>
                                </div>                                
                                <div>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="key" className="svg-inline--fa fa-key fa-w-16 iconForm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"></path></svg>
                                    <input autoComplete="off" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.readInput}></input> 
                                </div> 
                                <div className="submitYGoogle">                               
                                    <button className="submit" onClick={this.send}>Log In</button> 
                                    <GoogleLogin
                                            clientId="706728189535-gkdltcou7njsjagcfhn30q0i25g7f30v.apps.googleusercontent.com"
                                            buttonText="Login with Google"
                                            onSuccess={this.responseGoogle}
                                            onFailure={this.responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        /> 
                                </div>                      
                            </form>
                            <h4>Log in with Google</h4>                            
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
