<?php

    include_once("./api/utils/import.php");
    header('Content-Type: application/json');
    $tokenServ = new TokenServ();
    $identifierServ = new IdentifierServ();
    $userServ = new UserServ();
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
    if($method == "POST"){
        if($params_p["action"] == "inscription"){
            // www.domain.com?controllers=auth&method=POST&action=inscription&email=:email&password=:password&name=:name&birthday=:birthday
            $identifier = $identifierServ->getByEmail($params_p["email"]);
            if($identifier != null)
                echo json_encode(array("response" => array("Inscription" => false) , "HttpCode" => 200, "datetime" => new datetime()));
            else{
                $ide = $identifierServ->add($params_p["email"],$params_p["password"]);
                if($ide != null){
                    $user = $userServ->add($params_p["name"], $params_p["birthday"], $ide->getIdentifier_id());
                    if($user != null)
                        echo json_encode(array("response" => array("inscription" => true, "TOKEN" => $token), "HttpCode" => 200, "datetime" => new datetime()));
                }else
                    echo json_encode(array("response" => array("Inscription" => false) , "HttpCode" => 200, "datetime" => new datetime()));
            }
        }
    }
?>