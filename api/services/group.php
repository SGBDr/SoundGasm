<?php
    include_once("./repositories/group.php");

    class GroupServ{

        private GroupRepo $groupRepo;

        function __construct(){
            $this->groupRepo = new GroupRepo();
        }

        public function getWhereUserIsOwner(int $user_id): array {
            $groups = array();
            foreach ($this->groupRepo->findOwnByUser($user_id) as $key => $value)
                array_push($groups, $value->json());
            return $groups;
        }

        public function getWhereUserIn(int $user_id): array {
            $groups = array();
            foreach ($this->groupRepo->findByUserIn($user_id) as $key => $value)
                array_push($groups, $value->json());
            return $groups;
        }

        public function getBySimilarName(string $name): array{
            $groups = array();
            foreach ($this->groupRepo->findByName($name) as $key => $value)
                array_push($groups, $value->json());
            return $groups;
        }

        public function delete(int $group_id){
            return $this->groupRepo->delete($group_id);
        }

        public function add(Group $group){
            return $this->groupRepo->save($group);
        }

        public function addMusic(int $music_id, int $group_id){
            return $this->groupRepo->addMusicIntoGroup($music_id, $group_id);
        }

        public function addUser(int $user_id, int $group_id){
            return $this->groupRepo->addUserIntoGroup($user_id, $group_id);
        }

        public function removeMusic(int $music_id, int $group_id){
            return $this->groupRepo->removeMusicFromGroup($music_id, $group_id);
        }

        public function removeUser(int $user_id, int $group_id){
            return $this->groupRepo->RemoveUserFromGroup($user_id, $group_id);
        }

    }



?>