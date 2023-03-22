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
    <title>dashboard</title>
    <!-- CSS  -->
    <link rel="stylesheet" href="css/style.css">
    <!-- FONTAWESOME  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome//5.15.4/css/all.min.css">
    <!-- BOOTSTRAP  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <!-- SCRIPT  -->
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    <!-- CHART JS  -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script> 
</head>


<body onload="totalMusique('musique/'); totalUser('utilisateur/');">
    <?php
        $token = $_SESSION["token"];
        echo "<input type=\"hidden\" value=$token>";
    ?>
    <input type="hidden" id="token" value=<?= $_SESSION["token"] ?>>


    <!-- SIDEBAR  -->
    <div class="sidebar">
        <div class="logo">
            <img src="images/SoundgasmLogo.png" alt="">
            <span class="nav-item">Soundgasm' Admin</span>
        </div>
        <div class="sidebar-item">
            <a href="dashboard.php"><i class="fa fa-chart-bar"></i><span>DASHBOARD</span></a>
            <a href="musique/musique.php"><i class="fa fa-music"></i><span>MUSIQUES</span></a>
            <button class="tablinks" onclick="showUsers('./utilisateur/');"><i class="fa fa-user"></i><span>UTILISATEURS</span></button>
            <a href="administrateur/administrateur.php"><i class="fa fa-users"></i><span>ADMINISTRATEURS</span></a> 
        </div>
        <div class="logout">
            <a href="log/deconnexion.php"><i class="fa fa-sign-out-alt"></i><span>DECONNEXION</span></a>
        </div>
    </div>


    <!-- CONTENU SECTION UTILISATEURS -->
    <div id="London" class="tabcontent"><br>
        <h1><strong>Dashboard  </strong></h1> <br><br>
        <div class="row">
            <div class="col-sm-6">
                <div class="card bg-primary text-white">
                    <div class="card-body">
                    <span><i class="fa fa-music fa-4x"></i><h1 class="card-title" id="totalmusique" > </h1></span>
                        <h6 class="card-text">Total musique</h6>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card bg-success text-white">
                    <div class="card-body">
                    <span><i class="fa fa-user fa-4x"></i><h1 class="card-title" id="totaluser" > </h1></span>
                        <h6 class="card-text">Total utilisateur</h6>
                    </div>
                </div>
            </div>
            
            <div class="col-sm-8" style="margin:auto">
                <!-- <div class="card"> -->
                </br></br></br>
                    <div class="card-body">
                    <canvas id="myChart"></canvas>
                    </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
    <script>// Récupérer l'élément canvas
        // Récupérer l'élément canvas
        var ctx = document.getElementById('myChart').getContext('2d');

        // Récupérer les données depuis un script PHP en utilisant une requête AJAX
        $.ajax({
            url: 'repartionArtiste.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {

                // Définir les données pour le diagramme en bâton
                var chartData = {
                    labels: data.artiste,
                    datasets: [{
                        label: 'nbre utilisateurs suivant l\'artiste',
                        data: data.nb,
                        backgroundColor: 'rgba(100, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                };

                // Définir les options pour le diagramme en bâton
                var chartOptions = {
                    scales: {
                        y: {
                            beginAtZero: true,
                            width: 100,
                            height: 100
                        }
                    }
                };

                // Créer le diagramme en bâton
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: chartData,
                    options: chartOptions
                });
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
        </script>
</body>
</html>





