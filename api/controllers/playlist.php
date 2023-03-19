<?php
include_once("./api/utils/import.php");


header('Content-Type: application/json');
$playlistServ = new PlaylistServ();

if($method == "GET"){
    // www.domain.com?controllers=playlist&method=GET&by=ID&playlist_id=:playlist_id
    if($params_p["by"] == "ID")
        echo json_encode(array("response" => array("playlist" => $playlistServ->getById($params_p["playlist_id"])), "HttpCode" => 200, "datetime" => new datetime()));
    // www.domain.com?controllers=playlist&method=GET&by=NAME&name=:name
    else if($params_p["by"] == "NAME")
        echo json_encode(array("response" => array("playlists" => $playlistServ->getByName($params_p["name"], $ID)), "HttpCode" => 200, "datetime" => new datetime()));
    // www.domain.com?controllers=playlist&method=GET&by=USER
    else if($params_p["by"] == "USER")
        echo json_encode(array("response" => array("playlists" => $playlistServ->getByOwner($ID)), "HttpCode" => 200, "datetime" => new datetime()));

}else if ($method == "UPDATE"){
    // www.domain.com?controllers=playlist&method=UPDATE&action=ADD&music_id=:music_id
    if($params_p["action"] == "ADD")
        echo json_encode(array("response" => array("add" => $playlistServ->addSong($params_p["music_id"],$ID)), "HttpCode" => 200, "datetime" => new datetime()));
    // www.domain.com?controllers=playlist&method=UPDATE&action=REMOVE&music_id=:music_id
    else if($params_p["action"] == "REMOVE")
        echo json_encode(array("response" => array("remove" => $playlistServ->removeSong($params_p["music_id"],$ID)), "HttpCode" => 200, "datetime" => new datetime()));
    // www.domain.com?controllers=playlist&method=UPDATE&action=UPDATE&name=:name
    else if($params_p["action"] == "UPDATE")
        echo json_encode(array("response" => array("update" => $playlistServ->update($name,$id)), "HttpCode" => 200, "datetime" => new datetime()));

}
// www.domain.com?controllers=playlist&method=PUT&name=:name
else if ($method == "PUT")
    echo json_encode(array("response" => array("add" => $playlistServ->add($name,$ID)), "HttpCode" => 200, "datetime" => new datetime()));
?> 
