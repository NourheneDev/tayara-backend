// 1- importations
const express = require('express')
const mongoose = require('mongoose')

// 2 - intialisation
const serveur = express()
//pour accepter le body json du requete http
serveur.use(express.json())

//connection au serveur de la base de données
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/tayara' , (err , success)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Mongo DB Connected')
    }
})



// 3 - traitement ( APIS )
/* 
Api : 
 - requete HTTP (req) ( demande de l'utilisateur(front))
 - reponse HTTP (res) ( reponse pour l'utilisateur , tableau , objet , chaine ... )
 - path : nom de l'api exemple : / , /movies , /afficher_joueurs
 - méthode :
     - get : affichage 
     - post : ajouter
     - put : modification
     - delete : suppression
 */

require('./apis')(serveur)




// 4 - Lancement du serveur

serveur.listen(7000 , ()=>{
    console.log("Serveur en cours d'excution")
})

