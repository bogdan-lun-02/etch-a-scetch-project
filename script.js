// кнопка с прикрепленными событиями

const button = document.querySelector('button');
button.addEventListener('click', removeGrid);
button.addEventListener('click', constructGrid);

// функция спрашивает размер решетки и создает ее

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

        let squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
          square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red'
          })
        })
          
        })

  
}

// функция внизу убирает созданные клетки

function removeGrid() {

  let container = document.querySelector('#container');
  container.innerHTML = '';
}





  
