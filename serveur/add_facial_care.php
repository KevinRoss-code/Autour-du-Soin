<?php
// Inclure le fichier de configuration
require_once("../constance.php");

// Utiliser les constantes de connexion
$servername = DB_HOST;
$username = DB_USER;
$password = DB_PASSWORD;
$dbname = DB_NAME; // Remplacez par le nom de votre base de données


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Erreur : " . $conn->connect_error);
} else {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupérer les valeurs des champs du formulaire
        $nameCare = $_POST["nameCare"];
        $dureeCare = $_POST["dureeCare"];
        $prixCare = $_POST["prixCare"];


        // Check if all required fields are provided
        if ($nameCare == null || $prixCare == null || $dureeCare == null) {
            echo 'err';
        } else {

            // Perform the database insertion
            // Préparer la requête SQL INSERT avec des paramètres sous forme de marqueurs de position (?)
            $sql = "INSERT INTO soins_visage (name, dure, prix) VALUES (?, ?, ?)";

            // Préparer la déclaration de requête
            $stmt = $conn->prepare($sql);

            // Vérifier si la préparation de la requête a réussi
            if ($stmt) {
                // Lier les valeurs des paramètres avec les variables
                $stmt->bind_param("sss", $nameCare, $dureeCare, $prixCare);
                // Exécuter la requête préparée
                if ($stmt->execute()) {
                    // L'insertion a réussi
                    echo "Les données ont été ajoutées avec succès à la base de données.";
                } else {
                    // Une erreur s'est produite lors de l'insertion
                    echo "Erreur lors de l'ajout des données : " . $stmt->error;
                }

                // Fermer la déclaration de requête
                $stmt->close();
            } else {
                // Une erreur s'est produite lors de la préparation de la requête
                echo "Erreur lors de la préparation de la requête : " . $conn->error;
            }
        }
    }
}
