<?php


    class PlayList{
        private int $playlist_id;
        private string $name;
        private array $musics;

        /**
         * Summary of __construct
         * @param int $playlist_id
         * @param string $name
         * @param array<Music> $musics
         */
        function __construct(int $playlist_id, string $name, array $musics){
            $this->playlist_id = $playlist_id;
            $this->name = $name;
            $this->musics = $musics;
        }

        public function json(): array{
            $music_s = array();
            foreach ($this->musics as $key => $value)
                array_push($music_s, $value->json());
            $se = [
                "playlist_id" => $this->playlist_id,
                "name" => $this->name,
                "musics" => $music_s
            ];
            return $se;
        }

        public function getPlaylist_id(): int{return $this->playlist_id;}
        public function getName(): string{return $this->name;}
        public function getMusics(): array{return $this->musics;}

        public function setPlaylist_id(int $playlist_id){$this->playlist_id = $playlist_id;}
        public function setName(string $name){$this->name = $name;}
        public function setMusics(array $musics){$this->musics = $musics;}
    }



?>