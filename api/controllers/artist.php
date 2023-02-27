<?php

    include_once("./api/utils/import.php");
    header('Content-Type: application/json');
    $artistServ = new ArtistServ();
    if($method == "GET"){
        // www.domain.com?controllers=artist&method=GET&all=true
        if($params_p["all"] == "true")
            echo json_encode(array("response" => $artistServ->getAll(), "HttpCode" => 200, "datetime" => new datetime()));
        //www.domain.com?controllers=artist&method=GET&all=false
        if($params_p["all"] == "false")
            echo json_encode(array("response" => $artistServ->getPreference(), "HttpCode" => 200, "datetime" => new datetime()));
    }else if ($method == "UPDATE"){
        if(explode("=", $params[2])[0] == "for" && explode("=", $params[2])[1] == "ADD_PREF"){
            // www.domain.com?controllers=artist&method=POST&for=ADD_PREF&artist_id=:artist_id
            $artist_id = $params_p["artist_id"];
            $user_id = $ID;
            echo json_encode(array("response" => array{"add" => $artistServ->addPreference($user_id, $artist_id)}, "HttpCode" => 200, "datetime" => new datetime()));
        }else{
            // www.domain.com?controllers=artist&method=DELETE&for=REMOVE_PREF&artist_id=:artist_id
            $artist_id = $params_p["artist_id"];
            $user_id = $ID;
            echo json_encode(array("response" => array("remove" => $artistServ->removePreference($user_id, $artist_id)), "HttpCode" => 200, "datetime" => new datetime()));
        }
    }

?>