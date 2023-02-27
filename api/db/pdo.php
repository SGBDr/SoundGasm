<?php
    /**
     * implementation of singleton pattern to decrease 
     * number ob database connexion openned
     */

    class PDO_N{
        const host = "localhost";//'mysql-soundgasm.alwaysdata.net';
        const dbname = "soundgasm";//'soundgasm_s';
        const username = "root";//'soundgasm';
        const password = "";//'Maman@cherie2206';
        // string line for connexion
        const db = "mysql:host=".self::host.";dbname=".self::dbname.";port=3306;charset=utf8";

        private static ?PDO $conn = null;

        private function __construct(){}

        

        /**
         * Summary of getInstance
         * @return PDO
         */
        public static function getInstance(): ?PDO{
            if(self::$conn == null){
                try{
                    self::$conn = new PDO(self::db, self::username, self::password);
                 }catch (PDOException $e){
                    echo $e->getMessage();
                 }
            }
            return self::$conn;
        }
    }

?>