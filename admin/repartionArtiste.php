<?php
session_start();
if (isset($_SESSION["token"])){
    require 'pdo.php';
    // Connexion à la base de données et récupération des données pour le diagramme en bâton
    $req2 = $pdo->prepare("SELECT a.name, count(a.artist_id) as nb  from artists a, artist_user au where a.artist_id=au.artist_id group by a.name order by count(a.artist_id) desc limit 5");
    $req2->execute();
    $req2 = $req2->fetchAll();
    // var_dump($req2);
}




// Créer un tableau pour les labels et les ventes
$artiste = array();
$nb = array();

foreach ($req2 as $row) {
    $artiste[] = $row['name'];
    $nb[] = $row['nb'];
}

// Renvoyer les données sous forme de tableau JSON
echo json_encode(array('artiste' => $artiste, 'nb' => $nb));
?>