<?php

    include_once("./api/utils/import.php");
    header('Content-Type: application/json');
    $tokenServ = new TokenServ();
    if($method == "GET"){
        if($params_p["log"] == "IN"){
            // www.domain.com?controllers=auth&method=GET&email=:email&password=:password&log=IN
            $token = $tokenServ->logIN($params_p["password"], $params_p["email"], $ip);
            if($token == "false")
                echo json_encode(array("response" => array("logIn" => false) , "HttpCode" => 200, "datetime" => new datetime()));
            else 
                echo json_encode(array("response" => array("logIn" => true, "TOKEN" => $token), "HttpCode" => 200, "datetime" => new datetime()));
        }else if($params_p["log"] == "OUT"){
            // www.domain.com?controllers=auth&method=GET&user_id=:id&log=OUT
            echo json_encode(array("response" => array("logOut" => $tokenServ->logOut($params_p["user_id"])), "HttpCode" => 200, "datetime" => new datetime()));
        }
    }
?>