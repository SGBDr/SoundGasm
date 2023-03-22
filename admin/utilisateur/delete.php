<?php
session_start();
if (isset($_SESSION["token"])){
  if(isset($_GET['id'])){
    require '../pdo.php';
    $req=$pdo->prepare("DELETE FROM users WHERE user_id=?");   
    $req->bindValue(1, $_GET['id']);
    $req->execute();
    // header('location:utilisateur.php');
    // echo"<div class="alert alert-success" role="alert">This is a success alert—check it out!</div>";
  }
}