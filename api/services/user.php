<?php
    include_once("./api/utils/import.php");


    class UserServ {
        private UserRepo $userRepo; 
        private IdentifierRepo $identifierRepo;

      
        public function __construct() {
          $this->userRepo = new UserRepo();
          $this->identifierRepo = new IdentifierRepo();
          $this->userRepo = new UserRepo();
        }
    }


?>