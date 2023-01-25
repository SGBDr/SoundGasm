<?php
    include_once("./../db/pdo.php");
    include_once("./../models/music.php");

    class MusicRepo {
        private PDO $con = PDO_N::getInstance();

        function __construct(){}

        /**
         * Summary of findAll
         * @return array<Music>
         */
        public function findAll(): array{
            // get all musics dispo
            $result = $this->con->query("SELECT * FROM musics");
            $list = array();
            while($row = $result->fetch())
                array_push($list, new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"]));
            return $list;
        }

        /**
         * Summary of findMusicByNameOrArtist
         * @param mixed $artistORname
         * @return array<Music>
         */
        public function findMusicByNameOrArtist(string $artistORname): array{
            // get music with param config
            $result = $this->con->query("SELECT * FROM musics WHERE `name` LIKE `%".$artistORname."%` OR `artist` LIKE `%".$artistORname."%`");
            $list = array();
            while($row = $result->fetch())
                array_push($list, new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"]));
            return $list;        
        }

        /**
         * Summary of deletMusic
         * @param mixed $music_id
         * @return bool
         */
        public function deletMusic($music_id): bool{
            // remove some music in table
            $stmt = $this->con->prepare("DELETE FROM musics WHERE `music_id` = :music_id");
            $stmt->bindValue(':music_id', $music_id);
            return $stmt->execute();
        }

        /**
         * Summary of addMusic
         * @param Music $music
         * @return Music
         */
        public function addMusic(Music $music): Music{
            $stmt = $this->con->prepare("INSERT INTO musics(`name`,`rep_image`,`track`,`artist`) VALUES(:name, :rep_image, :track, :artist)");
            $stmt->bindValue(':name', $music->getName());
            $stmt->bindValue(':rep_image', $music->getRep_image());
            $stmt->bindValue(':track', $music->getTrack());
            $stmt->bindValue(':artist', $music->getArtist());
            if($stmt->execute()){
                $music->setMusic_id($this->con->lastInsertId());
                return $music;
            }
            return null;
        }

        /**
         * Summary of updateMusic
         * @param mixed $music
         * @return bool
         */
        public function updateMusic($music){
            // update music in param from table
            $stmt = $this->con->prepare("UPDATE musics SET `name` = :name AND `rep_image` = :rep_image AND `track` = :track AND `artist` = :artist WHERE `music_id` = :music_id");
            $stmt->bindValue(':name', $music->getName());
            $stmt->bindValue(':rep_image', $music->getRep_image());
            $stmt->bindValue(':track', $music->getTrack());
            $stmt->bindValue(':artist', $music->getArtist());
            $stmt->bindValue(':music_id', $music->getMusic_id());
            return $stmt->execute();
        }

    }



?>