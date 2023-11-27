<?php

  require "conn.php";

  $data = json_decode(file_get_contents('php://input'), true);
  $validation = checkObj($data,['user_id','address','uf','city','date','hour']);
  
  if(!$validation){
    $response['status'] = 'failed';
    $response['message'] = 'Missing information';
    $response['data'] = $data;
  }else{
    try {
      if(!filter_var($data['email'],FILTER_VALIDATE_EMAIL)){
        $response['status'] = 'failed';
        $response['message'] = 'Invalid e-mail';
      }else{
        $sql = 'INSERT INTO budget (user_id,telephone,address,uf,city,date,hour,obs) VALUES (:user_id,:telephone,:address,:uf,:city,:date,:hour,:obs)';
        $qry = $conn->prepare($sql);
        $qry->bindParam(':user_id',$data['user_id'],PDO::PARAM_STR);
        $qry->bindParam(':telephone', $data['telephone'], PDO::PARAM_STR);
        $qry->bindParam(':address', $data['address'], PDO::PARAM_STR);
        $qry->bindParam(':uf', $data['uf'], PDO::PARAM_STR);
        $qry->bindParam(':city', $data['city'], PDO::PARAM_STR);
        $qry->bindParam(':date', $data['date'], PDO::PARAM_STR);
        $qry->bindParam(':hour', $data['hour'], PDO::PARAM_STR);
        $qry->bindParam(':obs', $data['obs'], PDO::PARAM_STR);
        $qry->execute();
        $response['status'] = 'success';
        $response['message'] = 'budget registered successfully!';
      }
    } catch (PDOException $error) {
      $response['status'] = 'failed';
      $response['message'] = 'Something went wrong with the query';
      $response['error'] = $error->getMessage();
    }
  }

  header('Content-Type: application/json');
  echo json_encode($response);

?>