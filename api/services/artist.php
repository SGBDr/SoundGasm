<?php
include_once("./api/utils/import.php");

    class ArtistServ{

        private ArtistRepo $artistRepo;

        public function __construct(){
            $this->artistRepo = new ArtistRepo();
        }

        public function getAll(): array {
            $artists = array();
            foreach ($this->artistRepo->findAll() as $key => $value)
                array_push($artists, $value->json());
            return $artists;
        }

        public function addPreference(int $user_id, int $artist_id){
            return $this->artistRepo->addPreference($user_id, $artist_id);
        }

        public function removePreference(int $user_id, int $artist_id){
            return $this->artistRepo->removePreference($user_id, $artist_id);
        }

        public function delete(int $artist_id){
            return $this->artistRepo->delete($artist_id);
        }

    }



?>