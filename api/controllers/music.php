<?php
include_once("./api/utils/import.php");


header('Content-Type: application/json');
$musicServ = new MusicServ();
if($method == "GET"){
    // www.domain.com?controllers=music&method=GET&by=ID&id=:id
    if($params_p["by"] == "ID")
        echo json_encode(array("response" => array("music" => $musicServ->getById($params_p["id"])), "HttpCode" => 200, "datetime" => new datetime()));
    // www.domain.com?controllers=music&method=GET&by=TERM&term=:term
    else if($params_p["by"] == "TERM")
        echo json_encode(array("response" => array("musics" => $musicServ->findByNameOrArtist($params_p["term"])), "HttpCode" => 200, "datetime" => new datetime()));
    // www.domain.com?controllers=music&method=GET&by=LIKE
    else if($params_p["by"] == "LIKE")
        echo json_encode(array("response" => array("musics" => $musicServ->getLikeSong($ID)), "HttpCode" => 200, "datetime" => new datetime()));
}else if ($method == "UPDATE"){
    // www.domain.com?controllers=music&method=UPDATE&action=LIKE&music_id=:id
    if($params_p["action"] == "LIKE")
        echo json_encode(array("response" => array("like" => $musicServ->LikeSong($params_p["music_id"],$ID)), "HttpCode" => 200, "datetime" => new datetime()));
    // www.domain.com?controllers=music&method=UPDATE&action=UNLIKE&music_id=:id
    else if($params_p["action"] == "UNLIKE")
        echo json_encode(array("response" => array("unlike" => $musicServ->unLikeSong($params_p["music_id"],$ID)), "HttpCode" => 200, "datetime" => new datetime()));
}

//echo json_encode(  $playlistServ->add("Rode", 1) , JSON_PRETTY_PRINT);

?> 
