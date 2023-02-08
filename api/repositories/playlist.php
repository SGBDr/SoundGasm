<?php

   include_once("./db/pdo.php");
   include_once("./models/playlist.php");

   class PlayListRepo{
    private PDO $con = PDO_N::getInstance();

    public function __construct(){}

    /**
     * Récupère une playlist à partir de son identifiant.
     * @param int $id L'identifiant de la playlist.
     * @return PlayList|null La playlist correspondant à l'identifiant, ou null si aucune playlist n'a été trouvée.
     */
    public function findById(int $playlist_id): PlayList {
        $stmt = $this->con->prepare("SELECT * FROM playlists WHERE playlist_id = :playlist_id");
        $stmt->execute(array(':playlist_id' => $playlist_id));
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row == false)
            return null;
        $name = $row["name"];
        $user_id = $row["user_id"];

        $musics = array();
        $stmt = $this->con->prepare("SELECT m.music_id,m.name,m.rep_image,m.track,m.artist,m.style,m.country,m.release_date FROM m musics, mp playlist WHERE m.music_id = mp.music_id AND mp.playlist_id = :playlist_id");
        $result = $stmt->execute(array(":playlist_id" => $playlist_id))
        while($row = $result->fetch())
            array_push($musics, new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"], $row["style"], $row["country"], new DateTime($row["release_date"])))

        return new PlayList($playlist_id, $name, $user_id, $musics);
    }

    /**
     * Returns a PlayList object based on its name
     * @param string $name
     * @return PlayList|null
     */
    public function findByName(string $name): ?PlayList{
        $stmt = $this->con->prepare("SELECT * FROM playlists WHERE name = :name");
        $stmt->execute(array(':name' => $name));
        $row = $stmt->fetch();

        if($row == false)
            return null;
        
        return $this->findById($row["playlist_id"]);
    }
 
     /**
     * Récupère toutes les playlists.
     * @return array<PlayList> Toutes les playlists.
     */
    public function findOwnByUser(int $user_id): array {
        $stmt = $this->con->prepare("SELECT playlist_id FROM playlists WHERE user_id = :user_id");
        $stmt->execute(array(":user_id" => $user_id));
        
        $playlists = [];
        while($row = $stmt->fetch(PDO::FETCH_ASSOC))
            array_push($this->findById($row["playlist_id"]));

        return $playlists;
    }

    /**
     * Deletes a PlayList based on its id
     * @param int $playlist_id
     * @return bool
     */
    public function delete(int $playlist_id): bool{
        $s1 = $this->con->prepare("DELETE FROM music_playlist WHERE playlist_id = :playlist_id");
        $s2 = $this->con->prepare("DELETE FROM playlists WHERE playlist_id = :playlist_id");
        $array = array(':playlist_id' => $playlist_id);
        return $s1->execute($array) && $s2->execute($array);
    }

    /**
     * Creates a new PlayList in the database
     * @param PlayList $playlist
     * @return bool
     */
    private function save(PlayList $playlist): bool{
        $stmt = $this->con->prepare("INSERT INTO playlists (name, user_id) VALUES (:name, user_id)");
        $success = $stmt->execute(array(':name' => $playlist->getName(), ":user_id" => $playlist->getUser_id()));
        if($success == false)
            return false;
        
        $playlist->setPlaylist_id($this->con->lastInsertId());
        return $playlist;
    }

    /**
     * Updates an existing PlayList in the database
     * @param PlayList $playlist
     * @return bool
     */
    private function update(PlayList $playlist): bool{
        $stmt = $this->con->prepare("UPDATE playlists SET name = :name WHERE playlist_id = :playlist_id");
        return $stmt->execute(array(':name' => $playlist->getName(),':playlist_id' => $playlist->getPlaylist_id()));
    }
   }

?>