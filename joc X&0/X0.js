let xMoves = true;


function drawBoard(selector, size=3){
    const board = document.querySelector(selector);
    for( let i=0;i<size; i++){
       const row = document.createElement('tr');
       for(let j=0;j<size;j++){
        const cell = document.createElement('td');
        cell.dataset.row =i;
        cell.dataset.col=j;
        cell.dataset.active = 'da';
        row.appendChild(cell);
       }
       board.appendChild(row);
    }
}

function registerEvents(){
    const cells = document.querySelectorAll('td');
    for(let i=0; i <cells.length; i++){
        cells[i].addEventListener('click',function
            (event){
                const cell = event.target;
                if(cell.dataset.active != 'da') return;
                  
                console.log(cell.dataset);
                cell.innerText = xMoves ? 'X' : 'O';
                xMoves = !xMoves;
                cell.dataset.active=false;
                semeoneWon();
            })
    }
}

function semeoneWon(){
    const cells = document.querySelectorAll('td');
    //TODO: check lines
   for(let i=0; i<3; i++){
        const firstCell =i * 3;
        const secondCell = i * 3 + 1;
        const thirdCell = i * 3 + 2;
        if(cells[firstCell].innerText === '' || cells[secondCell].innerText === '' || cells[thirdCell].innerText === ''){
           continue
        }
        if(cells[firstCell].innerText == cells[secondCell].innerText &&cells[secondCell].innerText == cells[thirdCell].innerText ){
            console.log(`linia ${i} e castigatoare`)
         }
      
   }

    //TODO: check lines


    //TODO: check lines
}