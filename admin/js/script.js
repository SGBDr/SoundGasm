////////////////////////////test : affichage du token/////////////////////////////////
let el = document.getElementById("token");
console.log(el);

////////////////////////////pages musiques//////////////////////////////////////////////
//ajax : pour affichage du nombre total de musique sur la page MUSIQUE
$(".totalmusique").replaceWith(`<div class="totalmusique">Total musique : ${$(".line").length}</div>`)
/*$.ajax({
    url: "https://soundgasm.herokuapp.com?controllers=music&method=GET&by=TERM&term=r",
    Headers: {
        'TOKEN': el
    },
    success: (data) => {
        ta = data.response.musics.length
        
    }
})*/




/////////////////////////////////////////page utilisateurs///////////////////////////////////////////////
//ajax : pour affichage du nombre total de musique sur la page UTILSATEURS

function confirm(nom){
    alert('utilisateur:'+nom+' supprimé!!');
}
function showUsers(path){
    //a'ppel serveur
    // $.ajax({
    //     url: "../utilisateur/listeUsers.php",
    //     success: (data) => {
    //         console.log(data)
    //     }
    // })
    pathG = path;
    $.ajax({
        url: path+"listeUsers.php",
        success: (data) => traiterReponseshowUsers(data)
    })

    // $.get("../utilisateur/listeUsers.php", traiterReponseshowUsers);//(php envoi les donnees au js)?   ;  js demande un traitement au php qui va le traiter en retour dans le fichier listeUsers
}
function traiterReponseshowUsers(data){ //traitement du resultat que va me renvoyer listeUsers
    console.log(data);
    //afficher en brut ce que le serveur a repondu
    // console.log(data);

    $("#London").html(`
    <!-- CONTENU SECTION UTILISATEURS -->
        <br><br><br>
        <div class="row">
            <h1><strong>Liste des utilisateurs  </strong></h1>
            <div class="totaluser">Total utilisateur : </div> 
            <div style="display:center; width: 100%; height: 500px; overflow-y:auto;">
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <!-- name, rep_image, track, artist, style, country, release_date -->
                            <th>identifiant </th>
                            <th>Nom</th>
                            <th>birthday</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>    
                </table>
            </div>
        </div>
    </div>`)

    for(let us of data){
        $('tbody').append(`
            <tr>
                <td> ${us.user_id} </td>
                <td> ${us.name} </td>
                <td> ${us.birthday} </td>
                <td> ${us.email} </td>
                <td width=300>
                    <a class="btn btn-primary btn-sm" href="`+pathG+`view.php?id=${us.user_id}"><i class="fa fa-eye"></i> Voir   </a>
                    &emsp;
                    <a class="btn btn-danger btn-sm" href="`+pathG+`delete.php?id=${us.user_id}"><i class="fa fa-trash"></i> Supprimer</a>
                </td>
            </tr>
        `)
    }

    $(".totaluser").replaceWith(`<div class="totalmusique">Total utilisateur : ${data.length}</div>`)
    
}



/////////////////////////////pages dashboard////////////////////////////////////
/////#totalmusique
function totalMusique(path){
    $.get(path+"listeMusiques.php", traiterReponsetotalMusique)
}
function traiterReponsetotalMusique(data){
    console.log("ici, youpi!!");
    console.log(data)
    $("#totalmusique").html(data.length);
}

//////#totaluser
function totalUser(path){
    $.get(path+"listeUsers.php", traiterReponsetotalUser)
}
function traiterReponsetotalUser(data){
    console.log(data)
    $("#totaluser").html(data.length);
}


///////////////////pages administrateur/////////////////////////
function totalAdministrateur(path){
    $.get(path+"listeAdmins.php", traiterReponsetotalAdmin)
}
function traiterReponsetotalAdmin(data){
    console.log(data)
    $("#totaladministrateur").html(data.length);
}