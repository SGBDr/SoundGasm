<?php
include_once("./api/utils/import.php");
//OKK

    class IdentifierRepo{
        private PDO $con;

        function __construct(){
            $this->con = PDO_N::getInstance();
        }

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
            $result = $this->con->query("SELECT * FROM identifiers WHERE identifier_id = ".$identifier_id);
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
            $password = sha1($password);
            $result = $this->con->query("SELECT * FROM identifiers WHERE email = '".$email."' AND password = '".$password."'");
            if($row = $result->fetch())
                return new Identifier($row["identifier_id"], $row["email"], "*******", $row["active"], $row["role"]);
            return null;             
        }
        /**
         * Summary of findByEmail
         * @param string $email
         * @return Identifier | null
         */
        public function findByEmail(string $email): Identifier | null{
            // get identifier by email (trying authetification)
            $result = $this->con->query("SELECT * FROM identifiers WHERE email = '".$email."''");
            if($row = $result->fetch())
                return new Identifier($row["identifier_id"], $row["email"], "*******", $row["active"], $row["role"]);
            return null;             
        }


        /**
         * Summary of update
         * @param Identifier $identifier
         * @return bool
         */
        public function updateWithPassword(Identifier $identifier): bool{
            $stmt = $this->con->prepare("UPDATE identifiers SET email = :email AND password = :password AND active = :active AND role = :role WHERE identifier_id = :identifier_id");
            $stmt->bindValue(':email', $identifier->getEmail());
            $stmt->bindValue(':password', sha1($identifier->getPassword()));
            $stmt->bindValue(':active', $identifier->getActive());
            $stmt->bindValue(':role', $identifier->getRole());
            $stmt->bindValue(':identifier_id', $identifier->getIdentifier_id());
            return $stmt->execute();
        }

                /**
         * Summary of update
         * @param Identifier $identifier
         * @return bool
         */
        public function updateWithOutPassword(Identifier $identifier): bool{
            $stmt = $this->con->prepare("UPDATE identifiers SET email = :email AND active = :active AND role = :role WHERE identifier_id = :identifier_id");
            $stmt->bindValue(':email', $identifier->getEmail());
            $stmt->bindValue(':active', $identifier->getActive());
            $stmt->bindValue(':role', $identifier->getRole());
            $stmt->bindValue(':identifier_id', $identifier->getIdentifier_id());
            return $stmt->execute();
        }

        /**
         * Summary of add
         * @param string $email
         * @param string $password
         * @return Identifier | null
         */
        public function save(string $email,string $password): Identifier | null{
            $stmt = $this->con->prepare("INSERT INTO musics(email,password,active,role) VALUES(:email, :password, :active, :role)");
            $stmt->bindValue(':email', $email);
            $stmt->bindValue(':password', sha1($password));
            $stmt->bindValue(':active', 1);
            $stmt->bindValue(':role', "USER");
            if($stmt->execute()){
                $identifier=new Identifier($this->con->lastInsertId(),$email,$password,1,"USER");
                return $identifier;
            }
            return null;
        }

        /**
         * summary of updateActive
         * @param int $identifier_id
         * @param bool $value
         * @return bool
         */
        public function updateActive(int $identifier_id, bool $value): bool{
            $stmt = $this->con->prepare("UPDATE identifiers SET active = :active WHERE identifier_id = :identifier_id");
            $stmt->bindValue(':active', $value);
            $stmt->bindValue(':identifier_id', $identifier_id);
            return $stmt->execute();
        }


    }


?>