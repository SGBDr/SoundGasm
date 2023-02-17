<?php
    include_once("./api/utils/import.php");

    class User{
        private int $user_id;
        private string $name;
        private datetime $birthday;
        //object
        private Identifier $identifier;
        //list of object
        private array $like_musics;
        private array $playlists;
        private array $groups;
        private array $artists;

        /**
         * Summary of __construct
         * @param int $user_id
         * @param string $name
         * @param datetime $birthday
         * @param Identifier $identifiers
         * @param array $like_songs
         * @param array $playlists
         * @param array $groups
         */
        function __construct(int $user_id, string $name, datetime $birthday, Identifier $identifier, array $like_songs, array $playlists, array $groups, array $artists){
            $this->user_id = $user_id;
            $this->name = $name;
            $this->birthday = $birthday;
            $this->identifier = $identifier;
            $this->like_musics = $like_songs;
            $this->playlists = $playlists;
            $this->groups = $groups;
            $this->artists = $artists;
        }

        public function json(): array{
            $like_s = array();
            $playlist_s = array();
            $group_s = array();
            $artist_s = array();
            foreach ($this->like_musics as $key => $value)
                array_push($like_s, $value->json());
            foreach ($this->playlists as $key => $value)
                array_push($playlist_s, $value->json());
            foreach ($this->groups as $key => $value)
                array_push($group_s, $value->json());
            foreach ($this->artists as $key => $value)
                array_push($artist_s, $value->json());

            $se = [
                "user_id" => $this->user_id,
                "name" => $this->name,
                "birthday" => $this->birthday->format("Y-m-d"),
                "identifier" => $this->identifier->json(),
                "like_musics" => $this->like_musics,
                "playlists" => $this->playlists,
                "groups" => $this->groups,
                "artists" => $this->artists
            ];

            return $se;
        }

        public function getUser_id(): int{return $this->user_id;}
        public function getName(): string{return $this->name;}
        public function getBirthday(): datetime{return $this->birthday;}
        public function getIdentifier(): Identifier{return $this->identifier;}
        public function getLike_musics(): array{return $this->like_musics;}
        public function getPlaylists(): array{return $this->playlists;}
        public function getGroups(): array{return $this->groups;}

        public function setUser_id(int $user_id): void{$this->user_id = $user_id;}
        public function setName(string $name): void{$this->name = $name;}
        public function setBirthday(datetime $birthday): void{$this->birthday = $birthday;}
        public function setIdentifier(Identifier $identifier): void{$this->identifier = $identifier;}
        public function setLike_muscis(array $like_musics): void{$this->$like_musics = $like_musics;}
        public function setPlaylists(array $playlists): void{$this->playlists = $playlists;}
        public function setGroups(array $groups): void{$this->groups = $groups;}
    }


?>