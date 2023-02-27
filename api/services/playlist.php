<?php
include_once("./api/utils/import.php");

    class PlaylistServ{
        private PlaylistRepo $playlistRepo;

        public function __construct(){
            $this->playlistRepo = new PlaylistRepo();
        }

        public function getById(int $playlist_id){
            $re = $this->playlistRepo->findById($playlist_id);
            return $re == null ? "" : $re->json();
        }

        public function getByName(string $name, $user_id){
            $playlists = array();
            foreach ($this->playlistRepo->findByName($name, $user_id) as $key => $value)
                array_push($playlists, $value->json());
            return $playlists;
        }

        public function getByOwner(int $user_id){
            $playlists = array();
            foreach ($this->playlistRepo->findOwnByUser($user_id) as $key => $value)
                array_push($playlists, $value->json());
            return $playlists;
        }

        public function addSong(int $music_id, int $playlist_id){
            return $this->playlistRepo->addSongIntoPlaylist($music_id, $playlist_id);
        }

        public function removeSong(int $music_id, int $playlist_id){
            return $this->playlistRepo->removeSongFromPlaylist($music_id, $playlist_id);
        }

        public function add(string $name, int $user_id){
            $playlist = $this->playlistRepo->save($name, $user_id);
            return $playlist == null ? null : $playlist->json();
        }

        public function update(string $name, int $playlist_id){
            return $this->playlistRepo->update($name, $playlist_id);
        }

    }

?>