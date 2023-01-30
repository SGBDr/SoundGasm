<?php

    class Identifier{
        private int $identifier_id;
        private string $email;
        private string $password;
        private bool $active;
        private string $role;

        /**
         * Summary of __construct
         * @param int $identifier_id
         * @param string $email
         * @param string $password
         * @param bool $active
         * @param string $role -- ["USER", "ADMIN"]
         */
        function __construct(int $identifier_id, string $email, string $password, bool $active, string $role){
            $this->identifier_id = $identifier_id;
            $this->email = $email;
            $this->password = $password;
            $this->active = $active;
            $this->role = $role;
        }

        public function json(): array{
            $se = [
                "identifier_id" => $this->identifier_id,
                "email" => $this->email,
                "password" => $this->password,
                "active" => $this->active,
                "role" => $this->role
            ];
            return $se;
        }

        public function getIdentifier_id(): int{return $this->identifier_id;}
        public function getEmail(): string{return $this->email;}
        public function getPassword(): string{return $this->password;}
        public function getActive(): bool{return $this->active;}
        public function getRole(): string{return $this->role;}

        public function setIdentifier_id(int $identifier_id): void{$this->identifier_id = $identifier_id;}
        public function setEmail(string $email): void{$this->email = $email;}
        public function setPassword(string $password): void{$this->password = sha1($password);}
        public function setActive(bool $active): void{$this->active = $active;}
        public function setRole(string $role): void{$this->role = $role;}
}


?>