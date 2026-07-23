let master = document.getElementById("master");
let next = document.getElementById("next");
let previos = document.getElementById("previous");
let gif = document.getElementById("imgsss");
let progressBar = document.getElementById("progressBar");
let masterSongName = document.querySelector(".info span");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");

let songs = [
    {songName: "Salma-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Mohamed", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Emad", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Ali", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ahmed", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Mostafa", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Isha", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Amer", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Zaid", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Zaid-10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}
];

let songItem = Array.from(document.getElementsByClassName("songItem"));
let songPlayIcon = Array.from(document.querySelectorAll(".timesTamp i"));

songItem.forEach((element, i) => {
    if (songs[i]) {
        element.querySelector("img").src = songs[i].coverPath;
        element.querySelector("span").innerText = songs[i].songName;
        element.querySelector(".timesTamp i").id = i;
    }
});

function makeAllPause() {
    songPlayIcon.forEach((element) => {
        element.classList.remove("fa-circle-pause", "fa-pause");
        element.classList.add("fa-circle-play", "fa-play");
    });
}

master.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = 1;
        master.classList.remove("fa-play");
        master.classList.add("fa-pause");
        
        let currentIcon = document.getElementById(songIndex);
        if (currentIcon) {
            currentIcon.classList.remove("fa-circle-play", "fa-play");
            currentIcon.classList.add("fa-circle-pause", "fa-pause");
        }
    } else {
        audioElement.pause();
        gif.style.opacity = 0;
        master.classList.remove("fa-pause");
        master.classList.add("fa-play");
        makeAllPause();
    }
});


audioElement.addEventListener("timeupdate", () => {
    if (audioElement.duration) {
        let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        progressBar.value = progress;
    }
});

progressBar.addEventListener("input", () => {
    if (audioElement.duration) {
        audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
    }
});

songPlayIcon.forEach((element) => {
    element.addEventListener("click", (e) => {
        let clickIndex = parseInt(e.target.id);

        if (songIndex === clickIndex && !audioElement.paused) {
            audioElement.pause();
            gif.style.opacity = 0;
            master.classList.remove("fa-pause");
            master.classList.add("fa-play");
            makeAllPause();
        } else {
            songIndex = clickIndex;
            audioElement.src = songs[songIndex].filePath;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            
            master.classList.remove("fa-play");
            master.classList.add("fa-pause");
            
            makeAllPause();
            e.target.classList.remove("fa-circle-play", "fa-play");
            e.target.classList.add("fa-circle-pause", "fa-pause");
        }
    });
});

next.addEventListener("click", () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playSelectedSong();
});

previos.addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    playSelectedSong();
});

function playSelectedSong() {
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    
    master.classList.remove("fa-play");
    master.classList.add("fa-pause");
    
    makeAllPause();
    let currentIcon = document.getElementById(songIndex);
    if (currentIcon) {
        currentIcon.classList.remove("fa-circle-play", "fa-play");
        currentIcon.classList.add("fa-circle-pause", "fa-pause");
    }
}

audioElement.addEventListener("ended", () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playSelectedSong();
});