<?php
    session_start();
    header('Content-type: application/json; charset=utf-8');
    if (isset($_SESSION["token"])){
        $opts = array(
            'http' => array(
                'method'=>'GET',
                'header'=>"TOKEN: " . $_SESSION["token"]
            )
        );
    
        $cont = stream_context_create($opts);
        $api_url = "https://soundgasm.herokuapp.com?controllers=music&method=GET&by=TERM&term=";
        $response = file_get_contents($api_url, false, $cont);
        $rep = json_decode($response)->response->musics;
        //var_dump($rep);
        echo json_encode($rep);
    }