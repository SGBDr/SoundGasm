<?php
    include_once("./repositories/music.php");

    class MusicServ{
        private MusicRepo $musicRepo;

        public function __construct(){
            $this->musicRepo = new MusicRepo();
        }

        public function getAll(){
            $list = array();
            foreach($this->musicRepo->findAll() as $key => $value)
                array_push($list, $value->json());
            return $list;
        }


    }


?>