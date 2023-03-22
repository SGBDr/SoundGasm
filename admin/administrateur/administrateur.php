<?php 
    // // Fichier à accès réservé aux personnes connectées
    session_start(); // on commence toujours par là
    // // Droits de la personne suffisants ?
    if (!isset($_SESSION["token"])){
        header('Location:../log/connexion.php');
    }
    else{
        require '../pdo.php';
        $req=$pdo->prepare("SELECT user_id, name, birthday, i.email  FROM users u, identifiers i WHERE u.identifier_id = i.identifier_id and i.role = 'ADMIN' ");
        $req->execute();
        $req = $req->fetchAll();
        // echo $req; //obligatoire de faire un echo
    }

    // header('Content-type: application/json; charset=utf-8');


?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>administrateur</title>
    <!-- CSS  -->
    <link rel="stylesheet" href="../css/style.css">
    <!-- FONTAWESOME  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome//5.15.4/css/all.min.css">
    <!-- BOOTSTRAP  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>


<body  onload="totalAdministrateur('../administrateur/');">
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
            <button class="tablinks" onclick="showUsers('../utilisateur/');"><i class="fa fa-user"></i><span>UTILISATEURS</span></button>
            <a href="administrateur.php"><i class="fa fa-users"></i><span>ADMINISTRATEURS</span></a> 
        </div>
        <div class="logout">
            <a href="../log/deconnexion.php"><i class="fa fa-sign-out-alt"></i><span>DECONNEXION</span></a>
        </div>
    </div>


    <!-- CONTENU SECTION UTILISATEURS -->
    <div id="London" class="tabcontent"><br><br><br>
        <div class="row">
            <h1 id="test"><strong>Liste des administrateurs &emsp;&emsp;&emsp;&emsp; <a href="insert.php" class="btn btn-success btn.lg"><span class="fa fa-plus"></span> Ajouter</a> </strong></h1><br><br><br>
            <div>Total administrateurs : <span id="totaladministrateur"></span></div> <br>
            <div style="display:flex; width: 100%; height: 500px; overflow-y:auto;">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <!-- name, rep_image, track, artist, style, country, release_date -->
                            <th>identifiant</th>
                            <th>Nom</th>
                            <th>birthday</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        // var_dump($req);
                            foreach($req as $value) {
                                //var_dump($value);
                                echo '<tr class="line">';
                                echo '<td>' . $value['user_id'] . '</td>';
                                echo '<td>' . $value['name'] . '</td>';
                                echo '<td>' . $value['birthday'] . '</td>' ;
                                echo '<td>' . $value['email'] . '</td>'; 
                                echo '<td>';
                                echo '<a class="btn btn-primary btn-sm" href="view.php?id=' . $value['user_id'] . '"><i class="fa fa-eye"></i> Voir   </a>';
                                echo '&emsp;';
                                echo '<a class="btn btn-success btn-sm" href="update.php?id=' . $value['user_id'] . '"><i class="fa fa-pen "></i> modifier</a>';
                                echo '&emsp;';
                                echo '<a class="btn btn-danger btn-sm" href="delete.php?id=' . $value['user_id'] . '"><i class="fa fa-trash"></i> Supprimer</a>';
                                echo '</td>';
                                echo '</tr>';
                            }
                        ?>
                    </tbody>    
                </table>
            </div>
        </div>
    </div>

    <!-- SCRIPT  -->
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="../js/script.js"></script>
</body>
</html>





