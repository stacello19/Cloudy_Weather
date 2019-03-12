const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 2.5;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + '×';

    video.play();
    video.playbackRate = playbackRate;
  }

function pause(e){
    e.target.pause();
  }

speed.addEventListener('mousemove', handleMove);
video.addEventListener('click', pause);

let playBtn = document.querySelector(".playBtn");
playBtn.addEventListener('click', togglePlay);

var isPlaying = false;
function togglePlay() {
  if (isPlaying) {
    video.pause()
  } else {
    video.play();
  }
};
video.onplaying = function() {
  isPlaying = true;
  playBtn.style.display='none';
};
video.onpause = function() {
  isPlaying = false;
  playBtn.style.display= 'block';
};