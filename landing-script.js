
const mainImage = document.querySelector('.product-image');
const thumbnails = document.querySelectorAll('.additional-images img');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
    });
});
