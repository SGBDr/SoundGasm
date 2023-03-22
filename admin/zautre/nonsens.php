Formulaire de connexion pour l'administrateur
<section>
		<h2>Connexion</h2>
		<form method="post" action="connexion.php">
			<label for="nom-utilisateur">Nom d'utilisateur :</label>
			<input type="text" id="nom-utilisateur" name="nom-utilisateur" required>

			<label for="mot-de-passe">Mot de passe :</label>
			<input type="password" id="mot-de-passe" name="mot-de-passe" required>

			<input type="submit" value="Se connecter">
		</form>
	</section>


    <?php
		// Vérifier si l'administrateur est connecté
		session_start();
		if (!isset($_SESSION['admin'])) {
			// Si l'administrateur n'est pas connecté, afficher un message d'erreur et rediriger vers la page de connexion
			echo "<p>Vous devez vous connecter pour accéder à cette page.</p>";
			header('Location: connexion.php');
			exit();
		}

		// Si l'administrateur est connecté, afficher les différentes sections de la page d'administration
	?>




<!DOCTYPE html>
<html>
<head>
	<title>Page d'administration pour le site de streaming de musique</title>
</head>
<body>
	<!-- En-tête de la page -->
	<header>
		<h1>Page d'administration pour le site de streaming de musique</h1>
		<nav>
			<ul>
				<li><a href="#tableau-de-bord">Tableau de bord</a></li>
				<li><a href="#utilisateurs">Utilisateurs</a></li>
				<li><a href="#musique">Musique</a></li>
				<!--<li><a href="deconnexion.php">Déconnexion</a></li>-->
			</ul>
		</nav>
	</header>

	<!-- Section "Tableau de bord" -->
	<section>
		<h2 id="tableau-de-bord">Tableau de bord</h2>
		<!-- Afficher des statistiques telles que le nombre total d'utilisateurs, le nombre de morceaux de musique, etc. -->
		<!-- Ajouter des graphiques pour visualiser les données. -->
	</section>

	<!-- Section "Utilisateurs" -->
	<section>
		<h2 id="utilisateurs">Utilisateurs</h2>
		<!-- Afficher une liste de tous les utilisateurs enregistrés avec des détails tels que le nom, l'adresse e-mail, etc. -->
		<!-- Permettre la suppression des utilisateurs inactifs ou inappropriés. -->
	</section>

	<!-- Section "Musique" -->
	<section>
		<h2 id="musique">Musique</h2>
		<!-- Afficher une liste de toutes les chansons disponibles avec des détails tels que le titre, l'artiste, le genre, etc. -->
		<!-- Permettre l'ajout, la suppression ou la mise à jour de chansons. -->
		<!-- Ajouter des filtres pour faciliter la recherche de chansons spécifiques. -->
	</section>

	<!-- Pied de page -->
	<footer>
		<hr>
		<p>Copyright © 2023</p>
    </footer>
</body>
	








<h1 class="text-logo"><span class="glyphicon glyphicon-cutlery "></span> Burger Code<span class="glyphicon glyphicon-cutlery"></span></h1>
            <div class="container admin">
            

            <div class="row">
            <h1><strong>Liste des items  </strong><a href="insert.php" class="btn btn-success btn.lg"><span class="glyphicon glyphicon-plus"></span> Ajouter</a></h1>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Prix</th>
                        <th>Catégorie</th>
                        <th>Actions</th>


                    </tr>
                    
                </thead>

                <tbody>

                    <?php
                    require 'database.php';
                    $db = Database::connect();

                    $statement = $db->query('SELECT items.id, items.name, items.description, items.price, categories.name as category 
                                            FROM items LEFT JOIN categories ON items.category = categories.id
                                            ORDER BY items.id DESC
                                            ');
                    while($item =$statement->fetch())
                    {
                        echo '<tr>';
                        echo '<td>' . $item['name'] . '</td>';
                        echo '<td>' . $item['description'] . '</td>' ;
                        echo '<td>' . number_format((float)$item['price'],2, '.','') . '</td>'; 
                        echo '<td>' . $item['category'] . '</td>' ;
                        echo '<td width=300>';
                        echo '<a class="btn btn-default" href="view.php?id=' . $item['id'] . '"><span class="glyphicon glyphicon-eye-open "></span> Voir</a>';
                        echo ' ';
                        echo '<a class="btn btn-primary" href="update.php?id=' . $item['id'] . '"><span class="glyphicon glyphicon-pencil "></span> Modifier</a>';
                        echo ' ';
                        echo '<a class="btn btn-danger" href="delete.php?id=' . $item['id'] . '"><span class="glyphicon glyphicon-remove "></span> Suprimer</a>';
                        
                        echo '</td>';

                        echo '</tr>';



                    }
                    Database::disconnect();
                    
                    


                    ?>


                </tbody>    
            </table>

            </div>

            </div>






<!-- php des utilisateur -->

			<?php
                            require 'database.php';
                            $db = Database::connect();

                            $statement = $db->query('SELECT items.id, items.name, items.description, items.price, categories.name as category 
                                                    FROM items LEFT JOIN categories ON items.category = categories.id
                                                    ORDER BY items.id DESC
                                                    ');
                            while($item =$statement->fetch()){
                                echo '<tr>';
                                echo '<td>' . $item['name'] . '</td>';
                                echo '<td>' . $item['description'] . '</td>' ;
                                echo '<td>' . number_format((float)$item['price'],2, '.','') . '</td>'; 
                                echo '<td>' . $item['category'] . '</td>' ;
                                echo '<td width=300>';
                                echo '<a class="btn btn-default" href="view.php?id=' . $item['id'] . '"><span class="glyphicon glyphicon-eye-open "></span> Consulter</a>';
                                echo ' ';
                                echo '<a class="btn btn-danger" href="delete.php?id=' . $item['id'] . '"><span class="glyphicon glyphicon-remove "></span> Suprimer</a>';
                                
                                echo '</td>';

                                echo '</tr>';
                            }
                            Database::disconnect();
                        ?>













<!-- /////////////////////////////////////////////////////////////// -->

<!-- sans changement et avec des liens et icon-->
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body {font-family: "Lato", sans-serif;}

.sidebar {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 16px;
}

.sidebar a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
</style>
</head>
<body>

<div class="sidebar">
  <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
  <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
  <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
</div>

<div class="main">
  <h2>Sidebar with Icons</h2>
  <p>This side navigation is of full height (100%) and always shown.</p>
  <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
</div>
     
</body>
</html> 





<!-- avec changement et boutton -->
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {box-sizing: border-box}
body {font-family: "Lato", sans-serif;}

/* Style the tab */
.tab {
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 30%;
  height: 300px;
}

/* Style the buttons inside the tab */
.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current "tab button" class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  float: left;
  padding: 0px 12px;
  border: 1px solid #ccc;
  width: 70%;
  border-left: none;
  height: 300px;
}
</style>
</head>
<body>

<h2>Vertical Tabs</h2>
<p>Click on the buttons inside the tabbed menu:</p>

<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">London</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
</div>

<div id="London" class="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" class="tabcontent">
  <h3>Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</div>

<script>
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>
   
</body>
</html> 













































<!-- index.php -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Boxicons -->
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
	<!-- My CSS -->
	<link rel="stylesheet" href="css/style.css">

	<title>AdminHub</title>
</head>
<body>

	<!-- SIDEBAR -->
	<section id="sidebar">
		<a href="#" class="brand"><img src="images/SoundgasmLogo.png" alt=""><span class="text">AdminHub</span></a>
		<ul class="side-menu top">
			<li class="active"><a href="dashbord/dashbord.php"><i class='bx bxs-doughnut-chart' ></i><span class="text">DASHBOARD</span></a></li>
			<li><a href="musique/musique.php"><i class='bx bxs-music' ></i><span class="text">MUSIQUES</span></a></li>
			<li><a href="utilisateur/utilisateur.php"><i class='bx bxs-user' ></i><span class="text">UTILISATEURS</span></a></li>
			<li><a href="administrateur/administrateur.php"><i class='bx bxs-group' ></i><span class="text">ADMINISTRATEURS</span></a></li>
		</ul>
		<ul class="side-menu">
			<li><a href="log/deconnexion.php" class="logout"><i class='bx bxs-log-out-circle' ></i><span class="text">DECONNEXION</span></a></li>
		</ul>
	</section>
	<!-- SIDEBAR -->


	<!-- CONTENT -->
	<section id="content">

		<!-- NAVBAR -->
		<nav>
			<i class='bx bx-menu' ></i>
		</nav>
		<!-- NAVBAR -->

	</section>
	<!-- CONTENT -->

	
    <!-- SCRIPT -->
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
	<script src="js/script.js"></script>

</body>
</html>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

a {
	text-decoration: none;
}

li {
	list-style: none;
}

:root {
	--poppins: 'Poppins', sans-serif;
	--lato: 'Lato', sans-serif;

	--light: #F9F9F9;
	--blue: #3C91E6;
	--light-blue: #CFE8FF;
	--grey: #eee;
	--dark-grey: #AAAAAA;
	--dark: #342E37;
	--red: #DB504A;
	--yellow: #FFCE26;
	--light-yellow: #FFF2C6;
	--orange: #FD7238;
	--light-orange: #FFE0D3;
}

html {
	overflow-x: hidden;
}

body.dark {
	--light: #0C0C1E;
	--grey: #060714;
	--dark: #FBFBFB;
}

body {
	background: var(--grey);
	overflow-x: hidden;
}





/* SIDEBAR */
#sidebar {
	position: fixed;
	top: 0;
	left: 0;
	width: 280px;
	height: 100%;
	background: var(--light);
	z-index: 2000;
	font-family: var(--lato);
	transition: .3s ease;
	overflow-x: hidden;
	scrollbar-width: none;
}
#sidebar::--webkit-scrollbar {
	display: none;
}
#sidebar.hide {
	width: 60px;
}
#sidebar .brand {
	font-size: 24px;
	font-weight: 700;
	height: 56px;
	display: flex;
	align-items: center;
	color: var(--blue);
	position: sticky;
	top: 0;
	left: 0;
	background: var(--light);
	z-index: 500;
	padding-bottom: 20px;
	box-sizing: content-box;
}
#sidebar .brand .bx {
	min-width: 60px;
	display: flex;
	justify-content: center;
}
#sidebar .side-menu {
	width: 100%;
	margin-top: 48px;
}
#sidebar .side-menu li {
	height: 48px;
	background: transparent;
	margin-left: 6px;
	border-radius: 48px 0 0 48px;
	padding: 4px;
}
#sidebar .side-menu li.active {
	background: var(--grey);
	position: relative;
}
#sidebar .side-menu li.active::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	top: -40px;
	right: 0;
	box-shadow: 20px 20px 0 var(--grey);
	z-index: -1;
}
#sidebar .side-menu li.active::after {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	bottom: -40px;
	right: 0;
	box-shadow: 20px -20px 0 var(--grey);
	z-index: -1;
}
#sidebar .side-menu li a {
	width: 100%;
	height: 100%;
	background: var(--light);
	display: flex;
	align-items: center;
	border-radius: 48px;
	font-size: 16px;
	color: var(--dark);
	white-space: nowrap;
	overflow-x: hidden;
}
#sidebar .side-menu.top li.active a {
	color: var(--blue);
}
#sidebar.hide .side-menu li a {
	width: calc(48px - (4px * 2));
	transition: width .3s ease;
}
#sidebar .side-menu li a.logout {
	color: var(--red);
}
#sidebar .side-menu.top li a:hover {
	color: var(--blue);
}
#sidebar .side-menu li a .bx {
	min-width: calc(60px  - ((4px + 6px) * 2));
	display: flex;
	justify-content: center;
}
/* SIDEBAR */





/* CONTENT */
#content {
	position: relative;
	width: calc(100% - 280px);
	left: 280px;
	transition: .3s ease;
}
#sidebar.hide ~ #content {
	width: calc(100% - 60px);
	left: 60px;
}




/* NAVBAR */
#content nav {
	height: 56px;
	background: var(--light);
	padding: 0 24px;
	display: flex;
	align-items: center;
	grid-gap: 24px;
	font-family: var(--lato);
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1000;
}
#content nav::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	bottom: -40px;
	left: 0;
	border-radius: 50%;
	box-shadow: -20px -20px 0 var(--light);
}
#content nav a {
	color: var(--dark);
}
#content nav .bx.bx-menu {
	cursor: pointer;
	color: var(--dark);
}

/* NAVBAR */

/* CONTENT */









@media screen and (max-width: 768px) {
	#sidebar {
		width: 200px;
	}

	#content {
		width: calc(100% - 60px);
		left: 200px;
	}

	#content nav .nav-link {
		display: none;
	}
}






@media screen and (max-width: 576px) {
	#content nav form .form-input input {
		display: none;
	}

	#content nav form .form-input button {
		width: auto;
		height: auto;
		background: transparent;
		border-radius: none;
		color: var(--dark);
	}

	#content nav form.show .form-input input {
		display: block;
		width: 100%;
	}
	#content nav form.show .form-input button {
		width: 36px;
		height: 100%;
		border-radius: 0 36px 36px 0;
		color: var(--light);
		background: var(--red);
	}

	#content nav form.show ~ .notification,
	#content nav form.show ~ .profile {
		display: none;
	}

	#content main .box-info {
		grid-template-columns: 1fr;
	}

	#content main .table-data .head {
		min-width: 420px;
	}
	#content main .table-data .order table {
		min-width: 420px;
	}
	#content main .table-data .todo .todo-list {
		min-width: 420px;
	}
}
























<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
    <link rel="stylesheet" href="css/index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome//5.15.4/css/all.min.css">
</head>
<body>
    <nav>
        <div class="logo">
            <img src="images/SoundgasmLogo.png" alt="">
            <span class="nav-item">Soundgasm' Admin</span>
        </div>
        <ul>
            <li>
                <a href="dashbord/dashbord.php">
                    <i class="fas fa-chart-bar"></i>
                    <span class="nav-item">DASHBORD</span>
                </a>
            </li>
            <li>
                <a href="utilisateur/utilisateur.php">
                    <i class="fas fa-user"></i>
                    <span class="nav-item">UTILISATEURS</span>
                </a>
            </li>
            <li>
                <a href="musique/musique.php">
                    <i class="fas fa-music"></i>
                    <span class="nav-item">MUSIQUES</span>
                </a>
            </li>
            <li>
                <a href="administrateur/administrateur.php">
                    <i class="fas fa-users"></i>
                    <span class="nav-item">ADMINISTRATEURS</span>
                </a>
            </li>
            <li>
                <a href="log/deconnexion.php" class="logout">
                    <i class="fas fa-sign-out-alt"></i>
                    <span class="nav-item">DECONNEXION</span>
                </a>
            </li>
        </ul>
    </nav>
    <div class="principal">
       
    </div>

   <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
   <script src="js/index.js"></script>
</body>
</html>





<!-- index.css -->

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
*{
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

@media screen and (max-height: 450px) {
    .sidebar {padding-top: 15px;}
    .sidebar a {font-size: 18px;}
  }

.sidebar{
    height: 100%;
    width: 300px;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    background: #864343;
    /* z-index: 1; */
    /* overflow-x: hidden; */
    padding-top: 20px;
    /*overflow: hidden;*/
    /*transition: width 0.2s linear; */
    /* box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1); */
}

/* .sidebar-item{
    position: relative;
    top: 12px;
    margin-left: 10px;
} */

/* .sidebar:hover{ */
    /* width: 280px; */
    /* width: 160px;
    color: #f1f1f1; */
    /* transition: all 0.5s ease; */
/* } */

.sidebar a {
    /* padding: 6px 8px 6px 16px; */
    text-decoration: none;
    /* font-size: 20px; */
    color: #818181;
    display: block;
    padding: 15px;
}

  

.logo{
    text-align: center;
    /* display: flex; */
    /* transition: all 0.5s ease; */
    margin: 10px 0 30px 10px;
}

.logo img{
    width: 45px;
    height: 45px;
    border-radius: 25%;
}

.logo span{
    font-weight: bold;
    padding-left: 15px;
    font-size: 18px;
    text-transform: uppercase;
}

a{
    position: relative;
    color: rgb(85, 83, 83);
    font-size: 14spx;
    display: table;
    width: 300px;
    padding: 10px;
}

.fa{
    position: relative;
    width: 70px;
    height: 40px;
    top: 0px;
    font-size: 20px;
    text-align: center;
}

a:hover{
   background: #eee; 
}

.logout{
    position: relative;
    margin-top: 280px;
}

.main {
    margin-left: 300px; /* Same as the width of the sidenav */
    padding: 0px 10px;
    background: #576980;
    height: 100%;
    position: relative;
  }


  VERSION2
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
*{
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.sidebar{
    height: 100%;
    width: 300px;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    background: #bbb2b2;
    /* z-index: 1; */
    /* overflow-x: hidden; */
    padding-top: 20px;
    /*overflow: hidden;*/
    /*transition: width 0.2s linear; */
    /* box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1); */
}

/* .sidebar-item{
    position: relative;
    top: 12px;
    margin-left: 10px;
} */

/* .sidebar:hover{ */
    /* width: 280px; */
    /* width: 160px;
    color: #f1f1f1; */
    /* transition: all 0.5s ease; */
/* } */

.sidebar a {
    /* padding: 6px 8px 6px 16px; */
    text-decoration: none;
    /* font-size: 20px; */
    color: #2c2828;
    display: block;
    padding: 15px;
}

  

/* .logo{
    text-align: center;
    /* display: flex; */
    /* transition: all 0.5s ease; */
    /* margin: 10px 0 30px 10px; */
/* } */ 

.logo img{
    width: 40px;
    height: 40px;
    border-radius: 25%;
}

.logo span{
    font-weight: bold;
    padding-left: 15px;
    font-size: 18px;
    text-transform: uppercase;
}

a{
    position: relative;
    color: rgb(85, 83, 83);
    font-size: 14spx;
    display: table;
    width: 300px;
    padding: 10px;
}

.fa{
    position: relative;
    width: 70px;
    height: 40px;
    top: 0px;
    font-size: 20px;
    text-align: center;
}

a:hover{
   background: #eee; 
}

.logout{
    position: relative;
    margin-top: 280px;
}

.main {
    margin-left: 300px; /* Same as the width of the sidenav */
    padding: 0px 10px;
    background: #576980;
    height: 100%;
    position: relative;
  }






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

</style>

<body>
  <div class="wrapper">
    <h1>Sign Up</h1>
    <form action="#">
      <input type="text" placeholder="Username">
      <input type="text" placeholder="Name">
      <input type="password" placeholder="Passsword">
      <input type="password" placeholder="confirmation Passsword">
    </form>

    <div class="terms">
      <input type="checkbox" id="checkbox">
      <label for="checkbox"> I agree to these<a href="#">Terms & conditions</a></label>
    </div>
    <button>Sign Up</button>
    <div class="member">
      Already a member?<a href="./login.html">Login here</a>
    </div>
  </div>
</body>
</html>