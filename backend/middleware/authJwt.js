const jwt = require('jsonwebtoken');
const config = require("../config/auth.config");
const db = require("../models");
const User = db.users;

verifyToken = (req, res, next) =>{
    let token = req.headers["access-token"];

    if(!token){
        return res.status(403).send({
            message: "Token non approuvé"
        });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Non authoriser"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken: verifyToken,
};
module.exports = authJwt; 