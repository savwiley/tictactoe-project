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
        if (aiBtn.getAttribute("value") == "Human vs Computer") {
            aiBtn.setAttribute("value", "Human vs Human");
            AI++;
        } else {
            aiBtn.setAttribute("value", "Human vs Computer");
            AI--;
        }
    };

    //runs AI
    function aiRun() {
        const tile = document.querySelectorAll(".tile");
        let rand;
        for (let i = 0; i <= tile.length; i++){
            rand = Math.floor(Math.random() * 9)
            if (!tile[rand].getAttribute("value")){
                oMoves.push(tile[rand].getAttribute("id"));
                if (runGame(oMoves)) {
                    alert(`Computer/${player2} wins!`)
                }
                return tile[rand].setAttribute("value", "O");
            }
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
            if (runGame(xMoves)) {
                alert(`${player1} wins!`)
            } else if ((!runGame(xMoves) || !runGame(oMoves)) && xMoves.length + oMoves.length == 9) {
                alert("Tie!")
            };
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
        } else if (xMoves.length + oMoves.length == 9 && AI == 0) {
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