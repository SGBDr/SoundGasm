<?php
    include_once("./../db/pdo.php");
    include_once("./../models/identifier.php");


    class IdentifierRepo{
        private PDO $con = PDO_N::getInstance();

        function __construct(){}

        /**
         * Summary of findAll
         * @return array
         */
        public function findAll(): array{
            // get all identifier
            $result = $this->con->query("SELECT * FROM identifiers");
            $list = array();
            while($row = $result->fetch())
                array_push($list, new Identifier($row["identifier_id"], $row["email"], $row["password"], $row["active"], $row["role"]));
            return $list;
        }

        /**
         * Summary of findById
         * @param int $identifier_id
         * @return Identifier | null
         */
        public function findById(int $identifier_id): Identifier | null{
            // get identifier by id
            $result = $this->con->query("SELECT * FROM identifiers WHERE `identifier_id` = ".$identifier_id);
            $list = array();
            if($row = $result->fetch())
                return new Identifier($row["identifier_id"], $row["email"], $row["password"], $row["active"], $row["role"]);
            return null;  
        }

        /**
         * Summary of findByEmailAndPassword
         * @param string $email
         * @param string $password
         * @return Identifier | null
         */
        public function findByEmailAndPassword(string $email, string $password): Identifier | null{
            // get identifier by email and password (trying authetification)
            $result = $this->con->query("SELECT * FROM identifiers WHERE `email` = ".$identifier_id." AND `password` = ".$password);
            $list = array();
            if($row = $result->fetch())
                return new Identifier($row["identifier_id"], $row["email"], $row["password"], $row["active"], $row["role"]);
            return null;             
        }

        public function
    }


?>