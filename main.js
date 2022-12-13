
const gameArea = document.querySelector("#gameArea");
var ch = require('chess.js');


const game = new ch.Chess()


createBoard();

const pieces = document.querySelectorAll("#gameArea img");
let dragged = null;

for(let piece of pieces){
  piece.addEventListener("dragstart", (event) => {
    // store a ref. on the dragged elem

    console.log(game.turn());
    console.log(event.target.classList[2]);
    
    if (game.isGameOver()) return false

    // only pick up pieces for the side to move
    if ((game.turn() === 'w' && event.target.classList[2] === 'white') ||
        (game.turn() === 'b' && event.target.classList[2] === 'black')) {
          dragged = event.target;
    }else
      return false;

    
  });
}

const board = document.querySelectorAll("#gameArea .dropzone");
for(let square of board){
  square.addEventListener("dragover", (event) => {
    // prevent default to allow drop
    event.preventDefault();
  });
}



for(let square of board){
    square.addEventListener("drop", (event) => {
// prevent default action (open as link for some elements)
    event.preventDefault();
// move dragged element to the selected drop target
    if (event.target.classList[1] === "dropzone") {
      console.log(dragged.id)
      console.log(event.target.classList[3])
      var move = game.move({
        from: dragged.id.toString(),
        to: event.target.classList[3].toString(),
      })

      if (move === null) return 'snapback'
    dragged.parentNode.removeChild(dragged);
    if(event.target.hasChildNodes()){
      event.target.removeChild(event.target.firstChild);
    }
    event.target.appendChild(dragged);
    dragged.id = event.target.classList[3].toString();
    console.log(dragged.id);

    }
  });
}


function createBoard(){
    var table = document.createElement("div");
    table.classList.add(`container`);
for (var i = 1; i < 9; i++) {
    var r = document.createElement("div");
    r.classList.add(`row`);
    for (var j = 1; j < 9; j++) {
        var c = document.createElement("div");
        c.classList.add(`col`);
        //c.classlist[0]
        c.classList.add('dropzone');
        //c.classlist[1]
        if (i%2 == j%2) {
            c.classList.add("white");
            //c.classlist[2]
        } else {
            c.classList.add("black");
            //c.classlist[2]
        }
        let column = '';
        let row  = '';
        if(i === 1){
            row = 8;
        }else if(i === 2){
            row = 7;
        }else if(i === 3){
            row = 6;
        }else if(i === 4){
          row = 5;
        }else if(i === 5){
            row = 4;
        }else if(i === 6){
            row = 3;
        }else if(i === 7){
            row = 2;
        }else if(i === 8){
            row = 1;
        }
        if(j === 1){
            column = 'a';
        }else if(j === 2){
            column = 'b';
        }else if(j === 3){
            column = 'c';
        }else if(j === 4){
            column = 'd';
        }else if(j === 5){
            column = 'e';
        }else if(j === 6){
            column = 'f';
        }else if(j === 7){
            column = 'g';
        }else if(j === 8){
            column = 'h';
        }
       c.classList.add(`${column}${row}`);
       //c.classlist[3]
       c.classList.add(`${i},${j}`);
       //c.classlist[4]
  
        r.appendChild(c);
        setBoad(`${i},${j}`, c, `${column}${row}`);   
       
    }
    table.appendChild(r);
}
gameArea.appendChild(table);
}
function getCoord(classCoords){
    let coords = classCoords.split(",");
    return coords;
}
function setImage(src, width, height, alt, imgQuerySelector, coords, color, chessCoords) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.setAttribute(`id`, `${chessCoords}`);
    img.alt = alt;
    img.setAttribute('draggable', true);
    img.classList.add("dragdemo");
    //img.classList[0]
    img.classList.add("draggable");
    //img.classList[1]
    img.classList.add(`${color}`);
    //img.classList[2]
    img.classList.add(`${coords}`);
     //img.classList[3]
    // This next line will just add it to the <body> tag
    imgQuerySelector.appendChild(img);
}   
function setBoad(classCoords, querSel, chessCoords){
    let coords = getCoord(classCoords);
    if(coords[0] === "1" && coords[1] ==="1"){
        setImage("images/blackRook.jpeg", 20, 20, "black rook", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "1" && coords[1] ==="2"){
        setImage("images/blackKnight.jpeg", 20, 20, "black knight", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "1" && coords[1] ==="3"){
        setImage("images/blackBishop.jpeg", 20, 20, "black bishop", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "1" && coords[1] ==="4"){
        setImage("images/blackQueen.jpeg", 20, 20, "black queen", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "1" && coords[1] ==="5"){
        setImage("images/blackKing.jpeg", 20, 20, "black king", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "1" && coords[1] ==="6"){
        setImage("images/blackBishop.jpeg", 20, 20, "black bishop", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "1" && coords[1] ==="7"){
    setImage("images/blackKnight.jpeg", 20, 20, "black knight", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "1" && coords[1] ==="8"){
        setImage("images/blackRook.jpeg", 20, 20, "black rook", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "2" && coords[1] ==="1"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "2" && coords[1] ==="2"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "2" && coords[1] ==="3"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "2" && coords[1] ==="4"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "2" && coords[1] ==="5"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "2" && coords[1] ==="6"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "2" && coords[1] ==="7"){
    setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "2" && coords[1] ==="8"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel, classCoords, `black`, chessCoords);
    }else if(coords[0] === "8" && coords[1] ==="1"){
        setImage("images/whiteRook.jpeg", 20, 20, "white rook", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "8" && coords[1] ==="2"){
        setImage("images/whiteKnight.jpeg", 20, 20, "white knight", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "8" && coords[1] ==="3"){
        setImage("images/whiteBishop.jpeg", 20, 20, "white bishop", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "8" && coords[1] ==="4"){
        setImage("images/whiteQueen.jpeg", 20, 20, "white queen", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "8" && coords[1] ==="5"){
        setImage("images/whiteKing.jpeg", 20, 20, "white king", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "8" && coords[1] ==="6"){
        setImage("images/whiteBishop.jpeg", 20, 20, "white bishop", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "8" && coords[1] ==="7"){
    setImage("images/whiteKnight.jpeg", 20, 20, "white knight", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "8" && coords[1] ==="8"){
        setImage("images/whiteRook.jpeg", 20, 20, "white rook", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "7" && coords[1] ==="1"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "7" && coords[1] ==="2"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "7" && coords[1] ==="3"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "7" && coords[1] ==="4"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "7" && coords[1] ==="5"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "7" && coords[1] ==="6"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "7" && coords[1] ==="7"){
    setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel, classCoords, `white`, chessCoords);
    }else if(coords[0] === "7" && coords[1] ==="8"){
      setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel, classCoords, `white`, chessCoords);
    }
  };
  function move(piece, location){
      
  }