<?php
    session_start();
    header('Content-type: application/json; charset=utf-8');
    if (isset($_SESSION["token"])){
            require '../pdo.php';
            $req=$pdo->prepare("SELECT user_id, name, birthday, i.email  FROM users u, identifiers i WHERE u.identifier_id = i.identifier_id and i.role = 'ADMIN' ");
            $req->execute();
            $req = json_encode($req->fetchAll());
            echo $req; //obligatoire de faire un echo
    }
    // include "listeAdmins.php";
?>