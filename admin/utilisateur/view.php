<?php
    session_start();
    // header('Content-type: application/json; charset=utf-8');
    if (isset($_SESSION["token"])){
        if(isset($_GET['id'])){
            require '../pdo.php';
            $req1 = $pdo->prepare("SELECT name, birthday, i.email  FROM users u, identifiers i WHERE u.identifier_id = i.identifier_id and i.role = 'USER' and u.user_id=?");
            $req1->bindValue(1, $_GET['id']);
            $req1->execute();
            $req1 = $req1->fetch();
            // echo $req1;
            $req2 = $pdo->prepare("SELECT name from artists where artist_id in (SELECT artist_id FROM artist_user where user_id=? )limit 5");
            $req2->bindValue(1, $_GET['id']);
            $req2->execute();
            $req2 = $req2->fetchAll();
             // echo $req2;
             $req3 = $pdo->prepare("SELECT name from musics where music_id in (SELECT music_id FROM like_music where user_id=?) limit 5");
             $req3->bindValue(1, $_GET['id']);
             $req3->execute();
             $req3 = $req3->fetchAll();
              // echo $req3;

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
            <a href="../musique/musique.php"><i class="fa fa-music"></i><span>MUSIQUES</span></a>
            <button class="tablinks" onclick="showUsers();"><i class="fa fa-user"></i><span>UTILISATEURS</span></button>
            <button class="tablinks" onclick="showAdmins(event, 'Paris');"><i class="fa fa-users"></i><span>ADMINISTRATEURS</span></button>  
        </div>
        <div class="logout">
            <a href="log/deconnexion.php"><i class="fa fa-sign-out-alt"></i><span>DECONNEXION</span></a>
        </div>
    </div>

    <!-- CONTENU SECTION UTILISATEURS -->
    <div id="London" class="tabcontent">
        <div class="card mb-3">
            <div class="row g-0" style=" margin: 5% 5%;">
              <div class="col-md-4" >
                <span><i class="fa fa-user fa-4x"></i><h1 class="card-title"> </h1></span>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text"><label style="font-weight : bold;">Name : </label> <?php echo " ". $req1['name']; ?></p><br>
                  <p class="card-text"><label style="font-weight : bold;">Birthday : </label><?php echo ' ' . $req1['birthday']; ?></p><br>
                  <p class="card-text"><label style="font-weight : bold;">Email : </label><?php echo ' ' . $req1['email']; ?></p><br>
                </div>
              </div>
            </div>
        </div>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <!-- <th>Mes artistes</th> -->
        <div style="display:inline-block; width: 25%; height: 300px; overflow-y:auto;">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Mes artistes</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        foreach($req2 as $value){
                            echo '<tr>';
                            echo '<td>' . $value['name'] . '</td>' ;
                            echo '</tr>';
                        }
                    ?>
                </tbody>    
            </table>
        </div>
        &emsp;&emsp;&emsp;&emsp;&emsp;
        <!-- <th>Mes musiques</th> -->
        <div style="display:inline-block; width: 25%; height: 300px; overflow-y:auto;">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Mes musiques</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        foreach($req3 as $value){
                            echo '<tr>';
                            echo '<td>' . $value['name'] . '</td>' ;
                            echo '</tr>';
                        }
                    ?>
                </tbody>    
            </table>
        </div>

        <div class="form-actions">
            <a class="btn btn-primary" id="retour" onclick="retour(); showUsers('./');"><span class="fa fa-arrow-left "></span> Retour</a>
        </div>
    </div>
    <script>
        function retour(){
            $("#retour").click(function(event){
                event.preventDefault(); 
            }) 
        }
    </script>

    <script src="../js/script.js"></script>
</body>
</html>

