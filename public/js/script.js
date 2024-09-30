const updateIndicator = () => {
// 1) Get current position of the scroll in pixels
const winScroll = document.documentElement.scrollTop;

// scrollHeight - The total height of our document
// clientHeight - The viewable height of the element (in pixels) including padding
// 2) Get total height of scrollable part minus visible area
const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

// 3. Calculate progress in percentage
const scrolled = (winScroll / height) * 100;

// 4. Change CSS property width of the indicator bar based on scroll
document.getElementById('indicator').style.width = scrolled + '%';
};

document.addEventListener('scroll', updateIndicator);