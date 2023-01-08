const mongoose = require('mongoose')
const Produit = require('./Produit')
const Utilisateur = require('./Utilisateur')

const schema = mongoose.Schema({
   
    
    produit_id : {type : mongoose.Schema.Types.ObjectId , ref : Produit},
    utilisateur_id : {type : mongoose.Schema.Types.ObjectId , ref : Utilisateur},
    date_commande : {type : Date , default : Date.now()},
    quantite : Number,
    etat : {type : String , default : 'En attente'}
    
})

module.exports = mongoose.model('Commande' , schema)