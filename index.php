<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");

    // Request Method
    $method = $_SERVER['REQUEST_METHOD'];

    // request URI
    $uri = $_SERVER['REQUEST_URI'];

    // Remove first /
    $uri = substr($uri, 1);

    // Divide URI by /
    $segments = explode('/', $uri);

    // Name of the controller
    $controller_name = array_shift($segments);

    // Name of function called
    $function_name = array_shift($segments);

    // all param
    $params = $segments;

    // Body of request
    $body = json_decode(file_get_contents('php://input'));

    $controller_file = 'controllers/' . $controller_name . '.php';

    // Vérifie si le fichier de contrôleur existe
    if (file_exists($controller_file)) {
        // Inclut le fichier de contrôleur
        //include $controller_file;
    } else {
        // Envoie une réponse d'erreur 404 si le fichier de contrôleur n'existe pas
        //http_response_code(404);
        header('Content-Type: application/json');
        include_once("./api/services/music.php");
        $musicServ = new MusicServ();
        echo $body;
        //echo json_encode(  $musicServ->findByNameOrArtist("not the only one") , JSON_PRETTY_PRINT);
        //foreach ($_SERVER as $parm => $value)  echo "$parm = '$value'\n";
    }


?>
