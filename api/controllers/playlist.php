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
    // www.domain.com?controllers=playlist&method=UPDATE&id=:id&idMusic=:idMusic&action=remove
    // liker une musique
    echo json_encode(array("response" => $playlistServ->LikeSong($id,$user_id), "HttpCode" => 200, "datetime" => new datetime()));
    }
    else if($action && $action=="remove"){
    // www.domain.com?controllers=playlist&method=UPDATE&id=:id&action=unlike
    // retirer une musique de la playlist
    echo json_encode(array("response" => $playlistServ->removeSong($id,$user_id), "HttpCode" => 200, "datetime" => new datetime()));
    }

}else if ($method == "POST"){/*
    public function addSong(int $music_id, int $playlist_id){
        return $this->playlistRepo->addSongIntoPlaylist($music_id, $playlist_id);
    }

    public function removeSong(int $music_id, int $playlist_id){
        return $this->playlistRepo->removeSongFromPlaylist($music_id, $playlist_id);
    }

    public function add(string $name, int $user_id){
        $playlist = $this->playlistRepo->save($name, $user_id);
        return $playlist == null ? null : $playlist->json();
    }

    public function update(string $name, int $playlist_id){
        return $this->playlistRepo->update($name, $playlist_id);
    }*/
}

//echo json_encode(  $playlistServ->add("Rode", 1) , JSON_PRETTY_PRINT);

?> 
