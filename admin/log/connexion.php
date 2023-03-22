<?php
  //demarrer et vide la session (=> déconnexion)
  session_start();
  // session_unset();
  //echo"hgggg";
  if(!empty($_POST['idt']) && !empty($_POST['mdp'])){
    // Récupérer les valeurs soumises dans le formulaire
    $username = $_POST['idt']; // = :email    = user3@gmail.com
    $password = $_POST['mdp']; // = :password = password3
     // Envoyer une requête à l'API(appel d'API) pour vérifier si l'utilisateur existe
    $api_url = "https://soundgasm.herokuapp.com?controllers=auth&method=GET&email={$username}&password={$password}&log=IN";
    $response = file_get_contents($api_url);
    // echo $username;
    // echo $password;
    // echo $api_url;
    // echo $response;
    // Traiter la réponse de l'API
    $response_object = json_decode($response);
    // var_dump($response_object);
    if ($response_object->response->logIn === true) { // si l'utilisateur existe
      require '../pdo.php';
      $req = $pdo -> prepare("SELECT role FROM identifiers WHERE email=?");
      $req->bindValue(1, $_POST['idt']);
      $req->execute();
      $req = $req->fetch();
      $req = $req['role'];
      // var_dump($req);
      if($req=='ADMIN'){
        $_SESSION['username'] = $username; // stocker le username dans la session(pourquoi : moi meme je ne sais pas oooh)
        $_SESSION['token'] = $response_object->response->TOKEN; // stocker le token dans la session
        header('Location:../dashboard.php'); // rediriger vers la page de tableau de bord
      }
      else { // si l'utilisateur n'a pas le droit d'etre ici
        $error1 = "Access denied";
      }
    } else { // si l'utilisateur n'existe pas
      $error2 = "Nom d'utilisateur ou mot de passe incorrect.";
    }
  }
?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <title>connexion</title>
    <!-- CSS  -->
    <link rel="stylesheet" href="../css/style.css">
    <!-- FONTAWESOME  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome//5.15.4/css/all.min.css">
    <!-- BOOTSTRAP  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>


<style>
  @import url('https://fronts.googleapis.com/css2?family=Poppins:wight@400;600&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  body{
    background: #dfe9f5;
  }
  .wrapper{
    width: 330px;
    padding: 2rem 1rem;
    margin: 50px auto;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
  }
  h1{
    font-size: 2rem;
    color: #07001f;
    margin-bottom: 1.2rem;
  }
  form input{
    width: 92%;
    outline: none;
    border: 1px solid #fff;
    padding: 12px 20px;
    margin-bottom: 10px;
    border-radius: 20px;
    background: #e4e4e4;
  }
  button{
    font-size: 1rem;
    margin-top: 1.8rem;
    padding: 10px 0;
    border-radius: 20px;
    outline: none;
    border: none;
    width: 90%;
    color:#fff;
    cursor: pointer;
    background: rgb(17, 107, 143);
  }
  button:hover{
    background: rgb(17, 107, 143, 0.877);
  }
  input:focus{
    border: 1px solid rgb(192, 192, 192);
  }
  .terms{
    margin-top: 0.2rem;
  }
  .terms input{
    height: 1em;
    width: 1em;
    vertical-align: middle;
    cursor: pointer;
  }
  .terms label{
    font-size: 0.7rem;
  }
  .terms a{
    color: rgb(17, 107, 143);
    text-decoration: none;
  }
  .member{
    font-size: 0.8rem;
    margin-top: 1.4rem;
    color: #636363;
  }
  .member a{
    color: rgb(17, 107, 143);
    text-decoration: none;
  }
  #err{
    color: red;
  }
</style>


<body>
  <div class="wrapper">
    <h1>WELCOME !</h1>
    <?php 
      if (isset($error1)) { 
        echo "<h6 id=\"err\">$error1</h6>";
      } 
      if (isset($error2)) { 
        echo "<h6 id=\"err\">$error2</h6>";
      } 
   ?>
    <form action="connexion.php" method="POST">
      <input type="text" name="idt" required  placeholder="Username">
      <input type="password" name="mdp" required  placeholder="Passsword">
      <button type="submit" name="submit">Login</button>
    </form>
  </div>
</body>
</html>