<?php
    include_once("./api/db/pdo.php");

    include_once("./api/models/identifier.php");
    include_once("./api/models/artist.php");
    include_once("./api/models/group.php");
    include_once("./api/models/playlist.php");
    include_once("./api/models/music.php");
    include_once("./api/models/user.php");

    include_once("./api/repositories/identifier.php");
    include_once("./api/repositories/artist.php");
    include_once("./api/repositories/group.php");
    include_once("./api/repositories/playlist.php");
    include_once("./api/repositories/music.php");
    include_once("./api/repositories/user.php");
    include_once("./api/repositories/token.php");

    include_once("./api/services/identifier.php");
    include_once("./api/services/artist.php");
    include_once("./api/services/group.php");
    include_once("./api/services/playlist.php");
    include_once("./api/services/music.php");
    include_once("./api/services/user.php");
    include_once("./api/services/token.php");

    function getIp(){
        if(!empty($_SERVER['HTTP_CLIENT_IP'])){
          $ip = $_SERVER['HTTP_CLIENT_IP'];
        }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
          $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        }else{
          $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }


?>