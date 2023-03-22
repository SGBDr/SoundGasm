  <!-- SIDEBAR  -->
  <div class="sidebar">
        <div class="logo">
            <img src="../images/SoundgasmLogo.png" alt="">
            <span class="nav-item">Soundgasm' Admin</span>
        </div>
        <div class="sidebar-item">
            <a href="../dashboard.php" ><i class="fa fa-chart-bar"></i><span>DASHBOARD</span></a>
            <a href="../musique/musique.php"><i class="fa fa-music"></i><span>MUSIQUES</span></a>
            <button class="tablinks" onclick="showUsers();"><i class="fa fa-user"></i><span>UTILISATEURS</span></button>
            <a href="administrateur.php"><i class="fa fa-users"></i><span>ADMINISTRATEURS</span></a> 
        </div>
        <div class="logout">
            <a href="../log/deconnexion.php"><i class="fa fa-sign-out-alt"></i><span>DECONNEXION</span></a>
        </div>
    </div>



<!-- view music -->
    <div class="row">
        <div class="col-sm-6 ">
           <h1><strong>Voir un item</strong></h1>
           <br>
           <form>
              <div class="form-group">
                <label>Name:</label> <?php echo " ".$req['name']; ?>
              </div>
              <div class="form-group">
                <label>Artist:</label><?php echo ' ' . $req['artist']; ?>
              </div>
              <div class="form-group">
                <label>Style:</label><?php echo ' ' . $req['style']; ?>
              </div>
              <div class="form-group">
                <label>Country:</label><?php echo ' ' . $req['country']; ?>
              </div>
              <div class="form-group">
                <label>Release date:</label><?php echo ' ' . $req['release_date']; ?>
              </div>
              <div class="form-image">
                <label>Image:</label><img src=<?php echo ' ' . $req['rep_image'];?>  alt="">
              </div>
           </form>
           <br>
           <div class="form-actions">
             <a class="btn btn-primary" href="musique.php"><span class="glyphicon glyphicon-arrow-left "></span>Retour</a>
           </div>
        </div>
      </div>


      class="img-fluid rounded-start"

      <a class="btn btn-primary btn-sm" href="../utilisateur/view.php?id=${us.user_id}"><i class="fa fa-eye"></i> Voir   </a>

      for($i=0; $i<count($req2); $i++){
                                    echo '<tr class="line">';
                                    echo '<td>' . $req2[$i]['name'] . '</td>';
                                    echo '<td>' . $req3[$i]['name']. '</td>';
                                    echo '</tr>';
                                }