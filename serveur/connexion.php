<?php
require_once("../constance.php");

$servername = DB_HOST;
$username = DB_USER;
$password = DB_PASSWORD;
$dbname = DB_NAME; // Remplacez par le nom de votre base de données

// Créer une nouvelle connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Erreur de connexion à la base de données: " . $conn->connect_error);
}

// Démarrer la session
session_start();

// Vérification des informations d'identification lors de la soumission du formulaire
if (isset($_POST['submit']) && isset($_POST['nom_utilisateur']) && isset($_POST['mot_de_passe'])) {
    // Récupération des données du formulaire
    $nom_utilisateur = $_POST['nom_utilisateur'];
    $mot_de_passe = $_POST['mot_de_passe'];

    // Requête préparée pour vérifier les informations d'identification
    $sql = "SELECT * FROM admin WHERE name=? AND password=SHA2(?, 256)";
    $stmt = $conn->prepare($sql);

    // Vérifier si la préparation de la requête a réussi
    if ($stmt) {
        // Lier les valeurs des paramètres avec les variables
        $stmt->bind_param("ss", $nom_utilisateur, $mot_de_passe);

        // Exécuter la requête préparée
        if ($stmt->execute()) {
            // Récupérer le résultat de la requête
            $result = $stmt->get_result();

            // Vérifier si l'utilisateur existe dans la base de données
            if ($result->num_rows == 1) {
                // Utilisateur trouvé, démarrer une session pour l'utilisateur
                $_SESSION['logged_in'] = true;

                // Redirection vers la page dashboard
                header("Location: dashboard.php");
                exit();
            } else {
                // Utilisateur non trouvé, affichage d'un message d'erreur
                echo "Nom d'utilisateur ou mot de passe incorrect.";
            }
        } else {
            // Une erreur s'est produite lors de l'exécution de la requête
            echo "Erreur lors de l'exécution de la requête : " . $stmt->error;
        }
    } else {
        // Une erreur s'est produite lors de la préparation de la requête
        echo "Erreur de préparation de la requête : " . $conn->error;
    }
}

// Fermeture de la connexion à la base de données
$conn->close();
