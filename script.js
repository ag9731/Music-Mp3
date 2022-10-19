console.log("Welcome To Music Play");


let songIndex=0;
let audioElement=new Audio('justin_.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Salam-e-Ishq", filepath: "song/1.mp3", coverPath:"covers/1.jpg"},
    
  
]


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    // else if(audioElement.played || audioElement.currentTime>=0)
    // {
    //     audioElement.pause();
    //     masterPlay.classList.remove('fa-circle-pause');
    //     masterPlay.classList.add('fa-circle-play');
    // }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' ,() => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})