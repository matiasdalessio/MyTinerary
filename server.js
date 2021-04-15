const express =require ('express')
const cors = require ('cors')

const app =express()

app.use(cors())
app.use(express.json())


const cities = [   
    {id:1 , name: "Abu Dhabi", pais:"United Arab Emirates", img: 'Abu Dhabi.jpg'},
    {id:2 , name: "Baku", pais:"Azerbaijan", img: 'Baku.jpg'},
    {id:3 , name: "Bariloche", pais:"Argentina", img: 'Bariloche.jpg'},
    {id:4 , name: "Dublin", pais:"Ireland", img: 'Dublin.jpg'},
    {id:5 , name: "Kirkjufell",pais: "Iceland", img: 'Kirkjufell.jpg'},
    {id:6 , name: "Le Castellet", pais:"France", img: 'Le Castellet.jpg'},
    {id:7 , name: "Montreal",pais: "Canada", img: 'Montreal.jpg'},
    {id:8 , name: "Nürburg", pais:"Germany", img: 'Nürburg.png'},
    {id:9 , name: "Portimão", pais:"Portugal", img: 'Portimao.jpg'},
    {id:10 , name: "Sochi", pais: "Russia", img: 'Sochi.png'},
    {id:11 , name: "Tokyo", pais: "Japan", img: 'Tokyo.jpg'},
    {id:12 , name: "Yidda", pais:"Saudi Arabia", img: 'Yidda.jpg'},
    {id:13 , name: "San Sebastian", pais:"Spain", img: 'San Sebastian.jpg'},
    {id:14 , name: "Paris", pais:"France", img: 'Paris.jpg'},
    {id:15 , name: "Los Angeles", pais:"Unites States", img: 'Los Angeles.jpeg'},
]

app.get('/api/totalCities', (req,res) =>{
    res.json({respuesta: cities})
})

app.get('/api/cities/:idABuscar', (req,res) =>{
    const idABuscar = parseInt(req.params.idABuscar)
    citySeleccionada = cities.find(city => idABuscar === city.id)
    res.json({respuesta: citySeleccionada})
    
})

app.listen(4000, () => console.log("App listening on port 4000"))