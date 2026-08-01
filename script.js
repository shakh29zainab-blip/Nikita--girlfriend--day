const music = document.getElementById('bgMusic');
const toggle = document.getElementById('musicToggle');
const volume = document.getElementById('volume');
const letterOpen = document.getElementById('letterOpen');
const letterModal = document.getElementById('letterModal');
const closeModal = document.getElementById('closeModal');

music.volume = volume.value;

async function tryPlay(){
  try{
    await music.play();
    toggle.textContent = '❚❚';
  }catch(e){
    toggle.textContent = '▶';
  }
}

toggle.addEventListener('click', async () => {
  if (music.paused) {
    await tryPlay();
  } else {
    music.pause();
    toggle.textContent = '▶';
  }
});

volume.addEventListener('input', () => {
  music.volume = volume.value;
});

window.addEventListener('load', () => {
  tryPlay();
});

letterOpen.addEventListener('click', () => {
  letterModal.classList.add('show');
});

closeModal.addEventListener('click', () => {
  letterModal.classList.remove('show');
});

letterModal.addEventListener('click', (e) => {
  if(e.target === letterModal) letterModal.classList.remove('show');
});
