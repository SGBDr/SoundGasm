<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>utilisateur</title>
    <!-- CSS  -->
    <link rel="stylesheet" href="../css/style.css">
    <!-- FONTAWESOME  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome//5.15.4/css/all.min.css">
    <!-- BOOTSTRAP  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    
    <!-- SCRIPT  -->
   <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
   <script src="../js/script.js"></script>
</head>


<body>
    <!-- SIDEBAR  -->
    <div class="sidebar">
        <div class="logo">
            <img src="../images/SoundgasmLogo.png" alt="">
            <span class="nav-item">Soundgasm' Admin</span>
        </div>
        <div class="sidebar-item">
            <a href="../dashboard.php" ><i class="fa fa-chart-bar"></i><span>DASHBOARD</span></a>
            <a href="../musique/musique.php"><i class="fa fa-music"></i><span>MUSIQUES</span></a>
            <button class="tablinks" onclick="showUsers('./');"><i class="fa fa-user"></i><span>UTILISATEURS</span></button>
            <a href="administrateur.php"><i class="fa fa-users"></i><span>ADMINISTRATEURS</span></a> 
        </div>
        <div class="logout">
            <a href="../log/deconnexion.php"><i class="fa fa-sign-out-alt"></i><span>DECONNEXION</span></a>
        </div>
    </div>

    <!-- CONTENU SECTION UTILISATEURS -->
    <div id="London" class="tabcontent">
        <h1 id="infoUser">click button to see users</h1>
    </div>
</body>
</html>

<!-- 
"user_id" => $this->user_id,
"name" => $this->name,
"birthday" => $this->birthday->format("Y-m-d"),
"identifier" => $this->identifier->json(),
"last_connexion" , "sexe"
"like_musics" => $this->like_musics,
"playlists" => $this->playlists,
"groups" => $this->groups,
"artists" => $this->artists 
-->




