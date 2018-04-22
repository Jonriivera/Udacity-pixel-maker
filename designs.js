//Define Variables by selecting the DOM elements that the user will interact with.
//Add event listeners to the relevant DOM elements, so that user input can be color values and tables sizes can be dynamically set by the user.
//Set the size of the cross stich canvas as an N byM grid with the make Grid() function.
//select color input
//select size input
//when size is submitted by the user, call makegrid()

const canvas = document.querySelector('#pixelCanvas');
const submitSize = document.querySelector('#sizePicked');
const color = document.querySelector('#colorPicker').value;



function makeGrid(height, Width){
  for(let i = 0 ; i < height ; i++) {
    const row = document.createElement('tr');
    for(let j = 0 ; j < width ; j++) {
      const cell = document.createElement('td');
      row.appendChild(cell);
    }
    canvas.appendChild(row);
  }
}

submitSize.addEventListener('submit', function(){
  event.preventDefault();
  const height = document.querySelector('#inputHeight').value;
  const width = document.querySelector('#inputWidth').value;
  makeGrid(height, Width);
});
