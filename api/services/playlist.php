<?php
    include_once("./repositories/playlist.php");

    class PlaylistServ{
        private PlaylistRepo $playlistRepo;

        public function __construct(){
            $this->playlistRepo = new PlaylistRepo();
        }

        public function getById(int $playlist_id){
            $re = $this->playlistRepo->findById($playlist_id);
            return $re == null ? "" : $re->json();
        }

        public function getByName(int $name){
            $playlists = array();
            foreach ($this->playlistRepo->findByName($name) as $key => $value)
                array_push($playlists, $value->json());
            return $playlists;
        } 



    }

?>