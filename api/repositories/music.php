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
                array_push($list, new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"], $row["style"], $row["country"], $row["release_date"]));
            return $list;
        }

        /**
         * summary of findById
         * @param int $music_id
         * @return Music | null
         */
        public function findById(int $music_id): Music | null{
            // get music by id
            $result = $this->con->query("SELECT * FROM musics WHERE music_id = " . $music_id);
            $list = array();
            if($row = $result->fetch()){
               return new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"], $row["style"], $row["country"], $row["release_date"]);
            }
            return null;
        }

        /**
         * Summary of findMusicByNameOrArtist
         * @param string $artistORname
         * @return array<Music>
         */
        public function findMusicByNameOrArtist(string $artistORname): array{
            // get music with param config
            $result = $this->con->query("SELECT * FROM musics WHERE `name` LIKE `%".$artistORname."%` OR `artist` LIKE `%".$artistORname."%`");
            $list = array();
            while($row = $result->fetch())
            array_push($list, new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"], $row["style"], $row["country"], $row["release_date"]));
            return $list;        
        }

        /**
         * Summary of deletMusic
         * @param int $music_id
         * @return bool
         */
        public function deleteMusic($music_id): bool{
            // remove some music in table
            $stmt = $this->con->prepare("DELETE FROM musics WHERE `music_id` = :music_id");
            $stmt->bindValue(':music_id', $music_id);
            return $stmt->execute();
        }

        /**
         * Summary of addMusic
         * @param Music $music
         * @return Music | null
         */
        public function addMusic(Music $music): Music | null{
            $stmt = $this->con->prepare("INSERT INTO musics(`name`,`rep_image`,`track`,`artist`,`style`,`country`,`release_date`) VALUES(:name, :rep_image, :track, :artist, :style, :country, :release_date)");
            $stmt->bindValue(':name', $music->getName());
            $stmt->bindValue(':rep_image', $music->getRep_image());
            $stmt->bindValue(':track', $music->getTrack());
            $stmt->bindValue(':artist', $music->getArtist());
            $stmt->bindValue(':style', $music->getStyle());
            $stmt->bindValue(':country', $music->getCountry());
            $stmt->bindValue(':release_date', $music->getRelease_date());
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
            $stmt = $this->con->prepare("UPDATE musics SET `name` = :name AND `rep_image` = :rep_image AND `track` = :track AND `artist` = :artist AND `style` = :style AND `country` = :country AND `release_date` = :release_date WHERE `music_id` = :music_id");
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