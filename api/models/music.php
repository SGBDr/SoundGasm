<?php

    /**
     * $music_id
     * $name
     */
    public class Music{
        private $music_id;
        private $name;
        private $rep_image;
        private $track;
        private $artist;

        public __construct($music_id, $name, $rep_image, $track, $artist){
            $this->artist_id = $artist_id;
            $this->name = $name;
            $this->rep_image = $rep_image;
            $this->track = $track;
            $this->artist = $artist;
        }

        public function getMusic_id(){return $this->music_id;}
        public function getName(){return $this->name;}
        public function getRep_image(){return $this->rep_image;}
        public function getTrack(){return $this->track;}
        public function getArtist(){return $this->artist;}

        public function setMusic_id($music_id){$this->music_id = $music_id;}
        public function setEmail($name){$this->name = $name;}
        public function setRep_image($rep_image){$this->rep_image = $rep_image;}
        public function setTrack($track){$this->track = $track;}
        public function setArtist(){return $this->artist = $artist;}
    }


?>