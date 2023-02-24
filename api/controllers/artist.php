<?php



    include_once("./api/utils/import.php");
    header('Content-Type: application/json');
    $artistServ = new ArtistServ();
    if($method == "GET"){
        // www.domain.com?controllers=artist&method=GET
        // liste des artist
        echo json_encode(array("response" => $artistServ->getAll(), "HttpCode" => 200, "datetime" => new datetime()));
    }else if ($method == "POST"){
        
        
    }

//echo json_encode(  $playlistServ->add("Rode", 1) , JSON_PRETTY_PRINT);

?>