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
        userInfo:{
            repeatpassword: "",
            firstName: "",
            lastName: "",
            country: "",
            password:"",
            img: "",
            email: "",
        },
        validator:{
            repeatpassword: "",
            firstName: "",
            lastName: "",
            country: "",
            password:"",
            img: "",
            email: "",
        }
    }

    readInput = ((e) => {
        const field = e.target.name
        const value = e.target.value
        this.setState({
            ...this.state,
            userInfo:{...this.state.userInfo,
            [field]: value}
        })
    })


    send = async e => {
        e.preventDefault()
        if (this.state.userInfo.repeatpassword === this.state.userInfo.password) {
            const respuesta = await this.props.newUser(this.state.userInfo, this.props)
            console.log(respuesta)
                if (respuesta.details) {
                    swal(respuesta.details[0].message,"", "error")                
                } else if (respuesta === "The E-mail is already in use") {
                    swal("The E-mail is already in use", "Try another one!", "error")
                }else if (respuesta === "There was an error in the register."){
                    swal("There was an error in the register.", "Please verify all the required fields are completed.", "error")
                }else{
                    swal("Signed Up!", respuesta, "success")
                }
        } else{
            swal("Passwords doesn't match!", "Please verify and try again.", "error")
        }   
                        
    }    

 
    validate = (e) => {
        const field = e.name
        if (e.value.length === 0 && e.name !== "img" && e.name !== "country") {
            this.setState({
                ...this.state,
                validator:{...this.state.validator, 
                     [field]: ""} }) 
        } else if (e.name === "firstName" || e.name === "lastName" ) {
            let expression1= /^[a-z ']{2,}$/i
            if (e.value.length > 14 || !e.value.match(expression1)){
                this.setState({
                    ...this.state,
                    validator:{...this.state.validator,
                         [field]: "form-control is-invalid"} })
            }else if (e.value.match(expression1)) {
                this.setState({
                    ...this.state,
                    validator:{...this.state.validator,
                         [field]: "form-control is-valid"} })
            } 
        } else if (e.name === "email"){
            console.log(e.value.length)
            let expression1= (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            if (!e.value.match(expression1)){
                this.setState({
                    ...this.state,
                    validator:{...this.state.validator,
                         [field]: "form-control is-invalid"} })
            }else if (e.value.match(expression1)) {
                this.setState({
                    ...this.state,
                    validator:{...this.state.validator,
                         [field]: "form-control is-valid"} })
            } 
        } else if (e.name === "password" || e.name === "repeatpassword"){
            console.log(e.value.length)
            let expression1= /(?=.*\d)(?=.*[A-z])/
            if (e.value.length < 6 || !e.value.match(expression1)){
                this.setState({
                    ...this.state,
                    validator:{...this.state.validator,
                         [field]: "form-control is-invalid"} })
            }else if (e.value.match(expression1)) {
                this.setState({
                    ...this.state,
                    validator:{...this.state.validator,
                         [field]: "form-control is-valid"} })
            } 
        } else if (e.name === "img" || e.name === "country") {
            if (e.value.length === 0 || e.value.length <= 3) {
                this.setState({
                    ...this.state,
                    validator:{...this.state.validator,
                         [field]: "form-control is-invalid"} })
            }else if (e.value.length > 3) {
                this.setState({
                    ...this.state,
                    validator:{...this.state.validator,
                         [field]: "form-control is-valid"} })
            } 
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
                            <h4>Already have an account?<NavLink exact to="/login"> Log in!</NavLink></h4>
                            <form className="needs-validation">
                                <input className={this.state.validator.firstName} onBlur={(e) => this.validate(e.target)} type="text" placeholder="First Name" name="firstName" value={this.state.userInfo.firstName} onChange={this.readInput} ></input>                                
                                <input className={this.state.validator.lastName} onBlur={(e) => this.validate(e.target)} type="text" placeholder="Last Name" name="lastName" value={this.state.userInfo.lastName} onChange={this.readInput} ></input>
                                <input className={this.state.validator.email} onBlur={(e) => this.validate(e.target)} type="text" placeholder="E-Mail" name="email" value={this.state.userInfo.email} onChange={this.readInput} ></input>
                                <label>
                                    <input id="password" autoComplete="off" className={this.state.validator.password} onBlur={(e) => this.validate(e.target)} type="password" placeholder="Password" name="password" value={this.state.userInfo.password} onChange={this.readInput}></input>
                                    <p className="aclaration">Password must have min. 6 characters and at least 1 letter and 1 number </p>
                                </label>
                                <input autoComplete="off" className={this.state.validator.repeatpassword} onBlur={(e) => this.validate(e.target)} type="password" placeholder="Repeat Password" name="repeatpassword" value={this.state.userInfo.repeatpassword} onChange={this.readInput}></input>
                                <input className={this.state.validator.img} onBlur={(e) => this.validate(e.target)} type="text" placeholder="Profile Pic URL link" name="img" value={this.state.userInfo.img} onChange={this.readInput}></input>      
                                <select className={this.state.validator.country} onClickCapture={(e) => this.validate(e.target)} type="select" placeholder="Country" name="country" value={this.state.userInfo.country} onChange={this.readInput}>
                                    <option disabled value="">-- Choose your Country --</option>
                                    {this.props.countries.map((country, index) =>{
                                        return <option key={index}>{country.name}</option>
                                    })}
                                </select>  
                                <button className="submit" onClick={this.send}>Create Account</button>                       
                            </form>
                            <h4>Sign up with Google</h4>
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
