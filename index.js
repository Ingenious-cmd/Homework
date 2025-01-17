function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message!');
});
