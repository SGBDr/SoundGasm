<?php
    session_start();
    header('Content-type: application/json; charset=utf-8');
    if (isset($_SESSION["token"])){
            require '../pdo.php';
            $req = $pdo->prepare("SELECT user_id, name, birthday, i.email  FROM users u, identifiers i WHERE u.identifier_id = i.identifier_id and i.role = 'USER' ");
            $req->execute();
            $req = json_encode($req->fetchAll());
            echo $req;
    }

    /*foreach($rep as $key => $value) {
        //var_dump($value);
        echo '<tr class="line">';
        echo '<td>' . $value['name'] . '</td>';
        echo '<td>' . $value['birthday'] . '</td>' ;
        echo '<td>' . $value['identifier_id']['email'] . '</td>'; 
        echo '<td width=300>';
        echo '<a class="btn btn-primary btn-sm" href="view.php?id=' . $value->music_id . '"><span class="glyphicon glyphicon-eye-open "></span> </a>';
        echo ' ';
        // echo '<a class="btn btn-default btn-sm" href="update.php?id=' . $value->music_id . '"><span class="glyphicon glyphicon-pencil "></span> modifier</a>';
        // echo ' ';
        echo '<a class="btn btn-danger btn-sm" href="delete.php?id=' . $value->music_id . '"><span class="glyphicon glyphicon-remove "></span> Suprimer</a>';
        
        echo '</td>';

        echo '</tr>';
    }*/
?>