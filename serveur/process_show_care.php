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
    // Prepare the SELECT query
    $sql = "SELECT * FROM soins_visage";

    // Prepare the statement
    $stmt = $conn->prepare($sql);

    // Check if the preparation was successful
    if ($stmt) {
        // Execute the prepared statement
        if ($stmt->execute()) {
            // Get the result set from the executed statement
            $result = $stmt->get_result();

            // Fetch the data from the result set (in this example, fetch as an associative array)
            $articles = $result->fetch_all(MYSQLI_ASSOC);

            // Output or process the retrieved data as needed
            // print_r($articles);

            // Close the result set
            $result->close();

            $json_data = json_encode($articles);

            header('Content-Type: application/json');
            echo $json_data;
        } else {
            // An error occurred during execution
            echo "Erreur lors de l'exécution de la requête : " . $stmt->error;
        }

        // Close the prepared statement
        $stmt->close();
    } else {
        // An error occurred during preparation
        echo "Erreur lors de la préparation de la requête : " . $conn->error;
    }
}
