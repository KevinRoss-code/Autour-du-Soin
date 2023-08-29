<?php
require_once("../constance.php");

$servername = DB_HOST;
$username = DB_USER;
$password = DB_PASSWORD;
$dbname = DB_NAME; // Remplacez par le nom de votre base de données

// Créer une nouvelle connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Erreur : " . $conn->connect_error);
} else {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupérer les valeurs des champs du formulaire
        $name_partenair = $_POST["namePartenair"];
        $site_web = $_POST["siteWeb"];
        $adresse = $_POST["adresse"];
        $image_partenair_path = null;

        // Check if all required fields are provided
        if ($name_partenair == null || $site_web == null || $adresse == null) {
            echo 'err';
        } else {
            // File upload handling
            if (isset($_FILES["imagePartenair"]) && $_FILES["imagePartenair"]["error"] === UPLOAD_ERR_OK) {
                $targetDirectory = "../upload/"; // Replace this with your desired directory for storing images
                $targetFile = $targetDirectory . basename($_FILES["imagePartenair"]["name"]);
                $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

                // Allow only certain image file formats (you can extend this list if needed)
                if ($imageFileType !== "jpg" && $imageFileType !== "png" && $imageFileType !== "jpeg" && $imageFileType !== "gif") {
                    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                } else {
                    if (move_uploaded_file($_FILES["imagePartenair"]["tmp_name"], $targetFile)) {
                        // The image has been successfully uploaded
                        $image_partenair_path = $targetFile;
                    } else {
                        echo "Sorry, there was an error uploading your file.";
                        // Handle the error scenario, e.g., redirect back to the form with an error message
                    }
                }
            }

            // Perform the database insertion
            // Préparer la requête SQL INSERT avec des paramètres sous forme de marqueurs de position (?)
            $sql = "INSERT INTO partenaires (name, site_web, image, adresse) VALUES (?, ?, ?, ?)";

            // Préparer la déclaration de requête
            $stmt = $conn->prepare($sql);

            // Vérifier si la préparation de la requête a réussi
            if ($stmt) {
                // Lier les valeurs des paramètres avec les variables
                $stmt->bind_param("ssss", $name_partenair, $site_web, $image_partenair_path, $adresse);
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
