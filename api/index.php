<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

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
        include_once("./services/music.php");
        foreach ($_SERVER as $key => $value) {
            echo $key . " " . $value ."\n";
        }
        $musicServ = new MusicServ();
        //echo json_encode(  $musicServ->findByNameOrArtist("not the only one") , JSON_PRETTY_PRINT);
        //foreach ($_SERVER as $parm => $value)  echo "$parm = '$value'\n";
        exit;
    }


?>
