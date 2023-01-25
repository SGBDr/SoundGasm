<?php

    class User{
        private int $user_id;
        private string $name;
        private datetime $birthday;
        //object
        private Identifier $identifier;
        //list of object
        private array $like_musics;
        private array $playlists;
        private array $groups;

        /**
         * Summary of __construct
         * @param int $user_id
         * @param string $name
         * @param datetime $birthday
         * @param Identifier $identifiers
         * @param array $like_songs
         * @param array $playlists
         * @param array $groups
         */
        function __construct(int $user_id, string $name, datetime $birthday, Identifier $identifier, array $like_songs, array $playlists, array $groups){
            $this->user_id = $user_id;
            $this->name = $name;
            $this->birthday = $birthday;
            $this->identifier = $identifier;
            $this->like_musics = $like_songs;
            $this->playlists = $playlists;
            $this->groups = $groups;
        }

        public function getUser_id(): int{return $this->user_id;}
        public function getName(): string{return $this->name;}
        public function getBirthday(): datetime{return $this->birthday;}
        public function getIdentifier(): Identifier{return $this->identifier;}
        public function getLike_musics(): array{return $this->like_musics;}
        public function getPlaylists(): array{return $this->playlists;}
        public function getGroups(): array{return $this->groups;}

        public function setUser_id(int $user_id): void{$this->user_id = $user_id;}
        public function setName(string $name): void{$this->name = $name;}
        public function setBirthday(datetime $birthday): void{$this->birthday = $birthday;}
        public function setIdentifier(Identifier $identifier): void{$this->identifier = $identifier;}
        public function setLike_muscis(array $like_musics): void{$this->$like_musics = $like_musics;}
        public function setPlaylists(array $playlists): void{$this->playlists = $playlists;}
        public function setGroups(array $groups): void{$this->groups = $groups;}
    }


?>