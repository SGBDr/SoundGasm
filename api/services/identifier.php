<?php
include_once("./api/utils/import.php");

    class IdentifierServ{
        private IdentifierRepo $identifierRepo;

        public function __construct(){
            $this->identifierRepo = new IdentifierRepo();
        }

        public function getAll(){
            $list = array();
            foreach ($this->identifierRepo->findAll() as $key => $value)
                array_push($list, $value->json());
            return $list;
        }

        public function getByEmailAndPassword(string $email, string $password){
            $identifier = $this->identifierRepo->findByEmailAndPassword($email, $password);
            return $identifier == null ? null : $identifier->json();
        }
        public function getByEmail(string $email){
            $identifier = $this->identifierRepo->findByEmail($email);
            return $identifier == null ? null : $identifier->json();
        }

        public function update(Identifier $identifier){
            if($identifier->getPassword() == "*")
                return $this->identifierRepo->updateWithOutPassword($identifier);
            else 
                return $this->identifierRepo->updateWithPassword($identifier);
        }

        public function updateActive(int $identifier_id, bool $value){
            return $this->identifierRepo->updateActive($identifier_id, $value);
        }

        public function add(string $email,string $password){
            return $this->identifierRepo->save($email,$password);
        }


    }




?>