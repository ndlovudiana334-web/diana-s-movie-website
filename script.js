function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = trailer.querySelector('video');
    const isOpening = !trailer.classList.contains('active');

    trailer.classList.toggle('active', isOpening);

    if (isOpening) {
        video.play().catch((error) => {
            console.error('Unable to play the trailer:', error);
        });
    } else {
        video.pause();
    }
}

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    banner.style.backgroundImage = `url("./${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    if (title) {
        document.querySelectorAll('.content').forEach(content => {
            content.classList.toggle('active', content.classList.contains(title));
        });
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        const banner = document.querySelector('.banner');
        const isKids = link.dataset.filter === 'kids';

        event.preventDefault();
        banner.classList.toggle('kids-active', isKids);
    });
});
