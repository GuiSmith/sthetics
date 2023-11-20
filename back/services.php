<?php

    require "conn.php";

    $serviceId = (isset($_GET['id'])) ? ($_GET['id']) : (0);
    if($serviceId == 0){
        $sql = 'SELECT * FROM service';
        $message = 'All services returned';
    }else{
        $sql = 'SELECT * FROM service WHERE id = '.$serviceId;
        $message = "Service with ID {$serviceId} returned";
    }

    $qry = $conn->prepare($sql);
    
    try {
        $qry->execute();
        $response['status'] = 'success';
        $response['message'] = $message;
        if ($serviceId == 0) {
            $response['services'] = $qry->fetchAll(PDO::FETCH_OBJ);
        }else{
            $response['services'] = $qry->fetchAll(PDO::FETCH_OBJ)[0];
        }
        $response['query'] = $sql;
    }catch(PDOException $error){
        $response['status'] = 'failed';
        $response['message'] = 'something went wrong';
        $response['error'] = $error->getMessage();
    }

    header('Content-Type: application/json');
    echo json_encode($response);

?>