const gameArea = document.querySelector("#gameArea");


createBoard();


function createBoard(){
    var table = document.createElement("div");
    table.classList.add(`container`);
for (var i = 1; i < 9; i++) {
    var r = document.createElement("div");
    r.classList.add(`row`);


    for (var j = 1; j < 9; j++) {

        var c = document.createElement("div");
        c.classList.add(`col`);
        if (i%2 == j%2) {
            c.classList.add("white");
        } else {
            c.classList.add("black");
        }
        c.setAttribute(`id`, `${i},${j}`);
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
            column = 'A';
        }else if(j === 2){
            column = 'B';
        }else if(j === 3){
            column = 'C';
        }else if(j === 4){
            column = 'D';
        }else if(j === 5){
            column = 'E';
        }else if(j === 6){
            column = 'F';
        }else if(j === 7){
            column = 'G';
        }else if(j === 8){
            column = 'H';
        }

       c.classList.add(`${row},${column}`);
  
        r.appendChild(c);
        setBoad(`${i},${j}`, c);   
       
    }
    table.appendChild(r);
}
gameArea.appendChild(table);
}

function getCoord(classCoords){
    let coords = classCoords.split(",");
    return coords;
}

function setImage(src, width, height, alt, imgQuerySelector) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.classList.add(`pieces`);
    img.alt = alt;

    // This next line will just add it to the <body> tag
    imgQuerySelector.appendChild(img);
}   
function setBoad(classCoords, querSel){
    let coords = getCoord(classCoords);

    if(coords[0] === "1" && coords[1] ==="1"){
        setImage("images/blackRook.jpeg", 20, 20, "black rook", querSel);
    }else if(coords[0] === "1" && coords[1] ==="2"){
        setImage("images/blackKnight.jpeg", 20, 20, "black knight", querSel);
    }else if(coords[0] === "1" && coords[1] ==="3"){
        setImage("images/blackBishop.jpeg", 20, 20, "black bishop", querSel);
    }else if(coords[0] === "1" && coords[1] ==="4"){
        setImage("images/blackQueen.jpeg", 20, 20, "black queen", querSel);
    }else if(coords[0] === "1" && coords[1] ==="5"){
        setImage("images/blackKing.jpeg", 20, 20, "black king", querSel);
    }else if(coords[0] === "1" && coords[1] ==="6"){
        setImage("images/blackBishop.jpeg", 20, 20, "black bishop", querSel);
    }else if(coords[0] === "1" && coords[1] ==="7"){
    setImage("images/blackKnight.jpeg", 20, 20, "black knight", querSel);
    }else if(coords[0] === "1" && coords[1] ==="8"){
        setImage("images/blackRook.jpeg", 20, 20, "black rook", querSel);
    }else if(coords[0] === "2" && coords[1] ==="1"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel);
    }else if(coords[0] === "2" && coords[1] ==="2"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel);
    }else if(coords[0] === "2" && coords[1] ==="3"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel);
    }else if(coords[0] === "2" && coords[1] ==="4"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel);
    }else if(coords[0] === "2" && coords[1] ==="5"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel);
    }else if(coords[0] === "2" && coords[1] ==="6"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel);
    }else if(coords[0] === "2" && coords[1] ==="7"){
    setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel);
    }else if(coords[0] === "2" && coords[1] ==="8"){
        setImage("images/blackPawn.jpeg", 20, 20, "black pawn", querSel);
    }else if(coords[0] === "8" && coords[1] ==="1"){
        setImage("images/whiteRook.jpeg", 20, 20, "white rook", querSel);
    }else if(coords[0] === "8" && coords[1] ==="2"){
        setImage("images/whiteKnight.jpeg", 20, 20, "white knight", querSel);
    }else if(coords[0] === "8" && coords[1] ==="3"){
        setImage("images/whiteBishop.jpeg", 20, 20, "white bishop", querSel);
    }else if(coords[0] === "8" && coords[1] ==="4"){
        setImage("images/whiteQueen.jpeg", 20, 20, "white queen", querSel);
    }else if(coords[0] === "8" && coords[1] ==="5"){
        setImage("images/whiteKing.jpeg", 20, 20, "white king", querSel);
    }else if(coords[0] === "8" && coords[1] ==="6"){
        setImage("images/whiteBishop.jpeg", 20, 20, "white bishop", querSel);
    }else if(coords[0] === "8" && coords[1] ==="7"){
    setImage("images/whiteKnight.jpeg", 20, 20, "white knight", querSel);
    }else if(coords[0] === "8" && coords[1] ==="8"){
        setImage("images/whiteRook.jpeg", 20, 20, "white rook", querSel);
    }else if(coords[0] === "7" && coords[1] ==="1"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel);
    }else if(coords[0] === "7" && coords[1] ==="2"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel);
    }else if(coords[0] === "7" && coords[1] ==="3"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel);
    }else if(coords[0] === "7" && coords[1] ==="4"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel);
    }else if(coords[0] === "7" && coords[1] ==="5"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel);
    }else if(coords[0] === "7" && coords[1] ==="6"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel);
    }else if(coords[0] === "7" && coords[1] ==="7"){
    setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel);
    }else if(coords[0] === "7" && coords[1] ==="8"){
        setImage("images/whitePawn.jpeg", 20, 20, "white pawn", querSel);
    }

};

function move(piece, location){
    
}