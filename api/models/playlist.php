<?php


    public class PlayList{
        private $playlist_id;
        private $name;
        private $musics;

        public __construct($playlist_id, $name, $musics){
            $this->playlist_id = $playlist_id;
            $this->name = $name;
            $this->musics = $musics;
        }

        public function getPlaylist_id(){return $this->playlist_id;}
        public function getName(){return $this->name;}
        public function getMusics(){return $this->musics;}

        public function setPlaylist_id($playlist_id){$this->playlist_id = $playlist_id;}
        public function setName($name){$this->name = $name;}
        public function setMusics($musics){$this->musics = $musics;}
    }



?>