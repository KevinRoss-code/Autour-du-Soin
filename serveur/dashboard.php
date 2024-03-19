<?php
// Démarrer la session
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    // Redirection vers la page de connexion si l'utilisateur n'est pas connecté
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="http://code.jquery.com/jquery.js" type="text/javascript"></script>
    <title>Dashboard</title>
    <style>
        /* Style pour cacher les formulaires et les tables */
        .hidden {
            display: none;
        }
    </style>
</head>

<body>
    <!-- Contenu de la page dashboard -->
    <h1>Tableau de bord</h1>
    <!-- Lien pour ajouter -->
    <h2 id="ajouter-link">Ajouter</h2>

    <!-- Formulaires pour ajouter -->
    <form method="post" id="monFormulaire" class="formulaire hidden">
        <!-- Vos champs de formulaire ici -->
        <h3>Massage</h3>
        <label>Nom :</label>
        <input type="text" id="name" name="name" required /><br /><br />

        <label>Description :</label>
        <textarea id="massage_description" name="massage_description" required></textarea><br /><br />

        <label>Prix :</label>
        <input type="number" id="prix" name="prix" required /><br /><br />

        <label>Durée :</label>
        <input type="text" id="duree_massage" name="duree_massage" required /><br /><br />
        <label for="image">Image:</label>
        <input type="file" name="image" id="image" accept="image/*" required />
        <br />

        <input type="button" value="Ajouter" id="send" />
    </form>

    <!-- Autres formulaires pour ajouter -->
    <form method="post" id="formFacialCare" class="formulaire hidden">
        <!-- Vos champs de formulaire ici -->
        <h3>Soins du visage</h3>
        <label>Nom :</label>
        <input type="text" id="nameCare" name="nameCare" required /><br /><br />

        <label>Prix :</label>
        <input type="number" id="prixCare" name="prixCare" required /><br /><br />

        <label>Durée :</label>
        <input type="text" id="dureeCare" name="dureeCare" required /><br /><br />

        <input type="button" value="Ajouter" id="sendCare" />
    </form>

    <form method="post" id="formFacialMakeup" class="formulaire hidden">
        <h3>Maquillages</h3>
        <label>Nom :</label>
        <input type="text" id="nameMakeup" name="nameMakeup" required /><br /><br />

        <label>Prix :</label>
        <input type="number" id="prixMakeup" name="prixMakeup" required /><br /><br />

        <label>Durée :</label>
        <input type="text" id="dureeMakeup" name="dureeMakeup" required /><br /><br />

        <input type="button" value="Ajouter" id="sendMakeup" />
    </form>
    </br>

    <form method="post" id="formNail" class="formulaire hidden">
        <h3>Ongles</h3>
        <label>Nom :</label>
        <input type="text" id="nameNail" name="nameNail" required /><br /><br />

        <label>Prix :</label>
        <input type="number" id="prixNail" name="prixNail" required /><br /><br />

        <label>Durée :</label>
        <input type="text" id="dureeNail" name="dureeNail" required /><br /><br />

        <input type="button" value="Ajouter" id="sendNail" />
    </form>
    </br>

    <form method="post" id="formHair" class="formulaire hidden">
        <h3>Epilation</h3>
        <label>Nom :</label>
        <input type="text" id="nameHair" name="nameHair" required /><br /><br />

        <label>Prix :</label>
        <input type="number" id="prixHair" name="prixHair" required /><br /><br />

        <label>Durée :</label>
        <input type="text" id="dureeHair" name="dureeHair" required /><br /><br />

        <input type="button" value="Ajouter" id="sendHair" />
    </form>
    <br />

    <form method="post" id="formAddPartenair" class="formulaire hidden">
        <h3>Partenaires</h3>
        <label>Nom :</label>
        <input type="text" id="namePartenair" name="namePartenair" required /><br /><br />

        <label>Site web :</label>
        <input type="text" id="siteWeb" name="siteWeb" required /><br /><br />

        <label>adresse :</label>
        <input type="text" id="adresse" name="adresse" required /><br /><br />
        <label for="image">Image:</label>
        <input type="file" name="imagePartenair" id="imagePartenair" accept="image/*" required />
        <br />

        <input type="button" value="Ajouter" id="sendFormPartenair" />
    </form>

    <!-- JavaScript pour gérer l'affichage/masquage des formulaires -->
    <script>
        // Fonction pour afficher/masquer les formulaires d'ajout
        document.getElementById("ajouter-link").addEventListener("click", function() {
            var formulaires = document.querySelectorAll(".formulaire"); // Sélectionne tous les formulaires avec la classe "formulaire"
            formulaires.forEach(function(form) { // Parcours chaque formulaire
                form.classList.toggle("hidden"); // Inverse la classe "hidden" pour afficher ou masquer le formulaire
            });
        });
    </script>
</body>

</html>
<script src="../js/add_article.js"></script>
<script src="../js/add_facial_care.js"></script>
<script src="../js/add_makeup.js"></script>
<script src="../js/add_nail.js"></script>
<script src="../js/add_hair_removal.js"></script>
<script src="../js/add_partenair.js"></script>