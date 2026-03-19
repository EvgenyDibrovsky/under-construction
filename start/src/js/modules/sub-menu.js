export default function initSubMenuLeft() {
  const navLinks = document.querySelectorAll('.main-sub-menu');

  function setActiveLink(event) {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    event.target.classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('mouseenter', setActiveLink);
  });
}
