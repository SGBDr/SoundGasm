<?php

    class Artist{
        private int $artist_id;
        private string $name;

        /**
         * Summary of __construct
         * @param int $artist_id
         * @param string $name
         */
        function __construct(int $artist_id, string $name){
            $this->artist_id = $artist_id;
            $this->name = $name;
        }

        //return the Json form of this object
        public function json(): array{
            $se = [
                "artist_id" => $this->artist_id,
                "name" => $this->name
            ];
            return $se;
        }

        public function getArtist_id(): int{return $this->artist_id;}
        public function getName(): string{return $this->name;}

        public function setArtist_id(int $artist_id): void{$this->artist_id = $artist_id;}
        public function setEmail(string $name): void{$this->name = $name;}
    }

?>