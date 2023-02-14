<?php
    include_once("./repositories/artist.php");

    class ArtistServ{

        private ArtistRepo $artistRepo;

        function __contruct(){
            $this->artistRepo = new ArtistRepo();
        }

        public function getAll(): array {
            $artists = array();
            foreach ($this->artistRepo->findAll() as $key => $value)
                array_push($artists, $value->json());
            return $artists;
        }

        public function add(string $name){
            return $this->artistRepo->save($name);
        }

        public function delete(int $artist_id){
            return $this->artistRepo->delete($artist_id);
        }

        public function delete(Artist $artist){
            return $this->artistRepo->delete($artist);
        }

    }



?>