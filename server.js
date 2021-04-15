const express =require ('express')
const cors = require ('cors')

const app =express()

app.use(cors())
app.use(express.json())


const cities = [   
    {id:1 , name: "Abu Dhabi", img: 'Abu Dhabi.jpg'},
    {id:2 , name: "Bakú", img: 'Baku.jpg'},
    {id:3 , name: "Bariloche", img: 'Bariloche.jpg'},
    {id:4 , name: "Dublin", img: 'Dublin.jpg'},
    {id:5 , name: "Kirkjufell", img: 'Kirkjufell.jpg'},
    {id:6 , name: "Le Castellet", img: 'Le Castellet.jpg'},
    {id:7 , name: "Montreal", img: 'Montreal.jpg'},
    {id:8 , name: "Nürburg", img: 'Nürburg.png'},
    {id:9 , name: "Portimão", img: 'Portimao.jpg'},
    {id:10 , name: "Sochi", img: 'Sochi.png'},
    {id:11 , name: "Tokyo", img: 'Tokyo.jpg'},
    {id:12 , name: "Yidda", img: 'Yidda.jpg'},
    {id:13 , name: "San Sebastian", img: 'San Sebastian.jpg'},
    {id:14 , name: "Paris", img: 'Paris.jpg'},
    {id:15 , name: "Los Angeles", img: 'Los Angeles.jpeg'},
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