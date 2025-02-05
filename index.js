const helloHead = document.querySelector('.hello-head');

helloHead.addEventListener('click', () => {
  if (helloHead.classList.item(1) === 'red') {
    helloHead.classList.remove('red');
    helloHead.classList.add('blue');
  }
  else {
    helloHead.classList.remove('blue');
    helloHead.classList.add('red');
  }
})