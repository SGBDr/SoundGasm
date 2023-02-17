<?php
include_once("./api/utils/import.php");

   class PlaylistRepo{
    private PDO $con;

    public function __construct(){
        $this->con = PDO_N::getInstance();
    }

    /**
     * Récupère une playlist à partir de son identifiant.
     * @param int $id L'identifiant de la playlist.
     * @return Playlist|null La playlist correspondant à l'identifiant, ou null si aucune playlist n'a été trouvée.
     */
    public function findById(int $playlist_id): ?Playlist {
        $stmt = $this->con->query("SELECT * FROM playlists WHERE playlist_id = ". $playlist_id);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row == false)
            return null;
        $name = $row["name"];
        $user_id = $row["user_id"];

        $musics = array();
        $result = $this->con->query("SELECT m.music_id,m.name,m.rep_image,m.track,m.artist,m.style,m.country,m.release_date FROM musics m, music_playlist mp WHERE m.music_id = mp.music_id AND mp.playlist_id = ".$playlist_id);
        while($row = $result->fetch())
            array_push($musics, new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"], $row["style"], $row["country"], new DateTime($row["release_date"])));

        return new Playlist($playlist_id, $name, $user_id, $musics);
    }

    public function addSongIntoPlaylist(int $music_id, int $playlist_id){
        $stmt = $this->con->prepare("INSERT INTO music_playlist(music_id, playlist_id) VALUES(:music_id, :playlist_id)");
        return $stmt->execute(array(':playlist_id' => $playlist_id, ":music_id" => $music_id));
    }

    public function removeSongFromPlaylist(int $music_id, int $playlist_id){
        $stmt = $this->con->prepare("DELETE FROM music_playlist WHERE music_id = :music_id AND playlist_id = :playlist_id");
        return $stmt->execute(array(':playlist_id' => $playlist_id, ":music_id" => $music_id));
    }

    /**
     * Returns a PlayList object based on its name
     * @param string $name
     * @return Playlist|null
     */
    public function findByName(string $name): array{
        $playlists = array();
        $stmt = $this->con->query("SELECT * FROM playlists WHERE lower(name) Like '%".strtolower($name)."%'");
        while($row = $stmt->fetch())
            array_push($playlists, $this->findById($row["playlist_id"]));
        
        return $playlists;
    }
 
     /**
     * Récupère toutes les playlists.
     * @return array<Playlist> Toutes les playlists.
     */
    public function findOwnByUser(int $user_id): array {
        $stmt = $this->con->query("SELECT playlist_id FROM playlists WHERE user_id = ". $user_id);
        $playlists = array();
        while($row = $stmt->fetch(PDO::FETCH_ASSOC))
            array_push($playlists,$this->findById($row["playlist_id"]));

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
    public function save(string $name, int $user_id): ?Playlist{
        $stmt = $this->con->prepare("INSERT INTO playlists (name, user_id) VALUES (:name, :user_id)");
        $success = $stmt->execute(array(':name' => $name, ":user_id" => $user_id));
        if($success == false)
            return null;
        $playlist = new Playlist($this->con->lastInsertId(), $name, $user_id, array());
        return $playlist;
    }

    /**
     * Updates an existing PlayList in the database
     * @param PlayList $playlist
     * @return bool
     */
    public function update(string $name, int $playlist_id): bool{
        $stmt = $this->con->prepare("UPDATE playlists SET name = :name WHERE playlist_id = :playlist_id");
        return $stmt->execute(array(':name' => $name,':playlist_id' => $playlist_id));
    }
   }

?>