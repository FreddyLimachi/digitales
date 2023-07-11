function scrollValue() {
    var navbar = document.getElementById('navbar');
    var dropdown = document.getElementById('dropdown');
    var toggleBtn = document.getElementById('toggle');

    var scroll = window.scrollY;
    if (scroll < 100) {
        navbar.classList.remove('nav-color');
        dropdown.classList.remove('nav-large');
        toggleBtn.classList.remove('toggle_btn_color');
    } else {
        navbar.classList.add('nav-color');
        dropdown.classList.add('nav-large');
        toggleBtn.classList.add('toggle_btn_color');
    }
}

window.addEventListener('scroll', scrollValue);


const favicon = document.getElementById('favicon')
const isDark = window.matchMedia("(prefers-color-scheme: light)")

const logoDarkSrc = document.getElementById('logo-dark-src').dataset.src;
const logoLightSrc = document.getElementById('logo-light-src').dataset.src;

const changeFavicon = () => {
    if (isDark.matches) { favicon.href = logoDarkSrc }
    else { favicon.href = logoLightSrc }
}

changeFavicon()
isDark.addEventListener('change', changeFavicon);

var images = [];
images[0] = 'static/assets/duotone(3).webp';
images[1] = 'static/assets/duotone(4).webp';
images[2] = 'static/assets/duotone(5).webp';
images[3] = 'static/assets/duotone(1).webp';

var i = 0;
function changeImages() {
    document.slider.src = images[i];
    if (i < 3) {
        i++;
    } else {
        i = 0;
    }
}
setInterval(changeImages, 5000);

const toggleBtn = document.querySelector('.toggle_btn')
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open');
}
