exports.allAcces = (req, res) => {
    res.status(200).send("Acces public");
};

exports.user = (req, res) => {
    res.status(200).send("bienvenue c'est la première étape");
}

