//Define Variables by selecting the DOM elements that the user will interact with.
//Add event listeners to the relevant DOM elements, so that user input can be color values and tables sizes can be dynamically set by the user.
//Set the size of the cross stich canvas as an N byM grid with the make Grid() function.
//select color input
//select size input
//when size is submitted by the user, call makegrid()

function makeGrid(rows, cells){
  const canvas = document.querySelector('#pixelCanvas');

  for(let i = 0 ; i < rows ; i++) {
    const newRow = document.createElement('tr');

    for(let j = 0 ; j < cells ; j++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
      newCell.addEventListener('click', function() {
      const color = document.querySelector('#colorPicker').value;
      newCell.style.background = color;
      });
    }
    canvas.appendChild(newRow);
  }
}

const submitSize = document.querySelector('#sizePicker');

submitSize.addEventListener('submit', function() {
  event.preventDefault();
  const height = document.querySelector('#inputHeight').value;
  const width = document.querySelector('#inputWidth').value;
  makeGrid(height, width);
});
