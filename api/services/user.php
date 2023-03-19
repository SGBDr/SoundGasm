<?php
    include_once("./api/utils/import.php");


    class UserServ {
        private UserRepo $userRepo; 
        private IdentifierRepo $identifierRepo;

      
        public function __construct() {
          $this->identifierRepo = new IdentifierRepo();
          $this->userRepo = new UserRepo();
        }

        public function add($name, $birthday, $identifier_id){
            return $this->userRepo->addUser($name, $birthday, $identifier_id);
        }
    }


?>