/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
const currentSections = document.querySelectorAll('section');
const Ul = document.querySelector('ul');
const documentFragment = document.createDocumentFragment();
const goTop = document.getElementById('goTopButton');
/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//build the navbar
currentSections.forEach((section) => {
  //Extract id value from the section and store it in variable
  const navData = section.getAttribute('data-nav');

  const id = section.getAttribute('id');
  const newList = document.createElement('li');
  const links = document.createElement('a');
  // customize navbar
  links.classList.add('menu__link');
  // get ref
  links.setAttribute('href', id);
  // Scroll to target section
  links.addEventListener('click', (e) => {
    e.preventDefault();
    section.scrollIntoView({ behavior: 'smooth' });
  });
  // add currentSection name
  const text = document.createTextNode(navData);
  links.appendChild(text);
  newList.appendChild(links);
  documentFragment.appendChild(newList);
});
//append in documentFragment to make performance improvements
Ul.appendChild(documentFragment);

window.addEventListener('scroll', () => {
  //  For Check What Is Section On Screen Now and remove the active class
  const activeSection = document.getElementsByClassName('your-active-class')[0];

  activeSection !== undefined
    ? activeSection.classList.remove('your-active-class')
    : null;
  const ActiveNav = document.getElementsByClassName('navactive')[0];
  ActiveNav !== undefined ? ActiveNav.classList.remove('navactive') : null;

  // Set currentSection as active
  currentSections.forEach((section) => {
    const react = section.getBoundingClientRect();
    if (react.top >= -50 && react.top < 380) {
      section.classList.add('your-active-class');
      const activeList = document.querySelectorAll(`a[href='${section.id}']`)[0]
        .parentElement;

      activeList.classList.add('navactive');
      // Go To Top section
      section.id == 'section1'
        ? (goTop.style.display = 'none')
        : (goTop.style.display = 'block');
    }
  });
});
