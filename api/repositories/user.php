<?php
include_once("./api/utils/import.php");

class UserRepo {
    private PDO $con;
    private ArtistRepo $artistRepo;
    private GroupRepo $groupRepo;
    private PlaylistRepo $playlistRepo;
    private MusicRepo $musicRepo;
    private IdentifierRepo $identifierRepo;

    public function __construct() {
        $this->con = PDO_N::getInstance();
        $this->artistRepo = new ArtistRepo();
        $this->groupRepo = new GroupRepo();
        $this->playlistRepo = new PlaylistRepo();
        $this->musicRepo = new MusicRepo();
        $this->identifierRepo = new IdentifierRepo();
    }
    
    /**
     * Summary of getUserById
     * @param int $user_id
     * @return User
     */
    public function getUserById(int $user_id): User {
        $stmt = $this->con->query("SELECT * FROM users WHERE user_id = ". $user_id);
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

    public function getUser_idByIdentifier_id(int $identifier_id){
        $stmt = $this->con->query("SELECT * FROM users WHERE identifier_id = ". $identifier_id);
        $result = $stmt->fetch();
        if($result != null)
            return $result['user_id'];
        return 0;
    }
}
   


?>