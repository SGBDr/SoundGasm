<?php
    class Group{
        private int $group_id;
        private int $user_id;
        private string $name;
        private datetime $date_creation;
        private string $description;
        //list
        private array $musics;

        /**
         * summary of __contruct
         * @param int $group_id
         * @param int $user_id
         * @param string $name
         * @param datetime $date_creation
         * @param string $description
         * @param array $musics
         */
        function __construct(int $group_id, int $user_id, string $name, datetime $date_creation, string $description, array $musics){
            $this->group_id = $group_id;
            $this->user_id = $user_id;
            $this->name = $name;
            $this->date_creation = $date_creation;
            $this->description = $description;
            $this->musics = $musics;
        }

        public function json(): array{
            $music_s = array();
            foreach ($this->musics as $key => $value)
                array_push($music_s, $value->json());
            $se = [
                "group_id" => $this->group_id,
                "user_id" => $this->user_id,
                "name" => $this->name,
                "date_creation" => $this->date_creation->format("Y-m-d"),
                "decription" => $this->description,
                "musics" => $music_s
            ];
            return $se;
        }

        public function getGroup_id(): int{return $this->group_id;}
        public function getUser_id(): int{return $this->user_id;}
        public function getName(): string{return $this->name;}
        public function getDate_creation(): string{return $this->date_creation;}
        public function getDescription(): string{return $this->description;}
        public function getMusics(): array{return $this->musics;}

        public function setGroup_id(int $group_id): void{$this->group_id = $group_id;}
        public function setUser_id(int $user_id): void{$this->user_id = $user_id;}
        public function setName(string $name): void{$this->name = $name;}
        public function setDate_creation(datetime $date_creation): void{$this->date_creation = $date_creation;}
        public function setDescription(string $description): void{$this->description = $description;}
        public function setMusics(array $musics): void{$this->musics = $musics;}

    }



?>