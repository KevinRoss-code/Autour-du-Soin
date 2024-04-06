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
    <script src="https://code.jquery.com/jquery.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://cdn.datatables.net/2.0.3/css/dataTables.dataTables.css" />
    <script src="https://cdn.datatables.net/2.0.3/js/dataTables.js"></script>
    <link rel="stylesheet" href="../css/dashboard.css" />
    <title>Dashboard</title>
</head>

<body>
    <!-- Contenu de la page dashboard -->
    <h1>Tableau de bord</h1>
    <!-- Lien pour ajouter -->
    <h2>Ajouter</h2>
    <select id="selectForm">
        <option value="massage">Massage</option>
        <option value="facialCare">Soins du visage</option>
        <option value="facialMakeup">Maquillages</option>
        <option value="nail">Ongles</option>
        <option value="hair">Epilation</option>
        <option value="addPartenair">Partenaires</option>
    </select>
    Formulaires pour ajouter
    <form method="post" id="formMassage" class="formulaire hidden">
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

    <h2>Modifier</h2>
    <select id="selectDatable">
        <option value="massage">Massage</option>
        <option value="facialCare">Soins du visage</option>
        <option value="facialMakeup">Maquillages</option>
        <option value="nail">Ongles</option>
        <option value="hair">Epilation</option>
    </select>
    <table id="tableUpdateMassage" style="width: 100%" class='table hidden'>
        <h3>Massage</h3>
        <thead>
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Durée</th>
                <th>Prix</th>
                <th>Image</th>
                <th>Bouton modfi.</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <table id="tableUpdateFacialMakeup" style="width: 100%" class='table hidden'>
        <h3>Maquillage</h3>
        <thead>
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Durée</th>
                <th>Prix</th>
                <th>Bouton modfi.</th>

            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <table id="tableUpdateHair" style="width: 100%" class='table hidden'>
        <h3>Epilation</h3>
        <thead>
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Durée</th>
                <th>Prix</th>
                <th>Bouton modfi.</th>

            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <table id="tableUpdateFacialCare" style="width: 100%" class='table hidden'>
        <h3>Soin du visage</h3>
        <thead>
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Durée</th>
                <th>Prix</th>
                <th>Bouton modfi.</th>

            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <table id="tableUpdateNail" style="width: 100%" class='table hidden'>
        <h3>Ongles</h3>
        <thead>
            <tr>
                <th>id</th>
                <th>Nom</th>
                <th>Durée</th>
                <th>Prix</th>
                <th>Bouton modfi.</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>

    <!-- JavaScript pour gérer l'affichage/masquage des formulaires -->
    <!-- <script>
        $(document).ready(function() {
            $('table').not(':first').hide();

            // Gérer le clic sur l'élément h2
            $('#update-link').click(function() {
                // Si la première table est visible, les cacher toutes
                if ($('table:first').is(':visible')) {
                    $('table').hide();
                } else { // Sinon, afficher toutes les tables
                    $('table').show();
                }
            });

            $('#tableUpdateMassage').DataTable({
                "ajax": {
                    "url": "process_show_article.php", // Spécifiez l'URL de votre script PHP ici
                    "dataSrc": "" // Cela indique à DataTables que les données sont directement disponibles dans l'objet JSON
                },
                "columns": [{
                        data: 'id',
                        className: "idHidden"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "massage_description"
                    },
                    {
                        "data": "duree_massage"
                    },
                    {
                        "data": "prix"
                    },
                    {
                        "data": "image_path"
                    },
                    {
                        data: null,
                        orderable: false,
                        title: "Modifier le massage",
                        "defaultContent": "<button class='btn-modificateur' onclick='buttonModif(($this))'>Modifier le massage</button>"
                    }
                    // Ajoutez d'autres colonnes si nécessaire
                ]
            });
            $('#tableUpdateMaquillage').DataTable({
                "ajax": {
                    "url": "process_show_makeup.php", // Spécifiez l'URL de votre script PHP ici
                    "dataSrc": "" // Cela indique à DataTables que les données sont directement disponibles dans l'objet JSON
                },
                "columns": [{
                        data: 'ID',
                        className: "idHidden"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "duree"
                    },
                    {
                        "data": "prix"
                    },
                    {
                        data: null,
                        orderable: false,
                        title: "Modifier le massage",
                        "defaultContent": "<button class='btn-modificateur' onclick='buttonModif(($this))'>Modifier le maquillage</button>"

                    }
                    // Ajoutez d'autres colonnes si nécessaire
                ]
            });
            $('#tableUpdateEpilation').DataTable({
                "ajax": {
                    "url": "process_show_hair_removal.php", // Spécifiez l'URL de votre script PHP ici
                    "dataSrc": "" // Cela indique à DataTables que les données sont directement disponibles dans l'objet JSON
                },
                "columns": [{
                        data: 'ID',
                        className: "idHidden"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "duree"
                    },
                    {
                        "data": "prix"
                    },
                    {
                        data: null,
                        orderable: false,
                        title: "Modifier le massage",
                        "defaultContent": "<button class='btn-modificateur' onclick='buttonModif(($this))'>Modifier l'épilation</button>"

                    }
                    // Ajoutez d'autres colonnes si nécessaire
                ]
            });
            $('#tableUpdateSoinVisage').DataTable({
                "ajax": {
                    "url": "process_show_care.php", // Spécifiez l'URL de votre script PHP ici
                    "dataSrc": "" // Cela indique à DataTables que les données sont directement disponibles dans l'objet JSON
                },
                "columns": [{
                        data: 'ID',
                        className: "idHidden"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "dure"
                    },
                    {
                        "data": "prix"
                    },
                    {
                        data: null,
                        orderable: false,
                        title: "Modifier le massage",
                        "defaultContent": "<button class='btn-modificateur' onclick='buttonModif(($this))'>Modifier le soin du visage</button>"

                    }
                    // Ajoutez d'autres colonnes si nécessaire
                ]
            });
            $('#tableUpdateOngle').DataTable({
                "ajax": {
                    "url": "process_show_nail.php", // Spécifiez l'URL de votre script PHP ici
                    "dataSrc": "" // Cela indique à DataTables que les données sont directement disponibles dans l'objet JSON
                },
                "columns": [{
                        data: 'ID',
                        className: "idHidden"
                    },
                    {
                        "data": "name"
                    },
                    {
                        "data": "duree"
                    },
                    {
                        "data": "prix"
                    },
                    {
                        data: null,
                        orderable: false,
                        title: "Modifier le massage",
                        "defaultContent": "<button class='btn-modificateur' onclick='buttonModif(($this))'>Modifier l'ongle</button>"

                    }
                    // Ajoutez d'autres colonnes si nécessaire
                ]
            });
        });
        // Fonction pour afficher/masquer les formulaires d'ajout
        document.getElementById("ajouter-link").addEventListener("click", function() {
            let formulaires = document.querySelectorAll(".formulaire"); // Sélectionne tous les formulaires avec la classe "formulaire"
            formulaires.forEach(function(form) { // Parcours chaque formulaire
                form.classList.toggle("hidden"); // Inverse la classe "hidden" pour afficher ou masquer le formulaire
            });
        });

        // document.getElementById("update-link").addEventListener("click", function() {
        //     let table = document.getElementById("tableUpdate");
        //     if (table.style.display === "none") {
        //         table.style.display = "table";
        //     } else {
        //         table.style.display = "none";
        //     }
        // });
    </script> -->
</body>

</html>
<script src="../js/add_article.js"></script>
<script src="../js/add_facial_care.js"></script>
<script src="../js/add_makeup.js"></script>
<script src="../js/add_nail.js"></script>
<script src="../js/add_hair_removal.js"></script>
<script src="../js/add_partenair.js"></script>

<script src="../js/tools.js"></script>