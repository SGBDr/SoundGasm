<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
include_once("./api/utils/import.php");
    // Request Method
    $method = $_SERVER['REQUEST_METHOD'];
    // request URI
    $uri = $_SERVER['REQUEST_URI'];
    // Remove first /
    $uri = substr($uri, 1);
    // segments
    $segments = explode("?", $uri)[1];
    // params
    $params = explode("&", $segments);
    // Name of the controller
    $controller_name = explode("=", $params[0])[1];
    // Body of request
    $body = json_decode(file_get_contents('php://input'));
    // controller name
    $controller_file = './api/controllers/' . $controller_name . '.php';
    $method = explode("=", $params[1])[1];
    $token = $_SERVER['HTTP_TOKEN'];
    $ip = "jhk"; // mettre l'IP 

    if(explode("=", $params[0])[0] != "controllers" && explode("=", $params[1])[0] != "method"){
        http_response_code(403);
        header('Content-Type: application/json');
        echo json_encode(array("response" => "Bad request", "HttpCode" => 403, "message" => "something wrong in your url, near to controllers name or method name", "datetime" => new datetime()));
    }else{
        if (file_exists($controller_file)) {
            if($controller_name != "auth"){
                $tokenServ = new TokenServ();
                $rep = $tokenServ->isAuth($token, $ip);
                if($re[0]){
                    $ID = $re[1];
                    include_once($controller_file);
                }else{
                    echo json_encode(array("response" => "FORBIDEN", "HttpCode" => 200, "message" => "something wrong with your token", "datetime" => new datetime()));
                }
            }else if($controller_name == "auth")
                include_once($controller_file);
            
        } else {
            http_response_code(404);
            header('Content-Type: application/json');
            echo json_encode(array("response" => "File not found", "HttpCode" => 404, "message" => "controllers not found", "datetime" => new datetime()));
        }
    }


?>
