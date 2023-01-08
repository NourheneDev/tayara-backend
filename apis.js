module.exports = (serveur) => {
  

  const utilisateur = require('./Controllers/utilisateurs.controller')

  serveur.get('/utilisateurs' , utilisateur.afficher)
  serveur.get('/utilisateurs/:_id' , utilisateur.details)
  serveur.post('/utilisateurs' , utilisateur.ajouter)
  serveur.put('/utilisateurs/:_id' , utilisateur.modifier)
  serveur.delete('/utilisateurs/:_id' , utilisateur.supprimer)
  serveur.post('/inscription' , utilisateur.inscription)
  serveur.post('/connexion' , utilisateur.connexion)

  const category = require('./Controllers/category.controller')

  serveur.get('/category' , category.afficher)
  serveur.get('/category/:_id' , category.details)
  serveur.post('/category' , category.ajouter)
  serveur.put('/category/:_id' , category.modifier)
  serveur.delete('/category/:_id' , category.supprimer)

  const produit = require('./Controllers/produits.controller')

  serveur.get('/produit' , produit.afficher)
  serveur.get('/produit/:_id' , produit.details)
  serveur.post('/produit' , produit.ajouter)
  serveur.put('/produit/:_id' , produit.modifier)
  serveur.delete('/produit/:_id' , produit.supprimer)

};
