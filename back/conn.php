<?php

    $conn = new PDO('mysql:host=localhost;dbname=sthetics;charset=utf8','root','buggy1081');

    $response = array(
        'status' => '',
        'message' => ''
    );

    function checkObj($obj,$requiredData){
        foreach ($obj as $key => $value) {
            if(in_array($key,$requiredData)){
                if(empty($value)){
                    return false;
                }
            }
        }
        return true;
    }

?>