// Frist window

function mobileMenu() {
  const window = document.querySelector('.Purple');
  window.classList.replace('not-active', 'active');
}

function closeMenu() {
  const window = document.querySelector('.Purple');
  window.classList.replace('active', 'not-active');
}

document.getElementById('hamb-btn').addEventListener('click', mobileMenu);
document.getElementById('close').addEventListener('click', closeMenu);
const anchorElm = document.querySelectorAll('.pop-window');

for (let i = 0; i < anchorElm.length; i += 1) {
  anchorElm[i].addEventListener('click', closeMenu);
}

// Second window
const bodyDiv = document.querySelector('.pop-body');

// Project data
const ProjectData = [
  {
    name: 'tonic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    descriptionD:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    image: '/tonicphoto.png',
    imageD: '/desktopjs.png',
    technologies: ['html', 'css', 'javascript'],
    technologiesD: [
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'Bootstraps',
    ],
    linklive: 'https://yayoamigo.github.io/mobile-template/',
    linksource: 'https://github.com/yayoamigo/mobile-template',
  },
  {
    name: 'Multi-Post Stories',
    image: '/multiphoto.png',
    imageD: '/2desktop.png',
  },
  {
    name: 'Facebook 360',
    image: '/yogaphoto.png',
    imageD: '/3desktop.png',
  },
  {
    name: 'Uber Navigation',
    image: '/lastphoto.png',
    imageD: '/4desktop.png',
  },
];

// First card
function addModal1() {
  const Popdiv = document.createElement('div');
  Popdiv.classList.add('active');
  bodyDiv.appendChild(Popdiv);
  Popdiv.classList.add('pop-up');
  Popdiv.classList.replace('not-active', 'active');
  const divContent = `  <div class="pop-up-inside">
  <div class="regular-flex">
    <div class="tonic-title2">
      <h2>${ProjectData[0].name}</h2>
      <a class="Modalb">
      <img src="/blackclose.png" alt="x">
    </a>
    </div>
    <div class="tonic-info2">
      <div class="tonic-span"><span>CANOPY</span></div>
      <div class="dot"><img src="doticon.png"></div>
      <div class="tonic-p"><p>Back End Dev</p></div>
      <div class="dot"><img src="doticon.png"></div>
      <div class="tonic-p"><p>2015</p></div>
    </div>
    <header class="photo-pop">
      <img class="mobile-img" src="${ProjectData[0].image}" alt="multi-post-stories">
      <img class="desktop-img2" src="${ProjectData[0].imageD}" alt="tonic">
    </header>
  </div>
  <div class="pop-bottom-M"> 
      <div class="project-p2">
        <p class="mobile-p">
        ${ProjectData[0].description}
        </p>
      </div>
      <div class="skills2-mobile">
        <ul>
          <li>
          ${ProjectData[0].technologies[0]}
          </li>
          <li>
          ${ProjectData[0].technologies[1]}
          </li>
          <li>
          ${ProjectData[0].technologies[2]}
          </li>
        </ul>
      </div>
      <nav class="see2">
        <a href="${ProjectData[0].linklive}" target="_blank" class="regular-flex2">
        See live <span> <img src="/seelive.png" alt="live"> </span> 
        </a>
        <a href="${ProjectData[0].linksource}" target="_blank" class="regular-flex2">
          See source <span> <img src="/littlegit.png" alt="git"> </span> 
          </a>
      </nav>
  </div>
  <div class="pop-bottom-D"> 
    <div class="project-p2">
      <p class="mobile-p">
      ${ProjectData[0].descriptionD}
      </p>
    </div>
    <div id="D-bottom-btn"> 
      <div class="skills2-desktop">
        <ul>
          <li>
          ${ProjectData[0].technologiesD[0]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[1]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[2]}
          </li>
        </ul>
        <ul>
          <li>
          ${ProjectData[0].technologiesD[3]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[4]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[5]}
          </li>
        </ul>
      </div>
      <nav class="see2">
        <a href="${ProjectData[0].linklive}" target="_blank" class="regular-flex2">
        See live <span> <img src="/seelive.png" alt="live"> </span> 
        </a>
        <a href="${ProjectData[0].linksource}" target="_blank" class="regular-flex2">
          See source <span> <img src="/littlegit.png" alt="git"> </span> 
          </a>
      </nav>
    </div>
</div>
</div>`;

  Popdiv.insertAdjacentHTML('beforeend', divContent);
  // Close function
  const closebtn = document.querySelector('.Modalb');
  closebtn.classList.add('close-x');
  document.querySelector('.close-x').addEventListener('click', () => {
    const window = document.querySelector('.pop-up');
    window.classList.replace('active', 'not-active');
    window.remove();
  });
}

document.getElementById('see-project1').addEventListener('click', addModal1);

// Second card
function addModal2() {
  const Popdiv = document.createElement('div');
  Popdiv.classList.add('active');
  bodyDiv.appendChild(Popdiv);
  Popdiv.classList.add('pop-up');
  Popdiv.classList.replace('not-active', 'active');
  const divContent = `  <div class="pop-up-inside">
  <div class="regular-flex">
    <div class="tonic-title2">
      <h2>${ProjectData[1].name}</h2>
      <a class="Modalb">
      <img src="/blackclose.png" alt="x">
    </a>
    </div>
    <div class="tonic-info2">
      <div class="tonic-span"><span>FACEBOOK</span></div>
      <div class="dot"><img src="doticon.png"></div>
      <div class="tonic-p"><p>Full Stack Dev</p></div>
      <div class="dot"><img src="doticon.png"></div>
      <div class="tonic-p"><p>2015</p></div>
    </div>
    <header class="photo-pop">
      <img class="mobile-img" src="${ProjectData[1].image}" alt="multi-post-stories">
      <img class="desktop-img2" src="${ProjectData[1].imageD}" alt="tonic">
    </header>
  </div>
  <div class="pop-bottom-M"> 
      <div class="project-p2">
        <p class="mobile-p">
        ${ProjectData[0].description}
        </p>
      </div>
      <div class="skills2-mobile">
        <ul>
          <li>
          ${ProjectData[0].technologies[0]}
          </li>
          <li>
          ${ProjectData[0].technologies[1]}
          </li>
          <li>
          ${ProjectData[0].technologies[2]}
          </li>
        </ul>
      </div>
      <nav class="see2">
        <a href="${ProjectData[0].linklive}" target="_blank" class="regular-flex2">
        See live <span> <img src="/seelive.png" alt="live"> </span> 
        </a>
        <a href="${ProjectData[0].linksource}" target="_blank" class="regular-flex2">
          See source <span> <img src="/littlegit.png" alt="git"> </span> 
          </a>
      </nav>
  </div>
  <div class="pop-bottom-D"> 
    <div class="project-p2">
      <p class="mobile-p">
      ${ProjectData[0].descriptionD}
      </p>
    </div>
    <div id="D-bottom-btn"> 
      <div class="skills2-desktop">
        <ul>
          <li>
          ${ProjectData[0].technologiesD[0]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[1]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[2]}
          </li>
        </ul>
        <ul>
          <li>
          ${ProjectData[0].technologiesD[3]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[4]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[5]}
          </li>
        </ul>
      </div>
      <nav class="see2">
        <a href="${ProjectData[0].linklive}" target="_blank" class="regular-flex2">
        See live <span> <img src="/seelive.png" alt="live"> </span> 
        </a>
        <a href="${ProjectData[0].linksource}" target="_blank" class="regular-flex2">
          See source <span> <img src="/littlegit.png" alt="git"> </span> 
          </a>
      </nav>
    </div>
</div>
</div>`;

  Popdiv.insertAdjacentHTML('beforeend', divContent);
  // Close function
  const closebtn = document.querySelector('.Modalb');
  closebtn.classList.add('close-x');
  document.querySelector('.close-x').addEventListener('click', () => {
    const window = document.querySelector('.pop-up');
    window.classList.replace('active', 'not-active');
    window.remove();
  });
}

document.getElementById('see-project2').addEventListener('click', addModal2);
document.getElementById('see-project-d2').addEventListener('click', addModal2);

// Third card
function addModal3() {
  const Popdiv = document.createElement('div');
  Popdiv.classList.add('active');
  bodyDiv.appendChild(Popdiv);
  Popdiv.classList.add('pop-up');
  Popdiv.classList.replace('not-active', 'active');
  const divContent = `  <div class="pop-up-inside">
  <div class="regular-flex">
    <div class="tonic-title2">
      <h2>${ProjectData[2].name}</h2>
      <a class="Modalb">
      <img src="/blackclose.png" alt="x">
    </a>
    </div>
    <div class="tonic-info2">
      <div class="tonic-span"><span>FACEBOOK</span></div>
      <div class="dot"><img src="doticon.png"></div>
      <div class="tonic-p"><p>Full Stack Dev</p></div>
      <div class="dot"><img src="doticon.png"></div>
      <div class="tonic-p"><p>2015</p></div>
    </div>
    <header class="photo-pop">
      <img class="mobile-img" src="${ProjectData[2].image}" alt="multi-post-stories">
      <img class="desktop-img2" src="${ProjectData[2].imageD}" alt="tonic">
    </header>
  </div>
  <div class="pop-bottom-M"> 
      <div class="project-p2">
        <p class="mobile-p">
        ${ProjectData[0].description}
        </p>
      </div>
      <div class="skills2-mobile">
        <ul>
          <li>
          ${ProjectData[0].technologies[0]}
          </li>
          <li>
          ${ProjectData[0].technologies[1]}
          </li>
          <li>
          ${ProjectData[0].technologies[2]}
          </li>
        </ul>
      </div>
      <nav class="see2">
        <a href="${ProjectData[0].linklive}" target="_blank" class="regular-flex2">
        See live <span> <img src="/seelive.png" alt="live"> </span> 
        </a>
        <a href="${ProjectData[0].linksource}" target="_blank" class="regular-flex2">
          See source <span> <img src="/littlegit.png" alt="git"> </span> 
          </a>
      </nav>
  </div>
  <div class="pop-bottom-D"> 
    <div class="project-p2">
      <p class="mobile-p">
      ${ProjectData[0].descriptionD}
      </p>
    </div>
    <div id="D-bottom-btn"> 
      <div class="skills2-desktop">
        <ul>
          <li>
          ${ProjectData[0].technologiesD[0]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[1]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[2]}
          </li>
        </ul>
        <ul>
          <li>
          ${ProjectData[0].technologiesD[3]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[4]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[5]}
          </li>
        </ul>
      </div>
      <nav class="see2">
        <a href="${ProjectData[0].linklive}" target="_blank" class="regular-flex2">
        See live <span> <img src="/seelive.png" alt="live"> </span> 
        </a>
        <a href="${ProjectData[0].linksource}" target="_blank" class="regular-flex2">
          See source <span> <img src="/littlegit.png" alt="git"> </span> 
          </a>
      </nav>
    </div>
</div>
</div>`;

  Popdiv.insertAdjacentHTML('beforeend', divContent);
  // Close function
  const closebtn = document.querySelector('.Modalb');
  closebtn.classList.add('close-x');
  document.querySelector('.close-x').addEventListener('click', () => {
    const window = document.querySelector('.pop-up');
    window.classList.replace('active', 'not-active');
    window.remove();
  });
}

document.getElementById('see-project3').addEventListener('click', addModal3);
document.getElementById('see-project-d3').addEventListener('click', addModal3);

// Forth card
function addModal4() {
  const Popdiv = document.createElement('div');
  Popdiv.classList.add('active');
  bodyDiv.appendChild(Popdiv);
  Popdiv.classList.add('pop-up');
  Popdiv.classList.replace('not-active', 'active');
  const divContent = `  <div class="pop-up-inside">
  <div class="regular-flex">
    <div class="tonic-title2">
      <h2>${ProjectData[3].name}</h2>
      <a class="Modalb">
      <img src="/blackclose.png" alt="x">
    </a>
    </div>
    <div class="tonic-info2">
      <div class="tonic-span"><span>FACEBOOK</span></div>
      <div class="dot"><img src="doticon.png"></div>
      <div class="tonic-p"><p>Full Stack Dev</p></div>
      <div class="dot"><img src="doticon.png"></div>
      <div class="tonic-p"><p>2015</p></div>
    </div>
    <header class="photo-pop">
      <img class="mobile-img" src="${ProjectData[3].image}" alt="multi-post-stories">
      <img class="desktop-img2" src="${ProjectData[3].imageD}" alt="tonic">
    </header>
  </div>
  <div class="pop-bottom-M"> 
      <div class="project-p2">
        <p class="mobile-p">
        ${ProjectData[0].description}
        </p>
      </div>
      <div class="skills2-mobile">
        <ul>
          <li>
          ${ProjectData[0].technologies[0]}
          </li>
          <li>
          ${ProjectData[0].technologies[1]}
          </li>
          <li>
          ${ProjectData[0].technologies[2]}
          </li>
        </ul>
      </div>
      <nav class="see2">
        <a href="${ProjectData[0].linklive}" target="_blank" class="regular-flex2">
        See live <span> <img src="/seelive.png" alt="live"> </span> 
        </a>
        <a href="${ProjectData[0].linksource}" target="_blank" class="regular-flex2">
          See source <span> <img src="/littlegit.png" alt="git"> </span> 
          </a>
      </nav>
  </div>
  <div class="pop-bottom-D"> 
    <div class="project-p2">
      <p class="mobile-p">
      ${ProjectData[0].descriptionD}
      </p>
    </div>
    <div id="D-bottom-btn"> 
      <div class="skills2-desktop">
        <ul>
          <li>
          ${ProjectData[0].technologiesD[0]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[1]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[2]}
          </li>
        </ul>
        <ul>
          <li>
          ${ProjectData[0].technologiesD[3]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[4]}
          </li>
          <li>
          ${ProjectData[0].technologiesD[5]}
          </li>
        </ul>
      </div>
      <nav class="see2">
        <a href="${ProjectData[0].linklive}" target="_blank" class="regular-flex2">
        See live <span> <img src="/seelive.png" alt="live"> </span> 
        </a>
        <a href="${ProjectData[0].linksource}" target="_blank" class="regular-flex2">
          See source <span> <img src="/littlegit.png" alt="git"> </span> 
          </a>
      </nav>
    </div>
</div>
</div>`;

  Popdiv.insertAdjacentHTML('beforeend', divContent);
  // Close function
  const closebtn = document.querySelector('.Modalb');
  closebtn.classList.add('close-x');
  document.querySelector('.close-x').addEventListener('click', () => {
    const window = document.querySelector('.pop-up');
    window.classList.replace('active', 'not-active');
    window.remove();
  });
}

document.getElementById('see-project4').addEventListener('click', addModal4);
document.getElementById('see-project-d4').addEventListener('click', addModal4);

//Form validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');

form.addEventListener('submit', (e) => {});
