function addEl(tag, parent, className, text) {
  const el = document.createElement(tag);
  if (parent) {
    parent.append(el);
  }
  if (className) {
    el.className = className;
  }
  if (text) {
    el.append(text);
  }
  return el;
}

const header = addEl('header', document.body, 'header');
const main = addEl('main', document.body, 'main');
const footer = addEl('footer', document.body, 'footer');
const nav = addEl('nav', header, 'nav');
const navUl = addEl('ul', nav, 'navUl');
let navItems = ['Contacts', 'About Me', 'Skills', 'Code', 'Education', 'Experience'];
navItems = navItems.map((textContent) => addEl('li', navUl, 'nav-item', textContent));
//const sectionContacts = addEl('section', main, 'section contacts')
//const contactsHeader = addEl('h1', sectionContacts, 'name', 'Muzipova Anastasiia')
let sections = ['contacts', 'about-me', 'skills', 'code', 'education', 'experience'];
sections = sections.map((section) => addEl('section', main, `section ${section}`));
sections[0].classList.add('top-section');
const photoWrapper = addEl('div', sections[0], 'photo-wrapper');
const photo = addEl('img', photoWrapper, 'photo');
photo.alt = 'photo';
photo.src = './assets/photo.jpg';
const infoWrapper = addEl('div', sections[0], 'info-wrapper');
addEl('h1', infoWrapper, 'name', 'Muzipova Anastasiia');
const contactInfo = addEl('div', infoWrapper, 'contact-info');
addEl('h2', contactInfo, 'contacts heading', 'Contacts');
const contactsUL = addEl('ul', contactInfo, 'contacts-ul');
let contactLI = ['Location: Odesa, Ukraine', 'Email: ', 'Discord: ', 'Github: '];
contactLI = contactLI.map((text) => addEl('li', contactsUL, 'contacts-list-item', text));
addEl('a', contactLI[1], 'link', 'muzipovanastia@gmail.com').href =
  'mailto:muzipovanastia@gmail.com';
addEl('a', contactLI[2], 'link', 'Mideli#7998').href =
  'https://discordapp.com/users/408488991235637248/';
addEl('a', contactLI[3], 'link', 'Mideli37').href = 'https://github.com/Mideli37';

// section about me

addEl('h2', sections[1], 'about heading', 'About me');
addEl('div', sections[1], 'division');
addEl(
  'p',
  sections[1],
  'about-info',
  'Have a good communication skills, a very positive, proactive, responsible, and flexible person. My goal is to get new useful knowledge and skills in the field of front-end development.',
);

// section skills

let skills = {
  JS: './assets/skill-icons/javascript.svg',
  HTML: './assets/skill-icons/html5.png',
  CSS: './assets/skill-icons/css.svg',
  SASS: './assets/skill-icons/sass.png',
  Git: './assets/skill-icons/git.png',
  Webpack: './assets/skill-icons/webpack.png',
  RestAPI: './assets/skill-icons/rest-api.png',
  VSCode: './assets/skill-icons/Visual_Studio_Code.png',
  Python: './assets/skill-icons/python.png',
  Figma: './assets/skill-icons/figma.png',
};

addEl('h2', sections[2], 'skills heading', 'Skills');
addEl('div', sections[2], 'division');
const skillWrapper = addEl(
  'ul',
  sections[2],
  'skills-info'
);

for (let el in skills) {
  const element = addEl('li', skillWrapper, 'skills-list-item', el)
  const icon = addEl('img', element, 'skill-icon')
  icon.alt = `${el} icon`
  icon.src = skills[el]
}
