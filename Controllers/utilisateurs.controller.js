const Utilisateur = require("../Models/Utilisateur");
const bcrypt = require('bcryptjs')

exports.afficher = async(req, res) => {
  const resultat = await Utilisateur.find();
  res.send(resultat);
};
exports.details = async(req , res)=>{
    const resultat = await Utilisateur.findOne({_id : req.params._id})
    res.send(resultat)
}

exports.ajouter = async(req , res)=>{
    const resultat = new Utilisateur(req.body)
     resultat.save().then((success)=>{
        res.send(resultat)
    }).catch((erreur)=>{
        res.send(erreur)
    }) 


}

exports.modifier = async (req , res)=>{
   Utilisateur.updateOne({_id : req.params._id} , req.body ,(erreur  , success)=>{
        if(erreur){
            res.send(erreur)
        }else{
            res.send(success)
        }
   }) 
}

exports.supprimer = async(req , res)=>{
    const resultat = await Utilisateur.deleteOne({_id : req.params._id})
    res.send(resultat)
}


exports.inscription = async(req , res)=>{
    var user = new Utilisateur(req.body)
    var exist_user  = await Utilisateur.findOne({'email' : user.email})

    if(exist_user){
        res.status(450).send({"erreur" : "Adresse mail déjà existe"})
    }else{

        const cle = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password , cle)
        user.password = hash

        await user.save();
        res.send(user)
    } 
}

exports.connexion = async(req,res)=>{
    var user = req.body
    var exist_user  = await Utilisateur.findOne({'email' : user.email})

    if(!exist_user){
        res.send({"erreur" : "Email introuvable"})
    }else{
        const conforme = await bcrypt.compare(user.password , exist_user.password)
        if(!conforme){
            res.send({"erreur" : "Mot de passe erroné"})
        }else{
         
            res.send(exist_user)
        }
    }
}