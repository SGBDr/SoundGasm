<?php
include_once("./api/utils/import.php");

    class MusicServ{
        private MusicRepo $musicRepo;
        private ArtistRepo $artistRepo;

        public function __construct(){
            $this->musicRepo = new MusicRepo();
            $this->artistRepo = new ArtistRepo();
        }

        public function getAll(){
            $list = array();
            foreach($this->musicRepo->findAll() as $key => $value)
                array_push($list, $value->json());
            return $list;
        }

        public function getLikeSong(int $user_id){
            $list = array();
            foreach($this->musicRepo->findLikeSongOfUser($user_id) as $key => $value)
                array_push($list, $value->json());
            return $list;
        }

        public function LikeSong(int $music_id, int $user_id){
            return $this->musicRepo->likeSong($music_id, $user_id);
        }

        public function unLikeSong(int $music_id, int $user_id){
            return $this->musicRepo->unLikeSong($music_id, $user_id);
        }

        public function getById(int $music_id){
            $music = $this->musicRepo->findById($music_id);
            return $music == null ? null : $music->json();
        }

        public function feedDataBase(string $chr): void{
            $url = "https://itunes.apple.com/search?limit=100&term=" . str_replace("%20", " ", $chr);
            $raw = file_get_contents($url);
            $json = json_decode($raw);
            foreach ($json->results as $key => $music) {
                if($music->wrapperType == "track"){
                    if($music->kind == "song"){
                        if($this->artistRepo->findByIdAndName($music->artistId, $music->artistName) == null)
                            $this->artistRepo->save($music->artistName, $music->artistId);
                        
                        if($this->musicRepo->findById($music->trackId) == null)
                            $this->musicRepo->save(new Music($music->trackId, $music->trackName, $music->artworkUrl100, $music->previewUrl, $music->artistName, $music->primaryGenreName, $music->country, new DateTime($music->releaseDate)));
                    }
                }
            }
        }

        public function findByNameOrArtist(string $chr){
            $list = array();
            foreach($this->musicRepo->findMusicByNameOrArtist(str_replace("%20", " ", $chr)) as $key => $value)
                array_push($list, $value->json());
            if(count($list) <= 15)
                $this->feedDataBase($chr);
            return $list;
        }



    }


?>