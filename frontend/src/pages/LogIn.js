import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"


class LogIn extends React.Component{

    state={
        repeatpassword: "",
        lastname: "",
        countries:[],
        country: "",
        password:"",
        imgurl: "",
        email: "",
        name: "",
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
        if (this.repeatpassword === this.password) {
            const response = await axios.post('http://localhost:4000/cities', (this.state.name, this.state.lastname, this.state.email, this.state.country, this.state.password, this.state.imgurl))
            console.log(response)
        }   else {
            return null
        }             
    }

    toTop= () => {window.scroll({
        top:0, 
        left:0,
        behavior:"smooth"
    })}

    componentDidMount(){  
        this.toTop()
        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(response => this.setState({countries: response.data}))
        .catch(error => console.log(error))        
    }    

    render() {
        console.log(this.state)
        return(
            <div>
                <div className="granContenedor">
                    <Header className="header"/>
                    <main className= "backgroundSign" style={{backgroundImage: "url('./img/backgroundSign.jpg')"}}>
                        <div className="formCard">
                            <h2>Log in with your current account</h2>
                            <form>
                                <input type="text" placeholder="First Name" name="name" value={this.state.name} onChange={this.readInput} ></input>
                                <input type="text" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.readInput} ></input>
                                <input type="text" placeholder="E-Mail" name="email" value={this.state.email} onChange={this.readInput} ></input>
                                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.readInput}></input>
                                <input type="password" placeholder="Repeat Password" name="repeatpassword" value={this.state.repeatpassword} onChange={this.readInput}></input>
                                <input type="text" placeholder="Profile Pic URL link" name="imgurl" value={this.state.imgurl} onChange={this.readInput}></input>      
                                <select type="select" placeholder="Country" name="country" onChange={this.readInput}>
                                    <option disabled selected>-- Choose your Country --</option>
                                    {this.state.countries.map((country, index) =>{
                                        return <option key={index}>{country.name}</option>
                                    })}
                                </select>  
                                <button onClick={this.send}>Send</button>                       
                            </form>
                        </div>
                    </main>
                    <Footer className="footer"/>
                </div>  
            </div>      
        )
    }
}


export default LogIn
