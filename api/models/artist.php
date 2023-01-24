<?php

    /**
     * $artist_id
     * $name
     */
    public class Artist{
        private $artist_id;
        private $name;

        public __construct($artist_id, $name){
            $this->artist_id = $artist_id;
            $this->name = $name;
        }

        public function getArtist_id(){return $this->artist_id;}
        public function getName(){return $this->name;}

        public function setArtist_id($artist_id){$this->artist_id = $artist_id;}
        public function setEmail($name){$this->name = $name;}
    }


?>