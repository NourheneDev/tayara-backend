const Produit = require("../Models/Produit");

exports.afficher = async (req, res) => {
  const resultat = await Produit.find()
    .populate("category_id")
    .populate("utilisateur_id");
  res.send(resultat);
};
exports.details = async (req, res) => {
  const resultat = await Produit.findOne({ _id: req.params._id }).populate(
    "category_id"
  );
  res.send(resultat);
};

exports.ajouter = async (req, res) => {
  console.log(req.files);
  const resultat = new Produit(req.body);
  /* en cas de galery ( multiple ) */
  /*  var tab = []
  if(req.files && req.files.null){
    req.files.null.map((f)=>{
    
      tab.push(f.path)
    })
  }
  
  console.log(tab) */
  /* en cas d'un seul fichier */
  if (req.files && req.files.pic) {
    resultat.image = req.files.pic;
    resultat.image.type_image = req.files.pic.type;
  }
  resultat
    .save()
    .then((success) => {
      res.send(resultat);
    })
    .catch((erreur) => {
      res.send(erreur);
    });
};

exports.modifier = async (req, res) => {
  Produit.updateOne({ _id: req.params._id }, req.body, (erreur, success) => {
    if (erreur) {
      res.send(erreur);
    } else {
      res.send(success);
    }
  });
};

exports.supprimer = async (req, res) => {
  const resultat = await Produit.deleteOne({ _id: req.params._id });
  res.send(resultat);
};

exports.filterByCategory = async (req, res) => {
  const resultat = await Produit.find({categorie_id: req.params.categorie_id});
  res.send(resultat);
};

/* soit le body contient un objet
{
  couleur : 'noir', taille :'XL' , type : 'test' .....
}
*/
exports.filterAll = async (req, res) => {
  const resultat = await Produit.find(req.body);
  res.send(resultat);
};