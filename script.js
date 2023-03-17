const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const site = urlParams.get('site');

const text = document
  .querySelector('.text > p');
  
text.textContent = site
  ? `${site}? ${text.textContent}`
  : text.textContent;
