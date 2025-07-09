let xMoves = true;
let gameOver= false;
const DEBUGGING = false;

function debug(message) {
  if (DEBUGGING == false) return;
  console.log(message);
}
function drawBoard(selector, size = 3) {
  const board = document.querySelector(selector);
  for (let i = 0; i < size; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("td");
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.dataset.active = "da";
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

function registerEvents() {
  const cells = document.querySelectorAll("td");
  const elemLaMutare = document.getElementById("la_mutare");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function (event) {
      if(gameOver) return;
      const cell = event.target;
      if (cell.dataset.active != "da") return;

      debug(cell.dataset);
      cell.innerText = xMoves ? "X" : "O";
      semeoneWon();
      xMoves = !xMoves;
      elemLaMutare.innerText = xMoves ? "X" : "O";
      cell.dataset.active = false;
    });
  }
}

function semeoneWon() {
  const cells = document.querySelectorAll("td");
  //TODO: check lines
  for (let i = 0; i < 3; i++) {
    const firstCell = i * 3;
    const secondCell = i * 3 + 1;
    const thirdCell = i * 3 + 2;

     debug(
      `Verific linia ${i} adica celulele ${firstCell},${secondCell},${thirdCell}`
     )
    let lineIsIdentical = checkThreeCells(cells,firstCell,secondCell,thirdCell,`linie`,i);
      if (lineIsIdentical){
        gameOver = true;
        addGameOverClass();
        return;
      }
  }

  //TODO: check coloana
  for (let j = 0; j < 3; j++) {
    const firstCell = j + 0 * 3;
    const secondCell = j + 1 * 3;
    const thirdCell = j + 2 * 3;

    debug(
      `Verific coloana ${j} adica celulele ${firstCell},${secondCell},${thirdCell}`
    );
    
    let coloanaIsIdentical=checkThreeCells(cells,firstCell,secondCell,thirdCell,`coloana`,j);
        if (coloanaIsIdentical){
            gameOver = true;
            addGameOverClass();
            return;
        }
    
    
  }

  //TODO: check main diagonal
    let firstCell = 0;
    let secondCell = 4;
    let thirdCell = 8;

    let diagonalaIsIdentical=checkThreeCells(cells,firstCell,secondCell,thirdCell,`diagonala`,`principal`);
    if(diagonalaIsIdentical){
        gameOver = true;
        addGameOverClass();
        return;
    }
  //TODO: check second diagonal
      firstCell = 2;
      secondCell = 4;
      thirdCell = 6;

  let secondaryIsIdentical=checkThreeCells(cells,firstCell,secondCell,thirdCell,`diagonala`,`secundar`);
  if(secondaryIsIdentical){
       addGameOverClass();
       gameOver= true;
  }
}

function checkThreeCells(cells,firstCell,secondCell,thirdCell,directie,indice){
    
    if (
        cells[firstCell].innerText === "" ||
        cells[secondCell].innerText === "" ||
        cells[thirdCell].innerText === ""
      ) {
        return false;
      }
      if (
        cells[firstCell].innerText == cells[secondCell].innerText &&
        cells[secondCell].innerText == cells[thirdCell].innerText
      ) {
        debug(`${directie} ${indice} e castigatoare`);
        alert(`${xMoves ? "X" : "O"} este castigator`);
        return true;
      }
}

function addGameOverClass(){
    const elemGame = document.getElementById('game');
    elemGame.classList.add('over')
}