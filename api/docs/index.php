<?php


?>

<!doctype html>
<html lang="en">
  <head>
    <title>SoundGasm Docs</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://pagecdn.io/lib/ace/1.4.5/ace.js" integrity="sha256-5Xkhn3k/1rbXB+Q/DX/2RuAtaB4dRRyQvMs83prFjpM=" crossorigin="anonymous"></script>
  </head>
  <body>
    <?php include_once("navbar.php"); ?>
    <div class="container m-2 p-3"> 
        <h5>Controller list</h5>
        <div class="list-group">
            <a data-toggle="modal" data-target=".auth-modal" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">Auth</h5>
                </div>
                <p class="mb-1">for login and logout, this controller provide a token, for an https interaction with the api.</p>
                <small>first task : Login (in response you will get a token)</small>
            </a>
            <?php include_once("modals/auth-modal.php"); ?>
            <a data-toggle="modal" data-target=".artist-modal" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">artist</h5>
                </div>
                <p class="mb-1">get list of artist, search some artist, search preference about artist for an user ...</p>
                <small class="text-muted">just provide a token in the header</small>
            </a>
            <?php include_once("modals/artist-modal.php"); ?>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">music</h5>
                </div>
                <p class="mb-1">search some music ...</p>
                <small class="text-muted">just provide a token in the header</small>
            </a>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>