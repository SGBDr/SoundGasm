<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization, TOKEN");
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
    $params_p = [];
    // format params
    foreach ($params as $key => $value)
        $params_p[explode("=", $value)[0]] = explode("=", $value)[1];
    // Name of the controller
    $controller_name = isset($params_p["controllers"]) ? $params_p["controllers"] : "";
    // Body of request
    $body = json_decode(file_get_contents('php://input'));
    // controller name
    $controller_file = './api/controllers/' . $controller_name . '.php';
    $ip = getIp(); // mettre l'IP 

    // key fast.fm token = "54e9d12d77171d18f17ff5f2c6febaeb" share_secret = "ea89886c4e9e29a6c0175e94a6ed2565" register to = "kengoum_gassam"

    if(!isset($params_p["controllers"]) || !isset($params_p["method"])){
        http_response_code(403);
        header('Content-Type: application/json');
        echo json_encode(array("response" => "Bad request", "HttpCode" => 403, "message" => "something wrong in your url, near to controllers name or method name", "datetime" => new datetime()));
    }else{
        $method = $params_p["method"];
        if (file_exists($controller_file)) {
            if($controller_name != "auth"){
                header('Content-Type: application/json');
                if(isset($_SERVER['HTTP_TOKEN'])){
                    $token = $_SERVER['HTTP_TOKEN'];
                    $tokenServ = new TokenServ();
                    $rep = $tokenServ->isAuth($token);
                    if($rep[0]){
                        $ID = $rep[1];
                        include_once($controller_file);
                    }else
                        echo json_encode(array("response" => "Forbidden", "HttpCode" => 200, "message" => "something wrong with your token", "datetime" => new datetime()));
                }else
                    echo json_encode(array("response" => "Forbidden", "HttpCode" => 404, "message" => "token not provided", "datetime" => new datetime()));
            }else if($controller_name == "auth")
                include_once($controller_file);
        } else {
            http_response_code(404);
            header('Content-Type: application/json');
            echo json_encode(array("response" => "File not found", "HttpCode" => 404, "message" => "controllers not found", "datetime" => new datetime()));
        }
    }


?>
