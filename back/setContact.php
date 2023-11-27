<?php
    require "conn.php";

    $data = json_decode(file_get_contents('php://input'), true);
    $validation = checkObj($data,['user_id','subject','body']);

    if(!$validation){
        $response['status'] = 'failed';
        $response['message'] = 'Missing data';
        $response['data'] = $data;
    }else{
        if(!filter_var($data['email'], FILTER_VALIDATE_EMAIL)){
            $response['status'] = 'failed';
            $response['message'] = 'Invalid e-mail';
        }else{
            $sql = 'INSERT INTO contact (user_id, subject, body) VALUES (:user_id, :subject, :body)';
            $qry = $conn->prepare($sql);
            $qry->bindParam(':user_id',$data['user_id'],PDO::PARAM_STR);
            $qry->bindParam(':subject',$data['subject'],PDO::PARAM_STR);
            $qry->bindParam(':body',$data['body'],PDO::PARAM_STR);
            try {
                $qry->execute();
                $response['status'] = 'success';
                $response['message'] = 'contact registered successfully!';
            } catch (PDOException $error) {
                $response['status'] = 'failed';
                $response['message'] = 'Something went wrong with the query';
                $response['catch'] = $error->getMessage();
            }
        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);
?>