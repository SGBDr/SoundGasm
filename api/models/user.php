<?php

    public class User{
        private $user_id;
        private $name;
        private $birthday;
        //list of elements that compose User
        private $identifiers;
        private $like_musics;
        private $playlists;
        private $groups;

        public __construct($user_id, $name, $birthday, $identifiers, $like_songs, $playlists, $groups){
            $this->user_id = $user_id;
            $this->name = $name;
            $this->birthday = $birthday;
            $this->identifiers = $identifiers;
            $this->like_musics = $like_songs;
            $this->playlists = $playlists;
            $this->groups = $groups;
        }

        public function getUser_id(){return $this->user_id;}
        public function getName(){return $this->name;}
        public function getBirthday(){return $this->birthday;}
        public function getIdentifiers(){return $this->identifiers;}
        public function getLike_musics(){return $this->$like_musics;}
        public function getPlaylists(){return $this->playlists;}

        public function setUser_id($user_id){$this->user_id = $user_id;}
        public function setName($name){$this->name = $name;}
        public function setBirthday($birthday){$this->birthday = $birthday;}
        public function setIdentifiers($identifiers){$this->identifiers = $identifiers;}
        public function setLike_muscis($like_musics){$this->$like_musics = $like_musics;}
        public function setPlaylists($playlists){$this->playlists = $playlists;}
    }


?>