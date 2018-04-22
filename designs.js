//Define Variables by selecting the DOM elements that the user will interact with.
//Add event listeners to the relevant DOM elements, so that user input can be color values and tables sizes can be dynamically set by the user.
//Set the size of the cross stich canvas as an N byM grid with the make Grid() function.
//select color input
//select size input
//when size is submitted by the user, call makegrid()

const canvas = document.getElementbyID('pixelCanvas');
const submitSize = document.getElementbyID('sizePicked');
const color = document.getElementbyID('colorPicker').value;



function makeGrid(height, Width){
  for(let i = 0 ; i < height ; i++) {
    let row = document.createElement('tr');
    for(let j = 0 ; j < width ; j++) {
      let cell = document.createElement('td');
      row.appendChild(cell);
    }
    canvas.appendChild(row);
  }
}

submitSize.addEventListener('submit', function(){
  event.preventDefault();
  const height = document.getElementbyID('inputHeight').value;
  const width = document.getElementbyID('inputWidth').value;
  makeGrid(height, Width);
});
