const { USER } = require("../config/db.config");
const db = require("../models");
const User = db.users;

checkDoubleUtilisateurOuEmail = (req, res, next) => {
    User.findOne({
        where: {
            name: req.body.name
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: "Utilisateur est déjà existant"
            });
            return
        }
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user){
                res.status(400).send({
                    message: "Utilisateur est déjà existant"
                });
                return;
            }
            next();
        });
    });
};

const verifySignUp = {
    checkDoubleUtilisateurOuEmail: checkDoubleUtilisateurOuEmail
};

module.exports = verifySignUp;