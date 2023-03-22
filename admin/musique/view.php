<?php
  session_start();
  if (isset($_SESSION["token"])){
    if(isset($_GET['id'])){
      require '../pdo.php';
      $req=$pdo->prepare("SELECT * FROM musics WHERE music_id=?");
      // var_dump($req);
      $req->bindValue(1, $_GET['id']);
      $req->execute();
      $req = $req->fetch();
      // var_dump($req);
      // header('location:musique.php');
    }
  }
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>dashboard</title>
    <!-- CSS  -->
    <link rel="stylesheet" href="../css/style.css">
    <!-- FONTAWESOME  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome//5.15.4/css/all.min.css">
    <!-- BOOTSTRAP  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

        <!-- SCRIPT  -->
   <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
   <!-- <script>
        console.log("fygcgxfhhjgjkj");
        let el = document.getElementById("token");
        console.log($("#token").attr("value"));
        console.log(el);
   </script> -->
</head>


<style>
  body>a{
    float:right;
    margin: 15px;
    padding:15px;
    border-radius:10px;  
  }
  .admin{
  background:#fff;
  padding:50px;
  border-radius:10px;  
  } 
  .site{
  font-family:'Holtwood One SC', sans-serif;
  }
</style>


<body>
    <?php
        $token = $_SESSION["token"];
        echo "<input type=\"hidden\" value=$token>";
    ?>
    <input type="hidden" id="token" value=<?= $_SESSION["token"] ?>>
    <!-- SIDEBAR  -->
    <div class="sidebar">
        <div class="logo">
            <img src="../images/SoundgasmLogo.png" alt="">
            <span class="nav-item">Soundgasm' Admin</span>
        </div>
        <div class="sidebar-item">
            <a href="../dashboard.php" ><i class="fa fa-chart-bar"></i><span>DASHBOARD</span></a>
            <a href="musique.php"><i class="fa fa-music"></i><span>MUSIQUES</span></a>
            <button class="tablinks" onclick="showUsers(event, 'London');"><i class="fa fa-user"></i><span>UTILISATEURS</span></button>
            <button class="tablinks" onclick="showAdmins(event, 'Paris');"><i class="fa fa-users"></i><span>ADMINISTRATEURS</span></button>  
        </div>
        <div class="logout">
            <a href="log/deconnexion.php"><i class="fa fa-sign-out-alt"></i><span>DECONNEXION</span></a>
        </div>
    </div>

    <!-- CONTENU SECTION UTILISATEURS -->
    <div id="London" class="tabcontent">
          <div class="card mb-3">
            <div class="row g-0" style=" margin: 10% 10%;">
              <div class="col-md-4" >
                <img src=<?php echo ' ' . $req['rep_image'];?>  style=" width: 400px;" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text"><label style="font-weight : bold;">Name : </label> <?php echo " ".$req['name']; ?></p><br>
                  <p class="card-text"><label style="font-weight : bold;">Artist : </label><?php echo ' ' . $req['artist']; ?></p><br>
                  <p class="card-text"><label style="font-weight : bold;">Style : </label><?php echo ' ' . $req['style']; ?></p><br>
                  <p class="card-text"><label style="font-weight : bold;">Country : </label><?php echo ' ' . $req['country']; ?></p><br>
                  <p class="card-text"><label style="font-weight : bold;">Release date : </label><?php echo ' ' . $req['release_date']; ?></p>
                </div>
              </div>
            </div>
          </div>
          <div class="form-actions">
            <a class="btn btn-primary" href="musique.php"><span class="fa fa-arrow-left "></span> Retour</a>
          </div>
    </div>

    <script src="../js/script.js"></script>
</body>
</html>

