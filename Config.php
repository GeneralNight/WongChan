<?php
    
    $hostdb = 'localhost';
    $userdb = 'root';
    $passworddb = '';
    $db = 'WongChan';

    $con = new mysqli($hostdb,$userdb,$passworddb,$db);

    if($con->connect_error){
        echo "Error to connect to database. Error: ".$con->connect_error;
    }

?>