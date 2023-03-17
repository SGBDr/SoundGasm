let list = [];

let current = 0;

export const getList = () => {
    return list;
}

export const initaliseList = () => {
    const userName = localStorage.getItem("userName");
    const myList = JSON.parse(localStorage.getItem(`${userName}CurrentList`));
    const index = JSON.parse(localStorage.getItem(`${userName}CurrentIndex`));
    if (myList) list = myList;
    if (index) current = index;
    return list;
}

export const updateList = () => {
    const userName = localStorage.getItem("userName");
    localStorage.setItem(`${userName}CurrentList`, JSON.stringify(list));
    localStorage.setItem(`${userName}CurrentIndex`, current);
    window.dispatchEvent(new CustomEvent("storage",{
        detail: { key: "currentList",
                  newValue: JSON.stringify(list) }
          }));
}

export const setCurrentIndex = (val) => {
    console.log(val+" % "+list.length);
    current = (val) ;
    updateList();
}

export const getCurrentIndex = () => {
    return current;
}

export const getCurrentValue = () => {
    return JSON.parse(list[current-1]);
}

export const addToList = (value) => {
    if(list.length < 20);
    console.log(value);
    list.push(value);
    updateList();
}

export const batchAddToList = (values) => {
    list.splice(current+1);
    values.forEach( (val)=>{ addToList(JSON.stringify(val)) });
    updateList();
}

export const initVoidList = () => {
    list = [];
    current =0;
    updateList();
}

export const isPresentInList = (val) => {
    const music = JSON.parse(val);
    console.log("music_id: "+music.music_id);
    const found = list.find((song) => JSON.parse(song).music_id === music.music_id);
    return (found)? true : false;
}

export default list;


