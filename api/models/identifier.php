<?php

    /**
     * $identifier_id
     * $$email
     * $password -- encrypted with sha1 function
     * $active
     * $role -- [ADMIN - USER]
     */
    public class Identifier{
        private $identifier_id;
        private $email;
        private $password;
        private $active;
        private $role;

        public __construct($identifier_id, $email, $password, $active, $role){
            $this->identifier_id = $identifier_id;
            $this->email = $email;
            $this->password = $password;
            $this->active = $active;
            $this->role = $role;
        }

        public function getIdentifier_id(){return $this->identifier_id;}
        public function getEmail(){return $this->email;}
        public function getPassword(){return $this->password;}
        public function getActive(){return $this->active;}
        public function getRole(){return $this->role;}

        public function setIdentifier_id($identifier_id){$this->identifier_id = $identifier_id;}
        public function setEmail($email){$this->email = $email;}
        public function setPassword($password){$this->password = sha1($password);}
        public function setActive($active){$this->active = $active;}
        public function setRole($role){$this->role = $role;}
}


?>