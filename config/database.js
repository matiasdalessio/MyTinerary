const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://craig133mhz:matias388@cluster0.r1vrn.mongodb.net/mytinerary?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
}) 
.then(() => console.log("database connected"))
.catch(error => console.log(error))