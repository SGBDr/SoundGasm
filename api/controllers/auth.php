<?php

    include_once("./api/utils/import.php");
    header('Content-Type: application/json');
    $tokenServ = new TokenServ();
    $ip = "fghjkl";
    if($method == "GET"){
        if(explode("=", $params[4])[1] == "IN"){
            // www.domain.com?controllers=auth&method=GET&email=:email&password=:password&log=IN
            $token = $tokenServ->logIN(explode("=", $params[3])[1], explode("=", $params[2])[1], $ip);
            if($token == "false")
                echo json_encode(array("response" => array("logIN" => false) , "HttpCode" => 200, "datetime" => new datetime()));
            else 
                echo json_encode(array("response" => array("logIn" => true, "TOKEN" => $token), "HttpCode" => 200, "datetime" => new datetime()));
        }else if(explode("=", $params[4])[1] == "OUT"){
            // www.domain.com?controllers=auth&method=GET&token=:token&log=OUT
            echo json_encode(array("response" => array("logOut" => $tokenServ(explode("=", $params[2])[1], $ip)), "HttpCode" => 200, "datetime" => new datetime()));
        }
    }
?>