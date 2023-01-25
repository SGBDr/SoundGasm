<?php

    class Music{
        private int $music_id;
        private string $name;
        private string $rep_image;
        // is the reference of this object (UNIQUE)
        private string $track;
        private string $artist;
        private string $style;
        private string $country;
        private datetime $release_date;

        /**
         * Summary of __construct
         * @param int $music_id
         * @param string $name
         * @param string $rep_image
         * @param string $track
         * @param string $artist
         * @param string $style
         * @param string $country
         * @param datetime release_date
         */
        function __construct(int $music_id, string $name, string $rep_image, string $track, string $artist, string $style, string $country, datetime $release_date){
            $this->music_id = $music_id;
            $this->name = $name;
            $this->rep_image = $rep_image;
            $this->track = $track;
            $this->artist = $artist;
            $this->style = $style;
            $this->country = $country;
            $this->release_date = $release_date;
        }

        public function getMusic_id(): int{return $this->music_id;}
        public function getName(): string{return $this->name;}
        public function getRep_image(): string{return $this->rep_image;}
        public function getTrack(): string{return $this->track;}
        public function getArtist(): string{return $this->artist;}
        public function getStyle(): string{return $this->style;}
        public function getCountry(): string{return $this->country;}
        public function getRelease_date(): datetime{return $this->release_date;}

        public function setMusic_id(int $music_id): void{$this->music_id = $music_id;}
        public function setEmail(string $name): void{$this->name = $name;}
        public function setRep_image(string $rep_image): void{$this->rep_image = $rep_image;}
        public function setTrack(string $track): void{$this->track = $track;}
        public function setArtist(string $artist): void{$this->artist = $artist;}
        public function setStyle(string $style): void{$this->style = $style;}
        public function setCountry(string $country): void{$this->country = $country;}
        public function setRelease_date(datetime $release_date): void{$this->release_date = $release_date;}
    }


?>