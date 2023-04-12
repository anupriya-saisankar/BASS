<?php
$login = false;
$showError = false;
if($_SERVER["REQUEST_METHOD"] == "POST"){
    include 'database.php';
    $username = $_POST["username"];
    $password = $_POST["password"]; 
    
     
    $sql = "Select * from nodalreg where username='$username' AND password='$password'";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);
    if ($num == 1){
        $login = true;
        session_start();
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        header("location:admin\index.php");

    } 

    else{
        $showError = "Invalid Credentials";
    }
}
if($login){
    echo ' <div>
        <strong>Success!</strong> You are logged in
    </div> ';
    }
    if($showError){
    echo ' <div>
        <strong>Error!</strong> '. $showError.'
    </div> ';
    }
?>