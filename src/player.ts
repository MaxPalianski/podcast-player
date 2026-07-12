const audio = new Audio();

/* const backBtn = document.querySelector('.btn-back');
if (backBtn) {
    backBtn.addEventListener('click', () => {
        audio.back;
    });
} */
const play_pauseBtn = document.querySelector('.btn-play-pause');
if (play_pauseBtn) {
    play_pauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            play_pauseBtn.textContent = '⏸️';
        } else {
            audio.pause();
            play_pauseBtn.textContent = '▶️';
        }
    });
}
/*
const forwardBtn = document.querySelector('.btn-forward');
if (forwardBtn) {
    forwardBtn.addEventListener('click', () => {
        audio.next;
    });
} */
export function playPodcast (url: string) {
    audio.src = url
    audio.play();
    if (play_pauseBtn) {
        play_pauseBtn.textContent = '⏸️';
    }
};