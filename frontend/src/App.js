import React from "react"
import Home from "./pages/Home";
import './styles.css'



function App() {
  let infoCities =[   
    [ 
    {id:1 , name: "Abu Dabi", img: 'Abu Dabi.jpg'},
    {id:2 , name: "Bakú", img: 'Bakú.jpeg'},
    {id:3 , name: "Bariloche", img: 'Bariloche.jpg'},
    {id:4 , name: "Dublin", img: 'Dublin.jpg'},
    ],
    [
    {id:5 , name: "Kirkjufell", img: 'Kirkjufell.jpg'},
    {id:6 , name: "Le Castellet", img: 'Le Castellet.jpg'},
    {id:7 , name: "Montreal", img: 'Montreal.jpg'},
    {id:8 , name: "Nürburg", img: 'Nürburg.png'},
    ],
  [
    {id:9 , name: "Portimão", img: 'Portimao.jpg'},
    {id:10 , name: "Sochi", img: 'Sochi.png'},
    {id:11 , name: "Tokyo", img: 'Tokyo.jpg'},
    {id:12 , name: "Yidda", img: 'Yidda.jpg'}
  ]
]

  return (
        
        <Home infoCities={infoCities}/>
    
  );
}

export default App;
