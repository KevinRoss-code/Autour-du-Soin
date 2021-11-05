const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync().then(() => {
  console.log("La base est créé et conservée");
});

// const db = require("./models");
// db.sequelize.sync({force: true}).then(() => {
//     console.log('La base est créé et vide')
// });

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur le serveur du site d'Anaelle" });
});

require("./routes/auth.route")(app);
require("./routes/user.route")(app);
require("./routes/comment.route")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Le serveur est écouté sur le port ${PORT}.`);
});
