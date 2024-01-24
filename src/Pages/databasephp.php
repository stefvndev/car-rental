<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $full_name = $_POST["name"];
  $email = $_POST["emailid"];
  $message = $_POST["msgContent"];

  $full_name = filter_var($full_name, FILTER_SANITIZE_STRING);
  $email = filter_var($email, FILTER_SANITIZE_EMAIL);
  $message = filter_var($message, FILTER_SANITIZE_STRING);

  
  $host = "localhost";
  $username = "root"; 
  $password = ""; 
  $database = "contact_form_db"; 
  $conn = new mysqli($host, $username, $password, $database);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO contact_entries (full_name, email, message) VALUES (?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sss", $full_name, $email, $message);

  if ($stmt->execute()) {
    echo "Data stored in the database successfully!";
  } else {

    echo "Error: " . $stmt->error;
  }

  $stmt->close();
  $conn->close();
}
?>
