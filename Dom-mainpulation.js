function mobileMenu() {
  if (document.getElementById('Purple').style.display === 'none') {
    document.getElementById('Purple').style.display = 'flex';
  } else {
    document.getElementById('Purple').style.display = 'none';
  }
}
document.getElementById('hamb-btn').addEventListener('click', mobileMenu);
document.getElementById('close').addEventListener('click', mobileMenu);
const anchorElm = document.querySelectorAll('.pop-window');
/* eslint-disable-next-line no-plusplus */
for (let i = 0; i < anchorElm.length; i += 1) {
  anchorElm[i].addEventListener('click', mobileMenu);
}
