// Initialize variables

const size = 3; // size of the grid - three rows, three columns

var xSel = []; // Cells selected by player X
var oSel = []; // Cells selected by player O
var token = [];// Placeholder for either player's selections
var xCount = 0;// Counts how many cells player X has selected. If it's more than 3 the program will check for win
var oCount = 0;// Counts how many cells player O has selected. If it's more than 3 the program will check for win
var turn = 1;  // Turn = 1 means it's player X turn. Turn = 0 means it's player O turn. By default, X starts playing
var winners = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];   // winning combinations

// Draw board

function drawBoard(size) {
    var parent = document.getElementById("game");
    var table = document.createElement('table'); // create table
    table.id='board';
    var counter = 1;

    for (let i = 0; i < size; i++)
    {
        var row = document.createElement("tr"); // create rows

        for(let x = 0; x < size; x++)
        {
            var col = document.createElement("td"); // create columns
            col.innerHTML = "";
            col.id = counter; // the counter will go from 1 to 9, giving each cell its own id
            counter += 1;
            row.appendChild(col); // append columns as children of rows
        }
        table.appendChild(row); // append rows as children of table       
    }    
    parent.appendChild(table); // append table as child of main div
}

// Play!

function play() { // add event listener for clicks on the board
  document.getElementById('board').addEventListener('click', (event) => {
    if(turn == 1) {
    event.target.innerHTML = 'x'; // write player X selection on the board
    xCount += 1;
    xSel.push(parseInt(event.target.id)); // add selected cell's id to array of selections by X
    if(xCount >= size) {checkWin()};
    turn = 0;
    } else {
      event.target.innerHTML = 'o';  // write player O selection on the board
      oCount += 1;
      oSel.push(parseInt(event.target.id)); // add selected cell's id to array of selections by O
      if(oCount >= size) {checkWin()};
      turn = 1;
      }
  });
}

// Check for possible winner

function checkWin() {
  if(turn == 1) { 
    token = xSel } 
    else { 
      token = oSel };
  for (let i = 0; i < winners.length; i++) {
    if(token.includes(winners[i][0]) && token.includes(winners[i][1]) && token.includes(winners[i][2])) {
      if (token == xSel) { 
        document.getElementById('message').innerHTML = '<p>X Wins!</p>'; } 
        else { 
          document.getElementById('message').innerHTML = '<p>O Wins!</p>'; };      
    }
  }
}

// Call functions
   
drawBoard(size);
play();


  
  




































