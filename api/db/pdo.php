<?php
    /**
     * implementation of singleton pattern to decrease 
     * number ob database connexion openned
     */

    public class PDO_N{
        private $host = 'localhost';
        private $dbname = 'soudgasm';
        private $username = 'postgres';
        private $password = '';
        // string line for connexion
        private $db = "pgsql:host=$host;port=5432;dbname=$dbname;user=$username;password=$password";

        $conn = null;

        private __construct(){}

        public static getInstance(){
            if($conn == null){
                try{
                    $conn = new PDO($db);
                    if($conn){
                     echo "Connecté à $dbname avec succès!";
                    }
                 }catch (PDOException $e){
                    echo $e->getMessage();
                 }
            }
            return $conn;
        }
    }

?>