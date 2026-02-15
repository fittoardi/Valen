const startBtn = document.getElementById("startBtn");
const content = document.getElementById("content");
const text = document.getElementById("text");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const message = `Hai sayangkuh 🤍
aku minta maaf banget yaa. aku sering ngerusak plan mu,
dan aku juga kadang serinng ngeremehin perasaan kamu.
tapi sebenernya aku nggak ngeremehin perasaan kamu kok,
iyaa maaf juga kadang aku juga kurang peka sama perasaanmu.
dan juga aku minta maaf kalau bila aku masih belum setara sama kamu.
dan aku juga minta maaf kalau aku masih belum bisa jadi yang terbaik buat kamu.
tapi aku janji aku akan terus belajar buat jadi yang terbaik buat kamu.

Tapi satu hal yang pasti…
aku tulus sayang kamu 🤍
Aku sayang kamu banget, dan aku nggak mau kehilangan kamu.
Happy Valentine’s Day ya sayangkuh 🥰❤️
maafkan aku membuat ini sajah buat kamu, aku harap kamu suka.`;

let i = 0;

startBtn.onclick = () => {
content.classList.remove("hidden");
startBtn.style.display="none";
musicBtn.classList.remove("hidden");
music.play();
musicBtn.innerHTML="⏸ Pause Music";
typeText();
};

musicBtn.onclick = () => {
if(music.paused){
music.play();
musicBtn.innerHTML="⏸ Pause Music";
}else{
music.pause();
musicBtn.innerHTML="🎵 Play Music";
}
};

function typeText(){
if(i < message.length){
text.innerHTML += message.charAt(i);
i++;
setTimeout(typeText,50);
}
}

// Floating hearts
setInterval(()=>{
const heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=Math.random()*20+15+"px";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
},250);

function love(){
confetti();
alert("Yeayyy… makasih ya sayangkuh 🥺❤️ Aku janji akan lebih baik lagi buat kamu.");
}

// Mini confetti
function confetti(){
for(let i=0;i<30;i++){
const c=document.createElement("div");
c.innerHTML="💖";
c.style.position="absolute";
c.style.left=Math.random()*100+"vw";
c.style.top="0";
document.body.appendChild(c);
c.animate([
{transform:"translateY(0)"},
{transform:"translateY(100vh)"}
],{duration:2000});
setTimeout(()=>c.remove(),2000);
}
}
