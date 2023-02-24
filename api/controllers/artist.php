<?php

    include_once("./api/utils/import.php");
    header('Content-Type: application/json');
    $artistServ = new ArtistServ();
    if($method == "GET"){
        // www.domain.com?controllers=artist&method=GET
        // liste des artist
        echo json_encode(array("response" => $artistServ->getAll(), "HttpCode" => 200, "datetime" => new datetime()));
    }else if ($method == "UPDATE"){
        if(explode("=", $params[2])[0] == "for" && explode("=", $params[2])[1] == "ADD_PREF"){
            // www.domain.com?controllers=artist&method=POST&for=ADD_PREF
            echo json_encode(array("response" => $artistServ->addPreference(), "HttpCode" => 200, "datetime" => new datetime()));
        }else{
            // www.domain.com?controllers=artist&method=DELETE&for=REMOVE_PREF
            echo json_encode(array("response" => $artistServ->removePreference(), "HttpCode" => 200, "datetime" => new datetime()));
        }
    }

?>