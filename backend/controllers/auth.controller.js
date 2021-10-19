const db = require('../models');
const config = require ("../config/auth.config");
const User = db.users;

let jwt = require("jsonwebtoken");
let bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    User.create({
        name: req.body.name,
        surname:  req.body.surname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .then(user => {
        if (!user) {
            return res.status(403).send({
                message: "élement manquant"
            });
        }else {
            this.login(req, res);
        }
    })
    .catch(err => {
        res.status(500).send({message: err.message});
    })
};

exports.login = (req, res) =>{
    User.findOne({
        wher: {
            email: req.body.email
        }
    })
    .then(user => {
        if (!user){
            return res.status(404).send({message : "Utilisateur non trouvé!"});
        }
        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Password invalide"
            });
        }
        let token = jwt.sign({ id: user.id}, config.secret, {
            expiresIn: 86400
        });
        res.status(200).send({
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            accessToken: token
        });
    }).catch(err => {
        res.status(500).send({message: err.message})
    });
};