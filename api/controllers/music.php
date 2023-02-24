<?php
include_once("./api/utils/import.php");


header('Content-Type: application/json');
$musicServ = new MusicServ();
if($method == "GET"){
    if($id){
    // www.domain.com?controllers=music&method=GET&id=:id
    // musique par id
    echo json_encode(array("response" => $musicServ->getById($id), "HttpCode" => 200, "datetime" => new datetime()));
    }
    else if($term){
    // www.domain.com?controllers=music&method=GET&term=:term
    // musique par nom
    echo json_encode(array("response" => $musicServ->findByNameOrArtist($name), "HttpCode" => 200, "datetime" => new datetime()));
    }
    else if($wanted && $wanted=="liked"){
        // www.domain.com?controllers=music&method=GET&wanted=liked
        // musique par nom
        echo json_encode(array("response" => $musicServ->getLikeSong(/* à verifier je pense à gerer avec la session*/$user_id), "HttpCode" => 200, "datetime" => new datetime()));
        }
    else{
    // www.domain.com?controllers=music&method=GET
    // liste des musiques likées
    echo json_encode(array("response" => $musicServ->getAll(), "HttpCode" => 200, "datetime" => new datetime()));
    }
}else if ($method == "UPDATE"){
    if($action && $action=="like"){
    // www.domain.com?controllers=music&method=UPDATE&id=:id&action=like
    // liker une musique
    echo json_encode(array("response" => $musicServ->LikeSong($id,$user_id), "HttpCode" => 200, "datetime" => new datetime()));
    }
    else if($action && $action=="unlike"){
    // www.domain.com?controllers=music&method=UPDATE&id=:id&action=unlike
    // unlike une musique
    echo json_encode(array("response" => $musicServ->unLikeSong($id,$user_id), "HttpCode" => 200, "datetime" => new datetime()));
    }

}

//echo json_encode(  $playlistServ->add("Rode", 1) , JSON_PRETTY_PRINT);

?> 
