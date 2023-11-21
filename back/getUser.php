<?php

    require "conn.php";

    $data['name'] = (isset($_GET['name'])) ? ($_GET['name']) : (0);
    $data['email'] = (isset($_GET['email'])) ? ($_GET['email']) : (0);
    $validation = (isset($_GET['email']) && !empty($_GET['email'])) ? (true) : (false);

    if(!$validation){
        $response['status'] = 'failed';
        $response['message'] = 'Email or name were not informed';
    }else{
        $sql = "SELECT * FROM user WHERE email = :email";
        $qry = $conn->prepare($sql);
        $qry->bindParam(':email',$data['email'],PDO::PARAM_STR);
        try {
            $qry->execute();
            if($qry->rowCount() == 0){
                $response['status'] = 'failed';
                $response['message'] = "user with email {$email} was not found";
            }else{
                $user = $qry->fetchAll(PDO::FETCH_OBJ)[0];
                if(isset($_GET['name']) && $user->name != $_GET['name']){
                    $update_sql = 'UPDATE user SET name = :name';
                    $update_query = $conn->prepare($update_sql);
                    $update_query->bindParam(':name',$data['name'],PDO::PARAM_STR);
                    try {
                        $update_query->execute();
                        $response['status'] = 'success';
                        $response['message'] = "User with e-mail {$data['email']} returned and name updated!";
                        $user->name = $data['name'];
                        $response['user'] = $user;
                    } catch (PDOException $error) {
                        $reponse['status'] = 'failed';
                        $response['message'] = 'Something went wrong with the query getting updating the name';
                        $response['error'] = $error->getMessage();
                    }
                }else{
                    $response['status'] = 'success';
                    $response['message'] = "User with e-mail {$data['email']} returned";
                    $response['user'] = $user;
                }
            }
        } catch (PDOException $error) {
            $reponse['status'] = 'failed';
            $response['message'] = 'Something went wrong with the query getting the user';
            $response['error'] = $error->getMessage();
        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);
?>