// цикл создает указанное количество div в container

// for (let i = 0; i < 4096; i++) {
//   document.querySelector('#container').appendChild(document.createElement('div'))
// }

// добавляет класс ко всем созданным div

const squares = document.querySelectorAll('#container > div');
for (let square of squares) {
  square.classList.add('square');
}


// меняет цвет дива при наведении

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.background = 'red';
  })
})

// кнопка с прикрепленными событиями

const button = document.querySelector('button');
button.addEventListener('click', constructGrid);


// функция спрашивает размер решетки

function constructGrid() {

  let userInput = prompt('Choose a number of squares per size');

  if (userInput > 100) {
		alert('Wrong value! 100 is max!')
	}
  
  else for (let i = 0; i < userInput; i++) {
	        document.querySelector('#container').appendChild(document.createElement('div')).
          classList.add('column');
	      }

        let columns = document.querySelectorAll('.column');

        columns.forEach((column) => { for (let i = 0; i < userInput; i++) {
          column.appendChild(document.createElement('div')).
          classList.add('square');
        }
          
        })

  
}


  
