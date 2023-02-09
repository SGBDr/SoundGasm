<?php
  include_once("./db/pdo.php");
  include_once("./model/user.php");

  include_once("./repositories/identifier.php");
  include_once("./repositories/artist.php");
  include_once("./repositories/group.php");
  include_once("./repositories/playlist.php");
  include_once("./repositories/music.php");

class UserRepo {
    private PDO $con = PDO_N::getInstance();
    private ArtistRepo $artistRepo = new ArtistRepo();
    private GroupRepo $groupRepo = new GroupRepo();
    private PlaylistRepo $playlistRepo = new PlaylistRepo();
    private MusicRepo $musicRepo = new MusicRepo();
    private IdentifierRepo $identifierRepo = new IdentifierRepo();

    public function __construct() {}
    
    /**
     * Summary of getUserById
     * @param int $user_id
     * @return User
     */
    public function getUserById(int $user_id): User {
        $stmt = $this->con->prepare("SELECT * FROM users WHERE user_id = :user_id");
        $stmt->execute(array(":user_id" => $user_id));
        $result = $stmt->fetch();
        if ($result == null)
            return null;
    
        return new User(
            $result['user_id'],
            $result['name'],
            new DateTime($result['birthday']),
            $this->identifierRepo->findById($result["user_id"]),
            $this->musicRepo->findLikeSongOfUser($result["user_id"]),
            $this->playlistRepo->findOwnByUser($result["user_id"]),
            $this->groupRepo->findByUserIn($result["user_id"]),
            $this->artistRepo->findByUserPreference($result["user_id"])
        );
    }
}
   


?>