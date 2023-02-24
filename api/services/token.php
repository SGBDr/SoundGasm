<?php
    include_once("./api/utils/import.php");


    class TokenServ {
        private TokenRepo $tokenRepo; 
        private UserRepo $userRepo;
      
        public function __construct() {
          $this->tokenRepo = new TokenRepo();
          $this->userRepo = new UserRepo();
        }

        public function isAuth(string $token, string $ip){
            $user_id = $this->tokenRepo->verifyToken($token, $ip);
            if($user_id != null)
                return [true, $user_id];
            else return [false, 0];
        }

        public function logOut(string $token, string $ip){
            return $this->tokenRepo->removeToken($token, $ip);
        }

        public function logIn(string $password, string $email, $ip){
            $user = $this->userRepo->findByEmailAndPassword($email, $password);
            if($user == null)
                return "false";
            else{
                $token = $this->tokenRepo->addToken($user->getUser_id(), $user->getEmail(), $ip);
                if($token == "")
                    return "false";
                else
                    return $token;
            }
        }

    }


?>