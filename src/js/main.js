const scrollableElement = document.body;

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        showBanner();
    } else {
        hideBanner();
    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

const banner = document.querySelector('.banner__scroll');
const lowerBanner = document.querySelector('.banner__bottomfix-container');

function hideBanner() {
    banner.style.bottom = '0rem';
}

function showBanner() {
    banner.style.bottom = `${getBannerBottomMargin()}px`;
}

function getBannerBottomMargin() {
    return lowerBanner.offsetHeight;
}
