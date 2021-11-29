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
const currentSection = document.querySelectorAll('section');
const Ul = document.querySelector('ul');
const documentFragment = document.createDocumentFragment();
const goTop = document.getElementById('topScroll');
/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//bulid the navbar
currentSection.forEach((section) => {
  //Extract IdAttribute value from the section and store it in variable
  const id = section.getAttribute('id');
  const list = document.createElement('li');
  const link = document.createElement('a');
  // customize navbar
  link.classList.add('menu__link');
  // get ref
  link.setAttribute('href', id);
  // Scroll to target section
  link.addEventListener('click', (e) => {
    e.preventDefault(); // to avoid reload the page
    section.scrollIntoView({ behavior: 'smooth' });
  });
  // add currentSection name
  const text = document.createTextNode(section.getAttribute('data-nav'));
  link.appendChild(text);
  list.appendChild(link);
  documentFragment.appendChild(list);
});
//append in documentFragment to make performance improvements
Ul.appendChild(documentFragment);

window.addEventListener('scroll', () => {
  //  For Chek What Is Section On Screen Now and remove the active class
  const activesec = document.getElementsByClassName('your-active-class')[0];

  activesec !== undefined
    ? activesec.classList.remove('your-active-class')
    : null;
  const ActiveNav = document.getElementsByClassName('navactive')[0];
  ActiveNav !== undefined ? ActiveNav.classList.remove('navactive') : null;

  // Set currentSection as active
  currentSection.forEach((section) => {
    const react = section.getBoundingClientRect();
    if (react.Top >= -50 && react.Top < 380) {
      section.classList.add('your-active-class');
      const activeList = document.querySelectorAll(`a[href='${section.id}']`)[0]
        .parentElement;
      activeList.classList.add('navactive');
      // Go To Top section
      section.id == 'section1'
        ? (goTOP.style.display = 'none')
        : (goTOP.style.display = 'block');
    }
  });
});
