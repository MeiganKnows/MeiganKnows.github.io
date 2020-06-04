//find all the images with [data-src] properties
const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 50px 0px"
};

//changes placeholder image to actual image when activated
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onLoad = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}