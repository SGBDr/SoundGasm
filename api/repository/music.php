<?php
    include_once("./../db/pdo.php");

    public class MusicRepo {
        private $con = new PDO_N.getInstance();

        public function getMusics(){
            // get all musics dispo
        }

        public function getMusic($artistORname){
            // get music with param config
        }

        public function deletMusic($music_id){
            // remove some music in table
        }

        public function updateMusic($music){
            // update music in param from table
        }

    }



?>