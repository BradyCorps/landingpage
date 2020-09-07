const toggle = document.querySelector('.switch');
const body = document.getElementsByTagName("body")[0];


toggle.addEventListener('change', () => {
  if (body.classList.contains('darkmode')) {
    body.classList.remove('darkmode'),
      body.classList.add('lightmode')
  } else {
    body.classList.remove('lightmode'),
      body.classList.add('darkmode')
  }
});