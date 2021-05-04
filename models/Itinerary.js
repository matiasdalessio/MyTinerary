const mongoose = require ('mongoose')

const itinerarySchema = new mongoose.Schema({
        itineraryName:{type:String, required:true},
        author:{userName: {type:String, required:true}, imageURL: {type:String, required:true}},
        price:{type:Number, required:true, min: 1, max: 5},
        duration:{type:Number, required:true, min: 1, max: 5},
        like:{type:Number, default: 0},
        hashtags:[{type:String, required:true, min: 3, max: 5}],
        cityID:	{type: mongoose.Types.ObjectId, ref: 'city', required:true},
        comments:[{userName: {type: mongoose.Types.ObjectId, ref: 'user', required:true}, comments:{type: String, required:true}, default: 0}],
        usersLiked:[{userName:{type:String, required: true}, img:{type:String, required: true}, userId:{type: mongoose.Types.ObjectId, ref: 'user', required:true}, default: 0}]
})

const Itinerary = mongoose.model ('itinerary', itinerarySchema )

module.exports = Itinerary