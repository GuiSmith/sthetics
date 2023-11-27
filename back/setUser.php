<?php

    require "conn.php";

    $data = json_decode(file_get_contents('php://input'),true);
    $validation = checkObj($data,['user','email']);

    if(!$validation){
        $response['status'] = 'failed';
        $response['message'] = "Name or email were not informed.";
    }else{
        if(!filter_var($data['email'],FILTER_VALIDATE_EMAIL)){
            $response['status'] = 'failed';
            $response['message'] = 'Invalid e-mail';
        }else{
            $sql = 'INSERT INTO user (name, email) VALUES (:name, :email)';
            $qry = $conn->prepare($sql);
            $qry->bindParam(':name',$data['name'],PDO::PARAM_STR);
            $qry->bindParam(':email',$data['email'],PDO::PARAM_STR);
            try {
                $qry->execute();
                $response['status'] = 'success';
                $response['message'] = 'User registered successfully!';
            }catch(PDOException $error){
                $response['status'] = 'failed';
                $response['message'] = 'Something went wrong with the query';
                // $response['error'] = $qry->errorInfo();
                $response['catch'] = $error->getMessage();
                $response['data'] = $data;
            }
        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);
?>