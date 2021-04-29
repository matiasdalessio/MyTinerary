import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"
import loginActions from "../redux/actions/loginActions";
import { connect } from "react-redux"
import swal from 'sweetalert'


class SignUp extends React.Component{
    toTop= () => {window.scroll({
        top:0, 
        left:0,
        behavior:"smooth"
    })}

    state={
        repeatpassword: "",
        firstName: "",
        lastName: "",
        country: "",
        password:"",
        img: "",
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
        if (this.state.repeatpassword === this.state.password) {
            const respuesta = await this.props.newUser(this.state, this.props)
                if (respuesta === "The E-mail is already in use") {
                    swal("The E-mail is already in use", "Try another one!", "error")
                }else if (respuesta === "There was an error in the register."){
                    swal(respuesta, "Please verify all the required fields are completed.", "error")
                }else{
                    swal("Signed Up!", respuesta, "success")
                }
        } else{
            swal("Passwords doesn't match!", "Please verify and try again.", "error")
        }   
                        
    }    



    componentDidMount(){  
        this.toTop()
        this.props.fetchCountries(this.props)      
    }    

    render() {
        return(
            <div>
                <div className="granContenedor">
                    <Header/>
                    <main className= "backgroundSign" style={{backgroundImage: "url('./img/backgroundSign.jpg')"}}>
                        <div className="animate__animated animate__fadeInDown formCard">
                            <h2>Join to our World of Adventures!</h2>
                            <form>
                                <input type="text" placeholder="First Name" name="firstName" value={this.state.name} onChange={this.readInput} ></input>
                                <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastname} onChange={this.readInput} ></input>
                                <input type="text" placeholder="E-Mail" name="email" value={this.state.email} onChange={this.readInput} ></input>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.readInput}></input>
                                <input type="password" placeholder="Repeat Password" name="repeatpassword" value={this.state.repeatpassword} onChange={this.readInput}></input>
                                <input type="text" placeholder="Profile Pic URL link" name="img" value={this.state.img} onChange={this.readInput}></input>      
                                <select type="select" placeholder="Country" name="country" value={this.state.country} onChange={this.readInput}>
                                    <option disabled value="">-- Choose your Country --</option>
                                    {this.props.countries.map((country, index) =>{
                                        return <option key={index}>{country.name}</option>
                                    })}
                                </select>  
                                <button className="submit" onClick={this.send}>Sign up!</button>                       
                            </form>
                            <h4>Sign up with Google</h4>
                            <h4>Already have an account?<NavLink exact to="/login"> Log in!</NavLink></h4>
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
        countries: state.loginReducer.countries,
        userLogged: state.loginReducer.userLogged
    }
}
const mapDispatchToProps = {
    fetchCountries :  loginActions.fetchCountries,
    newUser: loginActions.newUser
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
