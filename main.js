/*

//board arrays
let xMoves = [];
let oMoves = [];
//keeps track of turns
let turn = 0;
//winning moves
let target = [
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"],
];

//board
function Gameboard(player, move) {
    let decideX;
    let decideO;
    if (player == "X") {
        xMoves.push(move);
        decideX = runGame(xMoves);
    } else {
        oMoves.push(move);
        decideO = runGame(oMoves);
    };
    if (decideX) {
        alert("You win!")
    } else if (decideO) {
        alert("You lose!")
    } else if (xMoves.length + oMoves.length == 9) {
        alert("Tie!")
    }
};

//clicks buttons; plays game
function makeMove(id) {
    const tile = document.querySelector(`#${id}`);
    if (tile.getAttribute("value") || runGame(xMoves) || runGame(oMoves)) {
        return;
    } else if (turn == 0) {
        turn++;
        tile.setAttribute("value", "X");
        return Gameboard("X", tile.getAttribute("id"));
    } else {
        turn--;
        tile.setAttribute("value", "O");
        return Gameboard("O", tile.getAttribute("id"));
    }
};

//runs game
function runGame(array) {
    for (let i = 0; i < target.length; i++)
        if (target[i].every(v => array.includes(v))) {
            return true;
        };
};

*/



const tictactoe = (() => {

    //keeps track of turns
    let turn = 0;

    //gameboard
    let xMoves = [];
    let oMoves = [];

    //winning targets
    let target = [
        ["one", "two", "three"],
        ["four", "five", "six"],
        ["seven", "eight", "nine"],
        ["one", "four", "seven"],
        ["two", "five", "eight"],
        ["three", "six", "nine"],
        ["one", "five", "nine"],
        ["three", "five", "seven"],
    ];

    //player names
    let player1 = "Player 1";
    let player2 = "Player 2";

    //AI on is 1, AI off is 0
    let AI = 0;

    //turns on/off AI
    const aiFunc = () => {
        const aiBtn = document.querySelector("#AI");
        if (aiBtn.getAttribute("value") == "Play AI") {
            aiBtn.setAttribute("value", "Stop AI");
            AI++;
        } else {
            aiBtn.setAttribute("value", "Play AI");
            AI--;
        }
    };

    //runs AI
    function aiRun() {
        if (xMoves.length + oMoves.length == 9) {
            alert("Tie!")
        };
        const tile = document.querySelectorAll(".tile");
        for (let i = 0; i <= tile.length; i++)
            if (!tile[i].getAttribute("value")){
                oMoves.push(tile[i].getAttribute("id"));
                if (runGame(oMoves)) {
                    alert(`Computer/${player2} wins!`)
                }
                return tile[i].setAttribute("value", "O");
            };
    };

    //marks the squares
    const id = (id) => {
        const tile = document.querySelector(`#${id}`);
        if (tile.getAttribute("value") || runGame(xMoves) || runGame(oMoves)) {
            return;
        } else if (AI == 1) {
            tile.setAttribute("value", "X");
            return Gameboard("X", tile.getAttribute("id"));
        } else if (turn == 0) {
            turn++;
            tile.setAttribute("value", "X");
            return Gameboard("X", tile.getAttribute("id"));
        } else {
            turn--;
            tile.setAttribute("value", "O");
            return Gameboard("O", tile.getAttribute("id"));
        };
    };

    //tracks the board
    function runGame(array) {
        for (let i = 0; i < target.length; i++)
            if (target[i].every(v => array.includes(v))) {
                return true;
            };
    };

    //tracks board and declares winner
    function Gameboard(player, move) {
        let decideX;
        let decideO;
        if (AI == 1) {
            xMoves.push(move);
            decideX = runGame(xMoves);
            aiRun();
        } else if (player == "X") {
            xMoves.push(move);
            decideX = runGame(xMoves);
        } else {
            oMoves.push(move);
            decideO = runGame(oMoves);
        };
        if (decideX) {
            alert(`${player1} wins!`)
        } else if (decideO) {
            alert(`${player2} wins!`)
        } else if (xMoves.length + oMoves.length == 9) {
            alert("Tie!")
        };
    };

    //refreshes game
    const newGame = () => {
        turn = 0;
        xMoves = [];
        oMoves = [];
        const btn = document.querySelectorAll(".tile");
        for (let i = 0; i <= btn.length; i++) {
            btn[i].setAttribute("value", "");
        };
    };

    //changes names
    const playerData = (p1, p2) => {
        player1 = p1;
        player2 = p2;
    }

    return { id, newGame, playerData, aiFunc }

})();





/*
function decision(array) {
    decide = runGame(array);
    if (decide) {
        alert("You win!")
    } else {
        alert("You lose!")
    }
}


/*


https://parth722.github.io/tictactoe/

this person^ uses arrays for location which is my current problem



puts the func in html buttons with "this.id" so it takes the id directly and corresponds it with an object array



//GAMEBOARD
//module
//holds the board in an array?????
const Gameboard = (() => {
    let board = [];
    return {board};
})();


//doesn't work
const Gameboard = ((move) => {
    let xMoves = [];
    let oMoves = [];
    if (move == "X") {
        xMoves.push(move);
    } else {
        oMoves.push(move);
    }
})();




//PLAYERS
//factory
//supposed to "control the flow" of the game?
const Players = () => {

};


*/

//WHAT DOES ANY OF THIS MEAN??????????

//There'll be 9 squares (divs, buttons?) to interact with
//Player1 is X and 2 is O
//3 X or 3 O in a row is winner and game ends
//first click is X, second is O, third is X, so on.

//so the array contains places clicked?
//so it can check on who's winning and where?

//YES^^^^




// You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself. 

// Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.