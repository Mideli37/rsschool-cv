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
navItems.map((textContent) => addEl('li', navUl, 'nav-item', textContent));
