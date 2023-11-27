<?php

  require "conn.php";

  $sql = 'SELECT * FROM states ORDER BY name';
  $qry = $conn->prepare($sql);
  try {
    $qry->execute();
    $response['status'] = 'success';
    $response['message'] = 'All states returned';
    $response['states'] = $qry->fetchAll(PDO::FETCH_OBJ);
  } catch (PDOException $error) {
    $response['status'] = 'success';
    $response['message'] = 'Something went wrong with the query';
    $response['error'] = $error->getMessage();
  }

  header('Content-Type: application/json');
  echo json_encode($response);

?>