// dropdown script
const dropDown = document.querySelector('.dropDown');
const linkDropDown = document.querySelector('.linkDropDown');
const dropDownItems = document.querySelector('.dropDown-items');
const dropDownIcon = document.querySelector('.dropdown-icon')

linkDropDown.addEventListener('click', () => {
  dropDownIcon.classList.toggle('active')
  dropDownItems.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropDown') && dropDownItems.classList.contains('active')) {
    dropDownItems.classList.remove('active');
    dropDownIcon.classList.remove('active')
  }
});


//hamburger menu script
const hamburgerMenu = document.querySelector('.hamburger-menu')
const navItems = document.querySelector('.nav-items')
const closeIcon = document.querySelector('#close-icon')


hamburgerMenu.addEventListener('click', () => {
  navItems.classList.toggle('active')
  closeIcon.classList.toggle('active')
  hamburgerMenu.style.opacity = '0'
})

document.addEventListener('click', (event) => {
  if (event.target.closest('#close-icon') && navItems.classList.contains('active') || event.target.closest('#close-icon') && closeIcon.classList.contains('active')) {
    navItems.classList.remove('active');
    closeIcon.classList.remove('active')
    hamburgerMenu.style.opacity = '1'
  }
})