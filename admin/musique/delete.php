
<?php
session_start();
if (isset($_SESSION["token"])){
  if(isset($_GET['id'])){//si id de la music existe
    require '../pdo.php';
    $req=$pdo->prepare("DELETE FROM musics WHERE music_id=?");
    $req->bindValue(1, $_GET['id']);
    $req->execute();
    header('location:musique.php');
    // echo"<div class="alert alert-success" role="alert">This is a success alert—check it out!</div>";

  }
}





