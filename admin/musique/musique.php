<?php 
    // // Fichier à accès réservé aux personnes connectées
    session_start(); // on commence toujours par là
    // // Droits de la personne suffisants ?
    if (!isset($_SESSION["token"])){
        header('Location:../log/connexion.php');
    }

    // Envoyer une requête à l'API(appel d'API) pour vérifier si l'utilisateur existe
    $opts = array(
        'http' => array(
            'method'=>'GET',
            'header'=>"TOKEN: " . $_SESSION["token"]
        )
    );

    $cont = stream_context_create($opts);
    $api_url = "https://soundgasm.herokuapp.com?controllers=music&method=GET&by=TERM&term=rep";
    $response = file_get_contents($api_url, false, $cont);
    $rep = json_decode($response)->response->musics;
    //  var_dump($rep);
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>musique</title>
    <!-- CSS  -->
    <link rel="stylesheet" href="../css/style.css">
    <!-- FONTAWESOME  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome//5.15.4/css/all.min.css">
    <!-- BOOTSTRAP  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>


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
            <button class="tablinks" onclick="showUsers('../utilisateur/');"><i class="fa fa-user"></i><span>UTILISATEURS</span></button>
            <a href="../administrateur/administrateur.php"><i class="fa fa-users"></i><span>ADMINISTRATEURS</span></a> 
        </div>
        <div class="logout">
            <a href="../log/deconnexion.php"><i class="fa fa-sign-out-alt"></i><span>DECONNEXION</span></a>
        </div>
    </div>


    <!-- CONTENU SECTION MUSIQUES -->
    <div id="London" class="tabcontent"><br>
        <div class="row">
            <form action="#">
                <div class="from-input" id="search_music">
                    <input type="search" placeholder="Search..">
                    <button type="submit" class="search-btn"><i class='fa fa-search'></i></button>
                </div>
            </form><br><br>
            <h1><strong>Liste des musiques  </strong></h1>
            <div class="totalmusique">Total musique : </div> 
            <div style="display:flex; width: 100%; height: 500px; overflow-y:auto">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <!-- name, rep_image, track, artist, style, country, release_date -->
                            <th>Nom</th>
                            <th>artist</th>
                            <th>style</th>
                            <th>country</th>
                            <th>release date</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            foreach($rep as $key => $value) {
                                //var_dump($value);
                                echo '<tr class="line">';
                                echo '<td>' . $value->name . '</td>';
                                echo '<td>' . $value->artist . '</td>' ;
                                echo '<td>' . $value->style . '</td>'; 
                                echo '<td>' . $value->country . '</td>' ;
                                echo '<td>' . $value->release_date . '</td>' ;
                                echo '<td width=150>';
                                echo '<a class="btn btn-success btn-sm" href="view.php?id=' . $value->music_id . '"><i class="fa fa-eye"></i></a>';
                                echo '&ensp;';
                                // echo '<a class="btn btn-primary btn-sm" href="update.php?id=' . $value->music_id . '"><i class="fa fa-pen" id="mod"></i></a>';
                                echo '&ensp;';
                                echo '<a class="btn btn-danger btn-sm" href="delete.php?id=' . $value->music_id . '" onclick="confirm(\''. $value->name .'\');"><span class="fa fa-trash"></span></a>';
                                
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





