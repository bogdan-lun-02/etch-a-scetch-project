for (let i = 0; i < 4096; i++) {
  document.querySelector('#container').appendChild(document.createElement('div'))
}

const squares = document.querySelectorAll('#container > div');
for (let square of squares) {
  square.classList.add('square');
}


squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.background = 'red';
  })
})

const button = document.querySelector('button');
button.addEventListener('click', getUserInput);

function getUserInput() {
  let userInput = prompt('Choose a number of squares per size');
  if (userInput > 100) {
    alert('Wrong value! 100 is max!')
  }

  else return userInput;
}