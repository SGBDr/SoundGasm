<?php
    /**
     * implementation of singleton pattern to decrease 
     * number ob database connexion openned
     */

    class PDO_N{
        const host = 'soundgasm-instance.cln1iwawemvs.us-east-1.rds.amazonaws.com';
        const dbname = 'soundgasm-instance';
        const username = 'postgres';
        const password = 'postgrespw';
        // string line for connexion
        const db = "pgsql:host=".self::host.";port=5432;dbname=".self::dbname.";user=".self::username.";password=".self::password;

        private static ?PDO $conn = null;

        private function __construct(){}


        /**
         * Summary of getInstance
         * @return PDO
         */
        public static function getInstance(): ?PDO{
            if(self::$conn == null){
                try{
                    self::$conn = new PDO(self::db);
                 }catch (PDOException $e){
                    echo $e->getMessage();
                 }
            }
            return self::$conn;
        }
    }

?>