import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"
import { NavLink } from "react-router-dom"
import loginActions from "../redux/actions/loginActions";
import { connect } from "react-redux"


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
            const response = await axios.post('http://localhost:4000/api/user/signup', this.state)
            console.log(response)
            localStorage.setItem("loginInfo", JSON.stringify(response.respuesta)) 
        }   else {
            console.log("las constraseñas no coinciden")
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
                        <div className="formCard">
                            <h2>Sign up!</h2>
                            <form>
                                <input type="text" placeholder="First Name" name="firstName" value={this.state.name} onChange={this.readInput} ></input>
                                <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastname} onChange={this.readInput} ></input>
                                <input type="text" placeholder="E-Mail" name="email" value={this.state.email} onChange={this.readInput} ></input>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.readInput}></input>
                                <input type="password" placeholder="Repeat Password" name="repeatpassword" value={this.state.repeatpassword} onChange={this.readInput}></input>
                                <input type="text" placeholder="Profile Pic URL link" name="img" value={this.state.img} onChange={this.readInput}></input>      
                                <select type="select" placeholder="Country" name="country" onChange={this.readInput}>
                                    <option disabled selected>-- Choose your Country --</option>
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
        countries: state.loginReducer.countries
    }
}
const mapDispatchToProps = {
    fetchCountries :  loginActions.fetchCountries
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
