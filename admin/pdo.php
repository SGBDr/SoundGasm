<?php

    const host = 'mysql-soundgasm.alwaysdata.net';
    const dbname = 'soundgasm_s';
    const username = 'soundgasm';
    const password = 'Maman@cherie2206';
    // string line for connexion
    const db = "mysql:host=".host.";dbname=".dbname.";port=3306;charset=utf8";
    $pdo = new PDO(db, username, password);

?>