for (let i = 0; i < 256; i++) {
  document.querySelector('#container').appendChild(document.createElement('div'))
}

const squares = document.querySelectorAll('#container > div');
for (let square of squares) {
  square.classList.add('square');
}
