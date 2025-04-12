/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

// Header toggle
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (0 < window.scrollY) {
    header.classList.add('header--active');
  } else {
    header.classList.remove('header--active');
  }
});

// Back To Top
new BackToTop();

// Drawer Menu
new DrawerMenu();

// Embed
new Embed();

// Fader
new Fader();

// Evil Icons
new EvilIcons();

// Preloader
new Preloader();

// Responsive Color
new ResponsiveColor();

// Slider
new Slider();
