<?php

   include_once("./../db/pdo.php");
   include_once("./../models/music.php");

   class PlayListRepo{
    private PDO $con = PDO_N::getInstance();

    public function __construct(){
   
    }

        /**
     * Récupère une playlist à partir de son identifiant.
     * @param int $id L'identifiant de la playlist.
     * @return PlayList|null La playlist correspondant à l'identifiant, ou null si aucune playlist n'a été trouvée.
     */
    public function findById(int $id): ?PlayList {
        $stmt = $this->connection->prepare("SELECT * FROM playlists WHERE playlist_id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $row = $stmt->fetch(\PDO::FETCH_ASSOC);

        if ($row === false) {
            return null;
        }

        $musics = [];
        // Récupérer les musiques associées à la playlist à partir de la source de données
        // ...

        return new PlayList($row['playlist_id'], $row['name'], $musics);
    }

    /**
     * Returns a PlayList object based on its name
     * @param string $name
     * @return PlayList|null
     */
    public function findByName(string $name): ?PlayList{
        $stmt = $this->pdo->prepare("SELECT * FROM playlists WHERE name = :name");
        $stmt->execute([
            'name' => $name
        ]);
        $result = $stmt->fetch();
        if($result === false){
            return null;
        }
        $musics = MusicRepo::getInstance()->findByPlaylistId($result['playlist_id']);
        return new PlayList($result['playlist_id'], $result['name'], $musics);
    }
 
     /**
     * Récupère toutes les playlists.
     * @return array<PlayList> Toutes les playlists.
     */
    public function findAll(): array {
        $stmt = $this->connection->prepare("SELECT * FROM playlists");
        $stmt->execute();
        $rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);

        $playlists = [];
        foreach ($rows as $row) {
            $musics = [];
            // Récupérer les musiques associées à la playlist à partir de la source de données
            // ...

            $playlists[] = new PlayList($row['playlist_id'], $row['name'], $musics);
        }

        return $playlists;
    }

    /**
     * Deletes a PlayList based on its id
     * @param int $playlist_id
     * @return bool
     */
    public function delete(int $playlist_id): bool{
        $stmt = $this->pdo->prepare("DELETE FROM playlists WHERE playlist_id = :playlist_id");
        return $stmt->execute([
            'playlist_id' => $playlist_id
        ]);
    }

    /**
     * Saves a PlayList object in the database
     * @param PlayList $playlist
     * @return bool
     */
    public function save(PlayList $playlist): bool{
        if($playlist->getPlaylist_id() === null){
            return $this->create($playlist);
        }
        return $this->update($playlist);
    }

    /**
     * Creates a new PlayList in the database
     * @param PlayList $playlist
     * @return bool
     */
    private function create(PlayList $playlist): bool{
        $stmt = $this->pdo->prepare("INSERT INTO playlists (name) VALUES (:name)");
        $success = $stmt->execute([
            'name' => $playlist->getName()
        ]);
        if($success === false){
            return false;
        }
        $playlist->setPlaylist_id($this->pdo->lastInsertId());
        foreach($playlist->getMusics() as $music){
            MusicRepo::getInstance()->save($music);
        }
        return true;
    }

    /**
     * Updates an existing PlayList in the database
     * @param PlayList $playlist
     * @return bool
     */
    private function update(PlayList $playlist): bool{
        $stmt = $this->pdo->prepare("UPDATE playlists SET name = :name WHERE playlist_id = :playlist_id");
        $success = $stmt->execute([
            'name' => $playlist->getName(),
            'playlist_id' => $playlist->getPlaylist_id()
        ]);
        return  $success;
    }
   }

?>