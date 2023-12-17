<?php

  require 'conn.php';
  $data = json_decode(file_get_contents('php://input'),true);
  $validation = checkObj($data,['user_id','service_id','review']);

  if(!$validation){
    $response['status'] = 'failed';
    $response['message'] = 'Missing data';
    $response['data'] = $data;
  }else{
    $sql = 'INSERT INTO review (user_id,service_id,review) VALUES (:user_id,:service_id,:review)';
    $qry = $conn->prepare($sql);
    $qry->bindParam(':user_id',$data['user_id'],PDO::PARAM_STR);
    $qry->bindParam(':service_id',$data['service_id'],PDO::PARAM_STR);
    $qry->bindParam(':review',$data['review'],PDO::PARAM_STR);
    try {
      $qry->execute();
      $response['status'] = 'success';
      $response['message'] = 'Review registered successfully!';

    } catch (PDOException $error) {
      $response['status'] = 'failed';
      $response['message'] = 'Something went wrong with the query';
      $response['catch'] = $error->getMessage();
    }
  }

  header('Content-Type: application/json');
  echo json_encode($response);

?>