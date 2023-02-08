<?php
    include_once("./../db/pdo.php");
    include_once("./../models/artist.php");
//OKK
    class ArtistRepo {
        private PDO $con = PDO_N::getInstance();
      
        public function __construct() {}
      
        /**
         * Récupère un artiste par son ID
         *
         * @param int $artist_id ID de l'artiste à récupérer
         * @return Artist|null Retourne un objet Artist si trouvé, null sinon
         */
        public function findById(int $artist_id) {
          $stmt = $this->con->query('SELECT * FROM artists WHERE artist_id = '.$artist_id);
          if ($artist = $stmt->fetch(PDO::FETCH_ASSOC))
            return new Artist($artist['artist_id'], $artist['name']);
          return null;
        }

        /**
         * Récupère un artiste par son ID
         *
         * @param int $artist_id ID de l'artiste à récupérer
         * @return Artist|null Retourne un objet Artist si trouvé, null sinon
         */
        public function findByName(string $name) {
          $stmt = $this->con->query('SELECT * FROM artists WHERE name = '.$name);
          if ($artist = $stmt->fetch(PDO::FETCH_ASSOC))
            return new Artist($artist['artist_id'], $artist['name']);
          return null;
        }

        public function findByUserPreference(int $user_id) {
          $artists = array();
          $stmt = $this->con->query('SELECT artist_id FROM artist_user WHERE artist_id = '.$artist_id);
          while ($a_id = $stmt->fetch(PDO::FETCH_ASSOC)){
            $artist = $this->findById($row["artist_id"]);
            if($artist != null)
              array_push($artists, $artist);
          }
          return $artists
        }

        /**
         * Récupère tous les artistes
         *
         * @return Artist[] Retourne un tableau d'objets Artist
         */
        public function findAll(): array {
          $stmt = $this->con->query('SELECT * FROM artists');
          $artists = array();
          while($row = $stmt->fetch(PDO::FETCH_ASSOC))
            array_push($artists, new Artist($row['artist_id'], $row['name']));
          return $artists;
        }
      
        /**
         * Ajoute un nouvel artiste
         *
         * @param Artist $artist Objet Artist à ajouter
         * @return bool Retourne true si l'ajout a réussi, false sinon
         */
        public function save(Artist $artist) {
          $stmt = $this->con->prepare('INSERT INTO artists(name) VALUES(:name)');
          return $stmt->execute(array(':name' => $artist->getName()));
        }
      
        /**
         * Met à jour un artiste existant
         *
         * @param Artist $artist Objet Artist à mettre à jour
         * @return bool Retourne true si la mise à jour a réussi, false sinon
         */
        public function update(Artist $artist) {
          $stmt = $this->con->prepare('UPDATE artists SET name = :name WHERE artist_id = :artist_id');
          return $stmt->execute(array(":name" => $artist->getName(), ":artist_id" => $artist->getArtist_id()));
        }
      
        /**
         * Supprime un artiste
         *
         * @param int $artist_id ID de l'artiste à supprimer
         * @return bool Retourne true si la suppression a réussi, false sinon
         */
        public function delete(int $artist_id) {
          $stmt = $this->con->prepare('DELETE FROM artists WHERE artist_id = :artist_id');
          return $stmt->execute(arrya(":artist_id" => $artist_id));
        }
    }


?>