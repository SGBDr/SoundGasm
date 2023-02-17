<?php
include_once("./api/utils/import.php");
//OKK
    class MusicRepo {
        private PDO $con;

        function __construct(){
            $this->con = PDO_N::getInstance();
        }

        /**
         * Summary of findAll
         * @return array<Music>
         */
        public function findAll(): array{
            // get all musics dispo
            $result = $this->con->query("SELECT * FROM musics");
            $list = array();
            while($row = $result->fetch())
                array_push($list, new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"], $row["style"], $row["country"], new DateTime(($row["release_date"]))));
            return $list;
        }

        public function findLikeSongOfUser(int $user_id): array{
            $result = $this->con->query("SELECT music_id FROM like_music WHERE user_id = " . $user_id);
            $musics = array();
            while($row = $result->fetch()){
                $result = $this->con->query("SELECT * FROM musics WHERE music_id = " . $row["music_id"]);
                if($row = $result->fetch())
                    array_push($musics, new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"], $row["style"], $row["country"], new DateTime(($row["release_date"]))));
            }
            return $musics;
        }

        public function likeSong(int $music_id, int $user_id){
            $stmt = $this->con->prepare("INSERT INTO like_music(user_id,music_id) VALUES(:user_id,:music_id)");
            $stmt->bindValue(':music_id', $music_id);
            $stmt->bindValue(':user_id', $user_id);
            return $stmt->execute();
        }

        public function unLikeSong(int $music_id, int $user_id){
            $stmt = $this->con->prepare("DELETE like_music WHERE user_id = :user_id AND music_id = :music_id");
            $stmt->bindValue(':music_id', $music_id);
            $stmt->bindValue(':user_id', $user_id);
            return $stmt->execute();
        }

        /**
         * summary of findById
         * @param int $music_id
         * @return Music | null
         */
        public function findById(int $music_id): ?Music{
            // get music by id
            $result = $this->con->query("SELECT * FROM musics WHERE music_id = " . $music_id);
            $list = array();
            if($row = $result->fetch())
               return new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"], $row["style"], $row["country"], new DateTime($row["release_date"]));
            
            return null;
        }

        /**
         * Summary of findMusicByNameOrArtist
         * @param string $artistORname
         * @return array<Music>
         */
        public function findMusicByNameOrArtist(string $chr): array{
            // get music with param config
            $result = $this->con->query("SELECT * FROM musics WHERE LOWER(name) LIKE '%".strtolower($chr)."%' OR LOWER(artist) LIKE '%".strtolower($chr)."%'");
            $list = array();
            while($row = $result->fetch())
                array_push($list, new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"], $row["style"], $row["country"], new DateTime($row["release_date"])));
            return $list;        
        }

        /**
         * Summary of deletMusic
         * @param int $music_id
         * @return bool
         */
        public function deleteMusic(int $music_id): bool{
            // remove some music in table
            $stmt = $this->con->prepare("DELETE FROM musics WHERE music_id = :music_id");
            $stmt->bindValue(':music_id', $music_id);
            return $stmt->execute(array(":music_id" => $music_id));
        }

        /**
         * Summary of addMusic
         * @param Music $music
         * @return Music | null
         */
        public function save(Music $music): ?Music{
            $stmt = $this->con->prepare("INSERT INTO musics(music_id,name,rep_image,track,artist,style,country,release_date) VALUES(:music_id, :name, :rep_image, :track, :artist, :style, :country, :release_date)");
            $stmt->bindValue(':music_id', $music->getMusic_id());
            $stmt->bindValue(':name', $music->getName());
            $stmt->bindValue(':rep_image', $music->getRep_image());
            $stmt->bindValue(':track', $music->getTrack());
            $stmt->bindValue(':artist', $music->getArtist());
            $stmt->bindValue(':style', $music->getStyle());
            $stmt->bindValue(':country', $music->getCountry());
            $stmt->bindValue(':release_date', $music->getRelease_date()->format("Y-m-d"));
            if($stmt->execute()){
                $music->setMusic_id($this->con->lastInsertId());
                return $music;
            }
            return null;
        }

        /**
         * Summary of updateMusic
         * @param Music $music
         * @return bool
         */
        public function updateMusic($music): bool{
            // update music in param from table
            $stmt = $this->con->prepare("UPDATE musics SET name = :name AND rep_image = :rep_image AND track = :track AND artist = :artist AND style = :style AND country = :country AND release_date = :release_date WHERE music_id = :music_id");
            $stmt->bindValue(':name', $music->getName());
            $stmt->bindValue(':rep_image', $music->getRep_image());
            $stmt->bindValue(':track', $music->getTrack());
            $stmt->bindValue(':artist', $music->getArtist());
            $stmt->bindValue(':music_id', $music->getMusic_id());
            $stmt->bindValue(':style', $music->getStyle());
            $stmt->bindValue(':country', $music->getCountry());
            $stmt->bindValue(':release_date', $music->getRelease_date());
            return $stmt->execute();
        }

    }



?>