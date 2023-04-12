
<?php

$desc = $_POST['desc'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$district = $_POST['district'];
$mnum = $_POST['mnum'];

if (!empty($desc) && !empty($address) && !empty($state)) // changed || to &&
{

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "crms_db";


    // Create connection
    $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errno() .') '
            . mysqli_connect_error());
    }
    else{
        //  $SELECT = "SELECT mnum From complaints Where mnum = ? Limit 1";
        $INSERT = "INSERT Into complaints(desc,address,city,state,district,mnum) values(?,?,?,?, ?,?)";

        // Prepare statement
        //  $stmt = $conn->prepare($SELECT);
        //  $stmt->bind_param("i", $mnum);
        //  $stmt->execute();
        //  $stmt->bind_result($mnum);
        //  $stmt->store_result();
        //  $rnum = $stmt->num_rows;


        //  checking username
          // if ($rnum==0) {
          // $stmt->close();
          $stmt = $conn->prepare($INSERT);
          $stmt->bind_param("sssssi", $desc,$address,$city ,$state,$district,$mnum);
          $stmt->execute();
          $affected_rows = $stmt->affected_rows;
       if($affected_rows > 0){
          echo "Complaint registered";
       }else {
          echo "Not registered";
         }
         $stmt->close();
         $conn->close();
        }
      }else {
     echo "All fields are required";
     die();
    }
    <?php
	include("database.php");
	session_start();
	
	if(isset($_POST['submit']))
	{	
		$desc = $_POST['desc'];
		$desc = stripslashes($desc);
		$desc = addslashes($desc);

		$email = $_POST['email'];
		$email = stripslashes($email);
		$email = addslashes($email);

		$subject = $_POST['subject'];
		$subject = stripslashes($subject);
		$subject = addslashes($subject);

		$message = $_POST['message'];
		$message = stripslashes($message);
		$message = addslashes($message);
		$str="SELECT email from user WHERE email='$email'";
		$result=mysqli_query($con,$str);
		
            $str="insert into contact set name='$name',email='$email',subject='$subject',message='$message'";
			if((mysqli_query($con,$str)))	
			echo "<center><h3><script>alert('Congrats.. You have successfully registered !!');</script></h3></center>";
			header('location: index.html');
    }
?>