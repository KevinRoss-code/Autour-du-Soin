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
    $persons_name = $_POST["persons_name"];
    $date_of_reservation = $_POST["date_of_reservation"];
    $start_reservation = $_POST["start_reservation"];


    // Check if all required fields are provided
    if ($persons_name == null || $date_of_reservation == null || $start_reservation == null) {
      echo 'err';
    } else {

      // Perform the database insertion
      // Préparer la requête SQL INSERT avec des paramètres sous forme de marqueurs de position (?)
      $sql = "INSERT INTO reservation (persons_name, date_of_reservation, start_reservation) VALUES (?, ?, ?)";

      // Préparer la déclaration de requête
      $stmt = $conn->prepare($sql);

      // Vérifier si la préparation de la requête a réussi
      if ($stmt) {
        // Lier les valeurs des paramètres avec les variables
        $stmt->bind_param("sss", $persons_name, $date_of_reservation, $start_reservation);
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
