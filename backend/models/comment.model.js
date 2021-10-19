module.exports = (sequelize, DataTypes) => {
    const Commentaire = sequelize.define('commentaire', {
        text: {
            type: DataTypes.STRING
        }
    });
    return Commentaire
}