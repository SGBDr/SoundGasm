<?php
include_once("./api/utils/import.php");


header('Content-Type: application/json');
$playlistServ = new PlaylistServ();

if($method == "GET"){
    if($id){
    // www.domain.com?controllers=playlist&method=GET&id=:id
    // playlist par id
    echo json_encode(array("response" => $playlistServ->getById($id), "HttpCode" => 200, "datetime" => new datetime()));
    }
    else if($term){
    // www.domain.com?controllers=playlist&method=GET&term=:term
    // playlist par nom
    echo json_encode(array("response" => $playlistServ->getByName($name), "HttpCode" => 200, "datetime" => new datetime()));
    }
    else if($wanted && $wanted=="playlist"){
        // www.domain.com?controllers=playlist&method=GET&wanted=playlist
        // playlist de l'utilisateur
        echo json_encode(array("response" => $playlistServ->getByOwner($ID), "HttpCode" => 200, "datetime" => new datetime()));
        }

}else if ($method == "UPDATE"){
    
    if($action && $action=="like"){
    // www.domain.com?controllers=playlist&method=UPDATE&id=:id&idMusic=:idMusic&action=add
    // liker une playlist
    echo json_encode(array("response" => $playlistServ->addSong($idMusic,$user_id), "HttpCode" => 200, "datetime" => new datetime()));
    }
    else if($action && $action=="remove"){
    // www.domain.com?controllers=playlist&method=UPDATE&idMusic=:idMusic&action=remove
    // retirer une musique de la playlist
    echo json_encode(array("response" => $playlistServ->removeSong($idMusic,$user_id), "HttpCode" => 200, "datetime" => new datetime()));
    }
    else if($action && $action=="update"){
        // www.domain.com?controllers=playlist&method=UPDATE&id=:id&action=update&name=:name
        // modifier le nom d'une playlist
        echo json_encode(array("response" => $playlistServ->update($name,$id), "HttpCode" => 200, "datetime" => new datetime()));
        }

}else if ($method == "PUT"){
        // www.domain.com?controllers=playlist&method=PUT&id=:id&action=update&name=:name
        // ajouter une playlist
        echo json_encode(array("response" => $playlistServ->add($name,$ID), "HttpCode" => 200, "datetime" => new datetime()));
        }


?> 
