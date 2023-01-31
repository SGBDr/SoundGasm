<?php
    include_once("./../db/pdo.php");
    include_once("./../models/identifier.php");
    class ArtistRepo {
        private PDO $con = PDO_N::getInstance();
      
        public function __construct() {
        }
      
        /**
         * Récupère un artiste par son ID
         *
         * @param int $artist_id ID de l'artiste à récupérer
         * @return Artist|null Retourne un objet Artist si trouvé, null sinon
         */
        public function getById(int $artist_id) {
          $stmt = $this->con->query('SELECT * FROM artists WHERE artist_id = '.$artist_id);
          $artist = $stmt->fetch(PDO::FETCH_ASSOC);
          return $artist ? new Artist($artist['artist_id'], $artist['name']) : null;
        }
      
        /**
         * Récupère tous les artistes
         *
         * @return Artist[] Retourne un tableau d'objets Artist
         */
        public function getAll() {
          $stmt = $this->con->query('SELECT * FROM artists');
          $artists = [];
          while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $artists[] = new Artist($row['artist_id'], $row['name']);
          }
          return $artists;
        }
      
        /**
         * Ajoute un nouvel artiste
         *
         * @param Artist $artist Objet Artist à ajouter
         * @return bool Retourne true si l'ajout a réussi, false sinon
         */
        public function add(Artist $artist) {
          $stmt = $this->con->prepare('INSERT INTO artists (name) VALUES (?)');
          return $stmt->execute([$artist->getName()]);
        }
      
        /**
         * Met à jour un artiste existant
         *
         * @param Artist $artist Objet Artist à mettre à jour
         * @return bool Retourne true si la mise à jour a réussi, false sinon
         */
        public function update(Artist $artist) {
          $stmt = $this->con->prepare('UPDATE artists SET name = ? WHERE artist_id = ?');
          return $stmt->execute([$artist->getName(), $artist->getArtist_id()]);
        }
      
        /**
         * Supprime un artiste
         *
         * @param int $artist_id ID de l'artiste à supprimer
         * @return bool Retourne true si la suppression a réussi, false sinon
         */
        public function delete(int $artist_id) {
          $stmt = $this->con->prepare('DELETE FROM artists WHERE artist_id = ?');
          return $stmt->execute([$artist_id]);
        }
      }


?>