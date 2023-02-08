<?php
  include_once("./db/pdo.php");
  include_once("./models/user.php");

  include_once("./models/identifier.php");
  include_once("./models/artist.php");
  include_once("./models/group.php");
  include_once("./models/playlist.php");
  include_once("./models/music.php");

class UserRepo {
    private PDO $con = PDO_N::getInstance();
    private ArtistRepo $artistRepo = ArtistRepo();
    private GroupRepo $groupRepo = GroupRepo();
    private PlaylistRepo $playlistsRepo = PlaylistRepo();
    private MusicRepo $musicRepo = MusicRepo();
    private IdentifierRepo $identifierRepo = IdentifierRepo();

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
            int $user_id, string $name, datetime $birthday, Identifier $identifier, array $like_songs, array $playlists, array $groups, array $artists
        return new User(
            $result['user_id'],
            $result['name'],
            DateTime($result['birthday']),
            $this->identifierRepo->findById($result["user_id"]),
            $this->musicRepo->findLikeSongOfUser($result["user_id"]),
            $this->playlistRepo->findOwnByUser($result["user_id"]),
            $this->groupRepo->findByUserIn($result["user_id"]),
            $this->artistRepo->findByUserPreference($result["user_id"])
        );
    }
}
   


?>