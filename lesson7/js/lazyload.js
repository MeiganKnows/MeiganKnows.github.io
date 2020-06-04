//find all the images with [data-src] properties
const imagesToLoad = document.querySelectorAll('img[data-src]');

//changes placeholder image to actual image when activated
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribte('data-src'));
    image.onLoad = () => {
        image.removeAttribute('data-src');
    };
};


const imgOptions = {
    threshold: 0.5
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        imgObserver.observer(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}