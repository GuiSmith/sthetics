<?php

    require "conn.php";

    if(isset($_GET['email']) && !empty($_GET['email'])){
        $email = $_GET['email'];
        $sql = "SELECT * FROM user WHERE email = :email";
        $qry = $conn->prepare($sql);
        $qry->bindParam(':email',$email,PDO::PARAM_STR);
        if($qry->execute()){
            if($qry->rowCount() == 0){
                $response['status'] = 'failed';
                $response['message'] = "user with email {$email} was not found";
            }else{
                $response['status'] = 'success';
                $response['message'] = "User with e-mail {$email} returned";
                $response['user'] = $qry->fetchAll(PDO::FETCH_OBJ)[0];
            }
        }
    }else{
        $response['status'] = 'failed';
        $response['message'] = 'Email not informed';
    }

    header('Content-Type: application/json');
    echo json_encode($response);

?>