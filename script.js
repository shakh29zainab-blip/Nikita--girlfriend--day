// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loadingScreen");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 1500);
    }

});


// ===============================
// Surprise Video Popup
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");
const videoPopup = document.getElementById("videoPopup");
const closeVideo = document.querySelector(".close-video");
const loveVideo = document.getElementById("loveVideo");

if (surpriseBtn) {

    surpriseBtn.onclick = () => {

        videoPopup.style.display = "flex";

        loveVideo.play();

    };

}

if (closeVideo) {

    closeVideo.onclick = () => {

        videoPopup.style.display = "none";

        loveVideo.pause();

        loveVideo.currentTime = 0;

    };

}


// ===============================
// Letter Popup
// ===============================

const openLetter = document.getElementById("openLetter");

const letterPopup = document.getElementById("letterPopup");

const closeLetter = document.querySelector(".close-letter");

if (openLetter) {

    openLetter.onclick = () => {

        letterPopup.style.display = "flex";

    };

}

if (closeLetter) {

    closeLetter.onclick = () => {

        letterPopup.style.display = "none";

    };

}


// ===============================
// Image Viewer
// ===============================

const images = document.querySelectorAll(".gallery-image");

const imageViewer = document.getElementById("imageViewer");

const previewImage = document.getElementById("previewImage");

const closeImage = document.querySelector(".close-image");

images.forEach(img => {

    img.addEventListener("click", () => {

        previewImage.src = img.src;

        imageViewer.style.display = "flex";

    });

});

if (closeImage) {

    closeImage.onclick = () => {

        imageViewer.style.display = "none";

    };

}


// ===============================
// Spotify Songs
// ===============================

const audioPlayer = document.getElementById("audioPlayer");

const playButtons = document.querySelectorAll(".play-song");

playButtons.forEach(button => {

    button.addEventListener("click", () => {

        const song = button.dataset.song;

        audioPlayer.src = song;

        audioPlayer.play();

    });

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// Close Popup Outside
// ===============================

window.onclick = function(e){

    if(e.target === videoPopup){

        videoPopup.style.display="none";

        loveVideo.pause();

    }

    if(e.target === letterPopup){

        letterPopup.style.display="none";

    }

    if(e.target === imageViewer){

        imageViewer.style.display="none";

    }

}


// ===============================
// Floating Hearts Animation Delay
// ===============================

const hearts = document.querySelectorAll(".floating-hearts span");

hearts.forEach((heart,index)=>{

    heart.style.animationDelay = (index*1.5)+"s";

});


// ===============================
// Background Music (Optional)
// ===============================

const bgMusic = document.getElementById("backgroundMusic");

document.body.addEventListener("click",()=>{

    if(bgMusic){

        bgMusic.play().catch(()=>{});

    }

},{once:true});
