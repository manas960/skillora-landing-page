const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('.newsletter form').addEventListener('submit', event => {
  event.preventDefault();
  const email = event.currentTarget.querySelector('input').value.trim();
  if (email) {
    document.querySelector('.form-message').textContent = 'Thanks for subscribing! (Demo only)';
    event.currentTarget.reset();
  }
});
