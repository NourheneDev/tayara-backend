const mongoose = require('mongoose')

const schema = mongoose.Schema({
    email : {type : String , required : true , unique : true },
    password : String,
    nom : String,
    prenom : String,
    image : String ,
    adresse : String,
    description : String,
})

module.exports = mongoose.model('Utilisateur' , schema)