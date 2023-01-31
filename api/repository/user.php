<?php
  include_once("./../db/pdo.php");
  include_once("./../models/identifier.php");

class UserRepo {
    
    private PDO $con = PDO_N::getInstance();
    public function __construct() {
   }
    
    /**
     * Summary of getUserById
     * @param int $user_id
     * @return User
     */

    public function getUserById(int $user_id): User {
        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE user_id = :user_id");
        $stmt->execute([':user_id' => $user_id]);
        $result = $stmt->fetch();
        if (!$result) {
            return null;
        }
        return new User(
            $result['user_id'],
            $result['name'],
            new DateTime($result['birthday']),
            new Identifier($result['identifier_id'], $result['identifier_value']),
            $this->getLikeMusicsByUserId($user_id),
            $this->getPlaylistsByUserId($user_id),
            $this->getGroupsByUserId($user_id)
        );
    }
    
    /**
     * Summary of getLikeMusicsByUserId
     * @param int $user_id
     * @return array
     */

    public function getLikeMusicsByUserId(int $user_id): array {
        $stmt = $this->pdo->prepare("SELECT music_id FROM like_musics WHERE user_id = :user_id");
        $stmt->execute([':user_id' => $user_id]);
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }
    
    /**
     * Summary of getPlaylistsByUserId
     * @param int $user_id
     * @return array
     */
    public function getPlaylistsByUserId(int $user_id): array {
        $stmt = $this->pdo->prepare("SELECT playlist_id FROM playlists WHERE user_id = :user_id");
        $stmt->execute([':user_id' => $user_id]);
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }
    
    /**
     * Summary of getGroupsByUserId
     * @param int $user_id
     * @return array
     */
    public function getGroupsByUserId(int $user_id): array {
        $stmt = $this->pdo->prepare("SELECT group_id FROM groups WHERE user_id = :user_id");
        $stmt->execute([':user_id' => $user_id]);
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }
    
     /**
     * Summary of save
     * @param User $user
     * @return bool
     */
    public function save(User $user): bool {
        $stmt = $this->pdo->prepare("
            INSERT INTO users (name, birthday, identifier_id) 
            VALUES (:name, :birthday, :identifier_id)
        ");
        return $stmt->execute([
            'name' => $user->getName(),
            'birthday' => $user->getBirthday(),
            'identifier_id' => $user->getIdentifier()->getIdentifier_id()
        ]);
    }

    
}
   


?>