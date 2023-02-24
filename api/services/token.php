<?php
    include_once("./api/utils/import.php");


    class TokenServ {
        private TokenRepo $tokenRepo; 
        private IdentifierRepo $identifierRepo;
        private UserRepo $userRepo;
      
        public function __construct() {
          $this->tokenRepo = new TokenRepo();
          $this->identifierRepo = new IdentifierRepo();
          $this->userRepo = new UserRepo();
        }

        public function isAuth(string $token){
            $user_id = $this->tokenRepo->verifyToken($token);
            if($user_id != null)
                return [true, $user_id];
            else return [false, 0];
        }

        public function logOut(int $user_id){
            return $this->tokenRepo->removeToken($user_id);
        }

        public function logIn(string $password, string $email){
            $identifier = $this->identifierRepo->findByEmailAndPassword($email, $password);
            if($identifier == null)
                return "false";
            else{
                $token = $this->tokenRepo->addToken($this->userRepo->getUser_idByIdentifier_id($identifier->getIdentifier_id()), $identifier->getEmail());
                if($token == "")
                    return "false";
                else
                    return $token;
            }
        }

    }


?>