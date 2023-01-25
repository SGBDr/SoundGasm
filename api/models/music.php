<?php

    class Music{
        private int $music_id;
        private string $name;
        private string $rep_image;
        private string $track;
        private string $artist;

        /**
         * Summary of __construct
         * @param int $music_id
         * @param string $name
         * @param string $rep_image
         * @param string $track
         * @param string $artist
         */
        function __construct(int $music_id, string $name, string $rep_image, string $track, string $artist){
            $this->music_id = $music_id;
            $this->name = $name;
            $this->rep_image = $rep_image;
            $this->track = $track;
            $this->artist = $artist;
        }

        public function getMusic_id(): int{return $this->music_id;}
        public function getName(): string{return $this->name;}
        public function getRep_image(): string{return $this->rep_image;}
        public function getTrack(): string{return $this->track;}
        public function getArtist(): string{return $this->artist;}

        public function setMusic_id(int $music_id): void{$this->music_id = $music_id;}
        public function setEmail(string $name): void{$this->name = $name;}
        public function setRep_image(string $rep_image): void{$this->rep_image = $rep_image;}
        public function setTrack(string $track): void{$this->track = $track;}
        public function setArtist(string $artist): void{$this->artist = $artist;}
    }


?>