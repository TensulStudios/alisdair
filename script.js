const songs = [
    'BU6xZNigZ_U',
    '23tYrlu4lQc',
    'Nx96OTsjBkM'
];

const randomSong = songs[Math.floor(Math.random() * songs.length)];
let isPlaying = false;

window.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('youtubePlayer');
    const musicControl = document.getElementById('musicControl');
    const musicIcon = document.getElementById('musicIcon');
    const entryOverlay = document.getElementById('entryOverlay');

    entryOverlay.addEventListener('click', function() {
        entryOverlay.classList.add('hidden');
        player.src = `https://www.youtube.com/embed/${randomSong}?autoplay=1&loop=1&playlist=${randomSong}`;
        musicIcon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>';
        musicControl.classList.add('playing');
        isPlaying = true;
    });

    musicControl.addEventListener('click', function() {
        if (!isPlaying) {
            player.src = `https://www.youtube.com/embed/${randomSong}?autoplay=1&loop=1&playlist=${randomSong}`;
            musicIcon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>';
            musicControl.classList.add('playing');
            isPlaying = true;
        } else {
            player.src = '';
            musicIcon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>';
            musicControl.classList.remove('playing');
            isPlaying = false;
        }
    });

    const mouseGlow = document.getElementById('mouseGlow');
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.15;
        glowY += (mouseY - glowY) * 0.15;
        mouseGlow.style.left = glowX + 'px';
        mouseGlow.style.top = glowY + 'px';
        requestAnimationFrame(animateGlow);
    }

    animateGlow();
});
