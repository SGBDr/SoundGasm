<?php
    include_once("./db/pdo.php");
    include_once("./models/group.php");
    include_once("./models/music.php");


    class GroupRepo{
        private PDO $con;

        public function __construct(){
            $this->con = PDO_N::getInstance();
        }

        public function findById(int $group_id): ?Group{
            $result = $this->con->query("SELECT * FROM groups WHERE group_id = " . $group_id);
            $row = $result->fetch();
            if ($row == false)
                return null;
            $name = $row["name"];
            $user_id = $row["user_id"];
            $description = $row["description"];
            $date_creation = $row["date_creation"];
    
            $musics = array();
            $result = $this->con->query("SELECT m.music_id,m.name,m.rep_image,m.track,m.artist,m.style,m.country,m.release_date FROM musics m, music_group mg WHERE m.music_id = mg.music_id AND mg.group_id = ". $group_id);
            while($row = $result->fetch())
                array_push($musics, new Music($row["music_id"], $row["name"], $row["rep_image"], $row["track"], $row["artist"], $row["style"], $row["country"], new DateTime($row["release_date"])));
    
            return new Group($group_id, $user_id, $name, new Datetime($date_creation), $description, $musics);
        }

        public function findByName(string $name): array{
            $stmt = $this->con->query("SELECT group_id FROM groups WHERE lower(name) Like = '%".strtolower($name)."%'");
            $groups = array();
            while($row = $stmt->fetch(PDO::FETCH_ASSOC))
                array_push($groups, $this->findById($row["group_id"]));
        }

        public function findByUserIn(int $user_id): array{
            $result = $this->con->query("SELECT group_id FROM user_group WHERE user_id = ". $user_id);
            $groups = array();
            while($row = $result->fetch())
                array_push($groups, $this->findById($row["group_id"]));

            return $groups;
        }

        public function findOwnByUser(int $user_id): array{
            $result = $this->con->query("SELECT group_id FROM groups WHERE user_id = ". $user_id);
            $groups = array();
            while($row = $result->fetch())
                array_push($groups, $this->findById($row["group_id"]));

            return $groups;
        }

        public function save(Group $group): bool{
            $stmt = $this->con->prepare("INSERT groups(user_id, description, date_creation, name) VALUES(:user_id, :description, :date_creation, :name)");
            $stmt->execute(array(":user_id" => $group->getUser_id(), ":description" => $group->getDecription(), ":date_creation" => $group-getDate_creation(), ":name" => $group->getName()));

            $stmt = $this->con->prepare("INSERT user_group(user_id, group_id) VALUES(:user_id, :group_id)");
            $result = $stmt->execute(array(":user_id" => $group->getUser_id(), ":group_id" => $this->con->lastInsertId()));
            return true;
        }

        public function delete(int $group_id): bool{
            $stmt = $this->con->prepare("DELETE FROM music_group WHERE group_id = :group_id");
            if($stmt->execute(array(":group_id" => $group_id))){
                $stmt = $this->con->prepare("DELETE FROM user_group WHERE group_id = :group_id");
                if($stmt->execute(array(":group_id" => $group_id))){
                    $stmt = $this->con->prepare("DELETE FROM group WHERE group_id = :group_id");
                    return $stmt->execute(array(":group_id" => $group_id));
                }
                return false;
            }
            return false;
        }

        public function addMusicIntoGroup(int $music_id, int $group_id){
            $stmt = $this->con->prepare("INSERT INTO music_group(music_id, group_id) VALUES(:music_id, :group_id)");
            return $stmt->execute(array(":music_id" => $music_id, ":group_id" => $group_id));
        }

        public function addUserIntoGroup(int $user_id, int $group_id){
            $stmt = $this->con->prepare("INSERT INTO user_group(user_id, group_id) VALUES(:user_id, :group_id)");
            return $stmt->execute(array(":user_id" => $user_id, ":group_id" => $group_id));
        }

        public function removeMusicFromGroup(int $music_id, int $group_id){
            $stmt = $this->con->prepare("DELETE music_group WHERE music_id = :music_id AND group_id = :group_id");
            return $stmt->execute(array(":music_id" => $music_id, ":group_id" => $group_id));
        }

        public function removeUserFromGroup(int $user_id, int $group_id){
            $stmt = $this->con->prepare("DELETE user_group WHERE user_id = :user_id AND group_id = :group_id AND user_id != (SELECT user_id FROM groups group_id = :group_id)");
            return $stmt->execute(array(":user_id" => $user_id, ":group_id" => $group_id));
        }

    }

?>