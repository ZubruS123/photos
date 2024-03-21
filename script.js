document.addEventListener('DOMContentLoaded', function () {
    const photos = document.querySelectorAll('.photo');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');

    photos.forEach(photo => {
        photo.addEventListener('click', function () {
            const imgSrc = this.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'flex';
        });
    });

    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });
});
