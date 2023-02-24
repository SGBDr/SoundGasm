<?php
    include_once("./api/utils/import.php");

    class TokenRepo {
        private PDO $con; 
      
        public function __construct() {
          $this->con = PDO_N::getInstance();
        }

        public function addToken(int $user_id, string $email, string $ip){
            $token = "TOKEN_" + sha1(rand(1, 100) + $email + rand(1, 100));
            $stmt = $this->con->prepare('INSERT INTO tokens(token, ip, user_id, create_time) VALUES(:token,:ip,:user_id,:create_time)');
            if($stmt->execute(array(':token' => $token, ':ip' => $ip, ':user_id' => $user_id, ":create_time" => new datetime()->format("Y-m-d"))))
                return $token;
            else 
                return "";
        }

        public function verifyToken(string $token, string $ip){
            $stmt = $this->con->query("SELECT * FROM tokens WHERE token = '".$token."' AND ip = '".$ip."'");
            $re = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if (count($re) > 0)
              return $re[0]["user_id"];
            else{
                $stmt = $this->con->prepare("DELETE FROM tokens WHERE token = :token OR ip = :ip");
                $stmt->execute(array(":token" => $token, ":ip" => $ip));
                return null;
            }
        }

        public function removeToken(string $token, string $ip){
            $stmt = $this->con->prepare("DELETE FROM tokens WHERE token = :token AND ip = :ip");
            return $stmt->execute(array(":token" => $token, ":ip" => $ip));
        }

    }

?>