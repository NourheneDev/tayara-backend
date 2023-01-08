const mongoose = require('mongoose')

const schema = mongoose.Schema({
    email : {type : String , required : true , unique : true },
    password : String,
    nom_user : String,
    prenom : String,
    image : String ,
    adresse : String,
    test : Number
})

module.exports = mongoose.model('Utilisateur' , schema)