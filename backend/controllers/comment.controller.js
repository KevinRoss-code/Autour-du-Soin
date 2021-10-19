const db = require('../models');
const userId = require('../middleware/authJwt');
const Commentaire = db.commentaires;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    let userId = req.userId;
    const commentaire = {
        text: req.body.text
    };
    Commentaire.create(commentaire)
    .then((commentaire) => {
        console.log(`Commentaire crée ${JSON.stringify(commentaire, null, 4)}`);
        res.send(commentaire);
    }).catch((err) => {
        console.log("Erreur lors de la création du commentaire:" + err);
        res.status(500).send({
            message: err.message
        })
    });
};

exports.findAll = (req, res) => {
    const text = req.body.text;
    let condition = text ? {
        text: {
            [Op.like]: `%${text}%`
        }
    } : null;
    Commentaire.findAll({
        where: condition,
        include: [{
            all: true,
            nested: true
        }],
        order: [
            ['id', 'DESC']
        ]
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.findId = (req, res) => {
    const id = req.params.id;

    Commentaire.findByPk(id, {

    }).then((commentaire) => {
        res.send(commentaire);
    }).catch((err) => {
        console.log("Erreur lors de la recherche de l'article" + err);
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    const commentaire = {
        text: req.body.text
    };
    // try {
    //     Commentaire.findOne({ where: {id:id}}).then(function(commentaire){
    //         if(!req.IsAdmin && commentaire.userId !== req.userId) {throw new Error("Vous n'avez pas l'accès")}
    //     });
    Commentaire.update(commentaire, {
        where:{
            id:id
        }
    }).then((num) =>{
        if(num == 1){
            res.send({
                message: "Le commentaire est bien modifié"
            });
        }else{
            res.send({
                message: `Impossible de modifier l'article ${id}`
            })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            mesasge: "Erreur lors de la modification" + id
        });
    });
    // } catch {
    //     res.status(403).send({
    //         message :"Accès refusé"
    //     })
    // }
};

exports.delete = (req, res) => {
    const id = req.params.id;
    // try{
    Commentaire.findByPk(id).then(article => {
        // if(!req.isAdmin && commentaire.userId !== req.userId){throw new Error("Vous n'avez pas l'accès")}
        Commentaire.destroy({
            where: {
                id:id
            }
        }).then(num => {
            if(num == 1) {
                res.send({message: "Commentaire bien supprimé"});
            }else {
                res.send({message: `Impossible de trouverl e commentaire ${id}`});
            }
        })
    }).catch(err => {
        console.log(err)
        res.status(500).send({message: "Erreur lors de la suppression" + id});
    });
// }catch {
//     res.status(403).send({message: "Accès refusé"})
// }
};