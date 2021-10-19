const { authJwt } = require("../middleware");
const commentaire = require('../controllers/comment.controller');

module.exports = app => {
    let router = require('express').Router();
    router.post("/", [authJwt.verifyToken], commentaire.create);
    router.get("/", [authJwt.verifyToken], commentaire.findAll);
    router.get('/:id', [authJwt.verifyToken], commentaire.findId);
    router.put('/:id', [authJwt.verifyToken], commentaire.update);
    router.delete("/:id", [authJwt.verifyToken], commentaire.delete);

    app.use('/api/commentaire', router);
}