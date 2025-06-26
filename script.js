// Configurable URLs
const continueUrl = 'https://www.appsheet.com/start/7616233b-0844-4321-ade4-e4fa1ff3a86b?fbclid=IwY2xjawKzdlZleHRuA2FlbQIxMQABHhQfdptrd-MI9jTwrhLcIVUy7EpO9eGbHP7PLE8xapi2Xrq3kjgnhwJk-XGj_aem_vIK1pgj_Qg1dbqnZW_xE4w&platform=desktop#appName=VIAWALLS-523334627&sort=[]&table=ABOUT&view=VIA';  // Destination URL
const aboutMeUrl = 'https://jbarles003.my.canva.site/';           // About Me button URL

// Default images
const defaultAvatar = 'assets/default-avatar.jpg';
const defaultCover = 'assets/default-cover.jpg';

// DOM Elements
const homeAvatar = document.getElementById('homeAvatar');
const homeCover = document.getElementById('homeCover');
const continueBtn = document.getElementById('continueBtn');
const aboutMeBtn = document.getElementById('aboutMeBtn');
const countdownText = document.getElementById('countdownText');

// Load avatar and cover
const savedAvatar = localStorage.getItem('avatar');
const savedCover = localStorage.getItem('cover');

function setAvatar(src) {
  homeAvatar.src = src;
}
function setCover(src) {
  homeCover.style.backgroundImage = `url('${src}')`;
}

setAvatar(savedAvatar || defaultAvatar);
setCover(savedCover || defaultCover);

// Manual click
continueBtn.addEventListener('click', () => {
  window.location.href = continueUrl;
});

// About Me
aboutMeBtn.addEventListener('click', () => {
  window.location.href = aboutMeUrl;
});

// Timer countdown for auto-redirect
let sec = 7;
countdownText.textContent = `You will be redirected automatically in ${sec} seconds.`;

const countdown = setInterval(() => {
  sec--;
  countdownText.textContent = `You will be redirected automatically in ${sec} seconds.`;
  if (sec === 0) {
    clearInterval(countdown);
    window.location.href = continueUrl;
  }
}, 1000);
