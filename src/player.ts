const audio = new Audio();


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




export function playPodcast(url: string) {
    audio.pause();
    audio.src = url;
    audio.play()
    .then(() => {
        if (play_pauseBtn) {
            play_pauseBtn.textContent = '⏸️';
        }
    })
        .catch(error => {
            console.error("ERROR", error);
        });
}