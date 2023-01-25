<?php
    /**
     * implementation of singleton pattern to decrease 
     * number ob database connexion openned
     */

    class PDO_N{
        const host = 'localhost';
        const dbname = 'soudgasm';
        const username = 'postgres';
        const password = '';
        // string line for connexion
        const db = "pgsql:host=".self::host.";port=5432;dbname=".self::dbname.";user=".self::username.";password=".self::password;

        private static PDO $conn;

        private function __construct(){}

        /**
         * Summary of getInstance
         * @return PDO
         */
        public static function getInstance(): PDO{
            if(self::$conn == null){
                try{
                    $conn = new PDO(self::db);
                    if($conn){
                     echo "Succesfull connected to ". self::dbname;
                    }
                 }catch (PDOException $e){
                    echo $e->getMessage();
                 }
            }
            return $conn;
        }
    }

?>