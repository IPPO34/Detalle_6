const mediaFiles = [
"media/foto1.jpeg",
"media/foto2.jpeg",
"media/foto3.jpeg",
"media/foto4.jpeg",
"media/foto5.jpeg",
"media/foto6.jpeg",
"media/foto7.jpeg",
"media/foto8.jpeg",
"media/foto9.jpeg",
"media/foto10.jpeg",
"media/foto11.jpeg",
"media/foto12.jpeg",
"media/foto13.jpeg",
"media/foto15.jpeg",
"media/foto16.jpeg",
"media/foto17.jpeg",
"media/foto18.jpeg",
"media/foto19.jpeg",
"media/foto20.jpeg",
"media/foto21.jpeg",
"media/foto22.jpeg",
"media/video1.mp4"
];

let currentIndex=0;

function startExperience(){

document.getElementById("intro").classList.add("hidden");
document.getElementById("experience").classList.remove("hidden");

const music=document.getElementById("music");
music.play();

playMedia();
createHearts();
createStars();

syncSubtitles();

}

/* FOTOS Y VIDEO */

function playMedia(){

const container=document.getElementById("mediaContainer");

if(currentIndex>=mediaFiles.length){
showFinalMessage();
return;
}

const file=mediaFiles[currentIndex];

if(file.endsWith(".mp4")){

container.innerHTML="";

const video=document.createElement("video");

video.src=file;
video.autoplay=true;

video.classList.add("video-style");

video.onended=()=>{

currentIndex++;
playMedia();

};

container.appendChild(video);

}else{

const img=document.createElement("img");

img.src=file;

img.classList.add("photo-style");

img.style.top=Math.random()*70+"%";
img.style.left=Math.random()*75+"%";
img.style.transform=`rotate(${Math.random()*20-10}deg)`;

container.appendChild(img);

setTimeout(()=>{

img.style.opacity="0";

setTimeout(()=>img.remove(),1000);

currentIndex++;
playMedia();

},5000);

}

}

/* CORAZONES */

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.classList.add("heart");
heart.innerHTML="💗";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(Math.random()*20+15)+"px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),10000);

},500);

}

/* ESTRELLAS */

function createStars(){

for(let i=0;i<60;i++){

const star=document.createElement("div");

star.classList.add("star");

star.style.top=Math.random()*100+"%";
star.style.left=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(star);

}

}

/* SUBTITULOS */

function syncSubtitles(){

const music=document.getElementById("music");
const subtitleDiv=document.getElementById("subtitles");



music.ontimeupdate=()=>{

const time=music.currentTime;

let active="";

for(let i=0;i<subtitles.length;i++){

if(time>=subtitles[i].time){
active=subtitles[i].text;
}

}

if(subtitleDiv.innerText!==active){

subtitleDiv.classList.remove("show");

setTimeout(()=>{

subtitleDiv.innerText=active;
subtitleDiv.classList.add("show");

},200);

}

};

music.onended=()=>{

music.currentTime=0;
music.play();

};

}

/* MENSAJE FINAL */

function showFinalMessage(){

document.getElementById("mediaContainer").innerHTML="";

document.getElementById("finalMessage").innerHTML=`

Te amo mucho mucho mucho muuuuuuuuuuuucho 💗
`;

document.getElementById("finalMessage").classList.remove("hidden");

}










