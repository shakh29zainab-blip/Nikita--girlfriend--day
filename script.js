/* ==========================================
        SURPRISE VIDEO + MUSIC
========================================== */

const surpriseBtn = document.getElementById("surpriseBtn");
const videoPopup = document.getElementById("videoPopup");
const closeVideo = document.getElementById("closeVideo");
const surpriseVideo = document.getElementById("surpriseVideo");
const bgMusic = document.getElementById("bgMusic");

if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {
        videoPopup.style.display = "flex";
        surpriseVideo.play();

        if (bgMusic) {
            bgMusic.play().catch(() => {});
        }
    });
}

if (closeVideo) {
    closeVideo.addEventListener("click", () => {
        videoPopup.style.display = "none";
        surpriseVideo.pause();
        surpriseVideo.currentTime = 0;
    });
}

window.addEventListener("click", (e) => {
    if (e.target === videoPopup) {
        videoPopup.style.display = "none";
        surpriseVideo.pause();
        surpriseVideo.currentTime = 0;
    }
});


/* ==========================================
            STORY SLIDER
========================================== */

const storyCards = document.querySelectorAll(".story-card");
const storyDots = document.querySelectorAll(".dot");
const prevStory = document.querySelector(".prevStory");
const nextStory = document.querySelector(".nextStory");

let storyIndex = 0;

function showStory(index){

    storyCards.forEach(card => card.classList.remove("active"));
    storyDots.forEach(dot => dot.classList.remove("active"));

    storyCards[index].classList.add("active");
    storyDots[index].classList.add("active");

}

if(nextStory){

nextStory.onclick=()=>{

storyIndex++;

if(storyIndex>=storyCards.length){

storyIndex=0;

}

showStory(storyIndex);

}

}

if(prevStory){

prevStory.onclick=()=>{

storyIndex--;

if(storyIndex<0){

storyIndex=storyCards.length-1;

}

showStory(storyIndex);

}

}

setInterval(()=>{

if(storyCards.length){

storyIndex++;

if(storyIndex>=storyCards.length){

storyIndex=0;

}

showStory(storyIndex);

}

},4500);


/* ==========================================
            MEMORY SLIDER
========================================== */

const memoryCards=document.querySelectorAll(".memory-card");
const memoryDots=document.querySelectorAll(".memoryDot");
const prevMemory=document.querySelector(".prevMemory");
const nextMemory=document.querySelector(".nextMemory");

let memoryIndex=0;

function showMemory(index){

memoryCards.forEach(card=>card.classList.remove("active"));

memoryDots.forEach(dot=>dot.classList.remove("active"));

memoryCards[index].classList.add("active");

memoryDots[index].classList.add("active");

}

if(nextMemory){

nextMemory.onclick=()=>{

memoryIndex++;

if(memoryIndex>=memoryCards.length){

memoryIndex=0;

}

showMemory(memoryIndex);

}

}

if(prevMemory){

prevMemory.onclick=()=>{

memoryIndex--;

if(memoryIndex<0){

memoryIndex=memoryCards.length-1;

}

showMemory(memoryIndex);

}

}

setInterval(()=>{

if(memoryCards.length){

memoryIndex++;

if(memoryIndex>=memoryCards.length){

memoryIndex=0;

}

showMemory(memoryIndex);

}

},4000);


/* ==========================================
        SMOOTH APPEAR
========================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition=".8s";

observer.observe(section);

});


/* ==========================================
        GALLERY PAUSE
========================================== */

const gallery=document.querySelector(".gallery-track");

if(gallery){

gallery.addEventListener("mouseenter",()=>{

gallery.style.animationPlayState="paused";

});

gallery.addEventListener("mouseleave",()=>{

gallery.style.animationPlayState="running";

});

}
