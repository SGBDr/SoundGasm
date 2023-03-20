import { addToList } from "../reader/list";
import * as cleanUp from "../../utils/authClean";

export const showNav = async (event, context, item, isLiked, setIsLiked) => {
    event.preventDefault();
    const position = {
        x: event.pageX,
        y: event.pageY,
    };

    const elmts = ["Ajouter à la liste", "Ajouter à la playlist", `${!isLiked ? "Ajouter aux" : "Retirer des"} favoris`, "Voir l'artiste"];
    if (isLiked === undefined) elmts.splice(2, 1);
    const choice = await context("menu", { elements: elmts, xyPosition: position })
    if (choice) {
        console.log("choice =" + choice);
        handleChoice(choice, item, isLiked, setIsLiked);

    }

};

export const showPlayList = async (event, context, musicId) => {
    event.preventDefault();
    const userName = localStorage.getItem("userName");
    const playString = localStorage.getItem(`${userName}Playlist`);
    const playLists =  JSON.parse(playString);
    const elmts = playLists.map((elm) => (elm.name));
    const position = {
        x: event.pageX - 200 / 2,
        y: event.pageY - elmts.length * 40 - 20,
    };

    const choice = await context("menu", { elements: elmts, xyPosition: position, playlist: true });
    if (choice) {
        const playlistId = playLists[choice-1].id
        const url = `https://soundgasm.herokuapp.com/?controllers=playlist&method=UPDATE&action=ADD&music_id=${musicId}&playlist_id=${playlistId}`;
        fetch(url,
            {
                method: "GET",
                headers: {
                    Token: localStorage.getItem("authToken")
                }
            })
            .then(res => res.json())
            .then(result => {
                if (result.response === cleanUp.errMsg) cleanUp.tokenCleanUp();
                console.log(result.response);
                window.dispatchEvent(new CustomEvent("playlist", {
                    detail: {
                      key: "playlistAdd",
                      newValue: null
                    }
                  }));
            })
            .catch((err) => console.log(err));
    }
}

const handleChoice = (choice, item, isLiked, setIsLiked) => {
    switch (choice) {
        // Ajout à la liste
        case 1:
            addToList(JSON.stringify(item));
            break;
        // Ajout à une playliste
        case 2:

            break;
        // Ajout/Supprésion favoris
        case 3:
            handleMusicLike(item.music_id, isLiked, setIsLiked);
            break;
        // Page Artiste
        case 4:
            break;
        default:
            break;
    }
}

export const isMusicLiked = (id, setIsLiked, player) => {
    console.log("music_id: " + id);
    const url = `https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=LIKE`;
    fetch(url,
        {
            method: "GET",
            headers: {
                Token: localStorage.getItem("authToken")
            }
        })
        .then(res => res.json())
        .then(result => {
            if (result.response === cleanUp.errMsg) cleanUp.tokenCleanUp();
            const likedMusics = result.response.musics;
            // console.log("Liked Musics");
            // console.log(likedMusics);
            const mySong = likedMusics.find((song) => song.music_id === id);
            if (player) setIsLiked((mySong) ? { state: true, text: "like-on" } : { state: false, text: "like-off" });
            else setIsLiked((mySong) ? true : false);
        })
        .catch((err) => console.log(err));
}

export const handleMusicLike = (id, isLiked, setIsLiked, player) => {
    console.log("music_id =" + id);
    const url = `https://soundgasm.herokuapp.com/?controllers=music&method=UPDATE&action=${(isLiked) ? "UN" : ""}LIKE&music_id=${id}`;
    // console.log("URL : " + url);
    fetch(url,
        {
            method: "GET",
            headers: {
                Token: localStorage.getItem("authToken")
            }
        })
        .then(res => res.json())
        .then(result => {
            if (result.response === cleanUp.errMsg) cleanUp.tokenCleanUp();
            console.log(result.response)
            if (player) setIsLiked((isLiked) ? { state: false, text: "like-off" } : { state: true, text: "like-on" });
            else setIsLiked((isLiked) ? false : true);
        })
        .catch((err) => console.log(err));
}
