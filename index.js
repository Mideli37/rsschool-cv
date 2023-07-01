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
let sections = ['contacts', 'about-me', 'skills', 'code', 'education', 'experience', 'languages'];
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
const skillWrapper = addEl('ul', sections[2], 'skills-info');

for (let el in skills) {
  const element = addEl('li', skillWrapper, 'skills-list-item', el);
  const icon = addEl('img', element, 'skill-icon');
  icon.alt = `${el} icon`;
  icon.src = skills[el];
}

// section code

addEl('h2', sections[3], 'code heading', 'Code Example');
addEl('div', sections[3], 'division');
addEl('code', addEl('pre', sections[3], 'code-example-wrapper'), 'code-example', `function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0 && i !== num) {
      return false;
    }
  }
  return true;
}`,
);

// section projects

// section education

addEl('h2', sections[5], 'education heading', 'Education');
addEl('div', sections[5], 'division');
const educationUL = addEl('ul', sections[5], 'education-info');

let educationList = [
  'University - Kyiv Medical University, Medical faculty (in progress)',
  'QATestLab Course "The Fundamentals of Software Testing" ',
  'RS Schools Course «JavaScript/Front-end. Stage 0» ',
  'RS Schools Course «JavaScript/Front-end. Stage 1»',
];
educationList = educationList.map((el) => addEl('li', educationUL, 'education-list-item', `${el}`));
const QATestLabCertificate = addEl('a', educationList[1], 'certificate link', '(certificate)');
const RSCertificateLink = addEl('a', educationList[2], 'certificate link', '(certificate)');
RSCertificateLink.href = 'https://app.rs.school/certificate/8vomotnk';
QATestLabCertificate.href = 'https://i.imgur.com/yvVuOAa.jpeg';

// section languages

addEl('h2', sections[6], 'languages heading', 'Languages');
addEl('div', sections[6], 'division');
const languagesUL = addEl('ul', sections[6], 'languages-info');

let languagesList = [
  'Ukrainian - native speaker',
  'Russian - fluent',
  'English - intermediate',
  'Polish - basic',
];
languagesList = languagesList.map((el) => addEl('li', languagesUL, 'education-list-item', `${el}`));