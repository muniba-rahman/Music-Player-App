console.log("Welcome to Musiconic!");
let songIndex = 0;
let audioElement = new Audio("./songs/Alone.mp3");
let PlayBtn = document.getElementById("PlayBtn");
let progressBar = document.getElementById("progressBar");
let title = document.getElementById("title");
let songList = Array.from(document.getElementsByClassName("list"));
let next = document.getElementById("next");
let back = document.getElementById("back");
let addBtn = document.getElementById("button");

let songs = [
    {Name: "Alone",filePath: "./songs/0.mp3",coverPath: "./assets/alan-walker.jpg"},
    {Name: "Blinding Lights",filePath: "./songs/1.mp3",coverPath: "./assets/weekend.jpg"},
    {Name: "Calm Down",filePath: "./songs/2.mp3",coverPath: "./assets/selena.jpg"},
    {Name: "Faded",filePath: "./songs/3.mp3",coverPath: "./assets/alan-walker.jpg"},
    {Name: "Headlights",filePath: "./songs/4.mp3",coverPath: "./assets/alan-walker.jpg"},
    {Name: "Love Story",filePath: "./songs/5.mp3",coverPath: "./assets/swift.jpg"},
    {Name: "Attention",filePath: "./songs/6.mp3",coverPath: "./assets/charlie-puth.jpg"},
    {Name: "Dandelions",filePath: "./songs/7.mp3",coverPath: "./assets/ruth.jpg"},
    {Name: "Dark Horse",filePath: "./songs/8.mp3",coverPath: "./assets/katie.jpg"},
    {Name: "Firework",filePath: "./songs/9.mp3",coverPath: "./assets/katie.jpg"},
    {Name: "Havana",filePath: "./songs/10.mp3",coverPath: "./assets/camilla.jpg"},
    {Name: "Hym for the Weekend",filePath: "./songs/11.mp3",coverPath: "./assets/coldplay.jpg"},
    {Name: "Live while we're young",filePath: "./songs/Live While Were Young.mp3",coverPath: "./assets/one-direction.jpg"},
    {Name: "On the floor",filePath: "./songs/On The Floor.mp3",coverPath: "./assets/lopez.jpg"},
    {Name: "Perfect",filePath: "./songs/Perfect.mp3",coverPath: "./assets/ed.jpg"},
    {Name: "Senorita",filePath: "./songs/Senorita.mp3",coverPath: "./assets/shawn.jpg"},
    {Name: "Starting now",filePath: "./songs/Starting Now.mp3",coverPath: "./assets/brandy.jpg"},
]

songList.forEach((e, i)=>{
    e.getElementsByTagName("img")[0].src = songs[i].coverPath;
    e.getElementsByClassName("songTitle")[0].innerText = songs[i].Name;
});

PlayBtn.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        PlayBtn.classList.remove("fa-play");
        PlayBtn.classList.add("fa-pause");
        title.style.opacity = 1;
    }else{
        audioElement.pause();
        PlayBtn.classList.remove("fa-pause");
        PlayBtn.classList.add("fa-play");
        title.style.opacity = 0;
    }
})

audioElement.addEventListener("timeupdate", ()=>{
    console.log("time updated!");
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value = progress;
})

progressBar.addEventListener("change", ()=>{
    audioElement.currentTime = ((audioElement.value * audioElement.duration)/100);
})



Array.from(document.getElementsByClassName("songTitle")).forEach((e)=>{
    e.addEventListener("click", (event)=>{
        index = parseInt(event.target.id);
        audioElement.src = `./songs/${index}.mp3`;
        title.innerText = songs[index].Name;
        audioElement.currentTime = 0;
        audioElement.play();
        PlayBtn.classList.remove("fa-play");
        PlayBtn.classList.add("fa-pause");
    })
})

next.addEventListener("click", ()=>{
    if(index>=16){
        index = 0;
    }
    else{
        index += 1;
    }
    audioElement.src = `./songs/${index}.mp3`;
    title.innerText = songs[index].Name;
    audioElement.currentTime = 0;
    audioElement.play();
    PlayBtn.classList.remove("fa-play");
    PlayBtn.classList.add("fa-pause");
})

back.addEventListener("click", ()=>{
    if(index<0){
        index = 0;
    }
    else{
        index -= 1;
    }
    audioElement.src = `./songs/${index}.mp3`;
    title.innerText = songs[index].Name;
    audioElement.currentTime = 0;
    audioElement.play();
    PlayBtn.classList.remove("fa-play");
    PlayBtn.classList.add("fa-pause");
})


addBtn.addEventListener("click", ()=>{
    alert('Your song has been successfully added!');
})