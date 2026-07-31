// ======================================
// VIDEO + MUSIC
// ======================================

const surpriseBtn = document.getElementById("surpriseBtn");
const videoPopup = document.getElementById("videoPopup");
const closeVideo = document.getElementById("closeVideo");
const video = document.getElementById("surpriseVideo");
const music = document.getElementById("bgMusic");

if (surpriseBtn) {
  surpriseBtn.addEventListener("click", () => {
    videoPopup.style.display = "flex";
    video.currentTime = 0;
    video.play().catch(() => {});
    music.play().catch(() => {});
  });
}

if (closeVideo) {
  closeVideo.addEventListener("click", () => {
    video.pause();
    videoPopup.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === videoPopup) {
    video.pause();
    videoPopup.style.display = "none";
  }
});


// ======================================
// STORY SLIDER
// ======================================

const stories = document.querySelectorAll(".story-card");
const storyDots = document.querySelectorAll(".dot");
const nextStory = document.querySelector(".nextStory");
const prevStory = document.querySelector(".prevStory");

let storyIndex = 0;

function showStory(index){

stories.forEach(card=>card.classList.remove("active"));
storyDots.forEach(dot=>dot.classList.remove("active"));

stories[index].classList.add("active");
storyDots[index].classList.add("active");

}

if(nextStory){

nextStory.onclick=function(){

storyIndex++;

if(storyIndex>=stories.length){

storyIndex=0;

}

showStory(storyIndex);

};

}

if(prevStory){

prevStory.onclick=function(){

storyIndex--;

if(storyIndex<0){

storyIndex=stories.length-1;

}

showStory(storyIndex);

};

}

setInterval(()=>{

if(stories.length>0){

storyIndex++;

if(storyIndex>=stories.length){

storyIndex=0;

}

showStory(storyIndex);

}

},4000);


// ======================================
// MEMORY SLIDER
// ======================================

const memories=document.querySelectorAll(".memory-card");
const memoryDots=document.querySelectorAll(".memoryDot");
const nextMemory=document.querySelector(".nextMemory");
const prevMemory=document.querySelector(".prevMemory");

let memoryIndex=0;

function showMemory(index){

memories.forEach(card=>card.classList.remove("active"));

memoryDots.forEach(dot=>dot.classList.remove("active"));

memories[index].classList.add("active");

memoryDots[index].classList.add("active");

}

if(nextMemory){

nextMemory.onclick=function(){

memoryIndex++;

if(memoryIndex>=memories.length){

memoryIndex=0;

}

showMemory(memoryIndex);

};

}

if(prevMemory){

prevMemory.onclick=function(){

memoryIndex--;

if(memoryIndex<0){

memoryIndex=memories.length-1;

}

showMemory(memoryIndex);

};

}

setInterval(()=>{

if(memories.length>0){

memoryIndex++;

if(memoryIndex>=memories.length){

memoryIndex=0;

}

showMemory(memoryIndex);

}

},4500);


// ======================================
// FADE ANIMATION
// ======================================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("fade-up");

observer.observe(sec);

});


// ======================================
// GALLERY AUTO SCROLL
// ======================================

const galleryTrack=document.querySelector(".gallery-track");

if(galleryTrack){

galleryTrack.innerHTML+=galleryTrack.innerHTML;

}
