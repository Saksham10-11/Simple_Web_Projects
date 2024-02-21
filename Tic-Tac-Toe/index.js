function gameBoard() {
  let board = [];
  let numRows = 3;
  let numColumns = 3;
  for (let i = 0; i < numRows; ++i) {
    board.push([]);
    for (let j = 0; j < numColumns; ++j) {
      board[i].push(-1);
    }
  }
  const getBoard = () => board;
  return { getBoard };
}

function judge(game) {
  let board = game.getBoard();

  const gameOverStatus = () => {
    let countEmpty = 0;
    let over = false;
    for (let i = 0; i < 3; ++i) {
      for (let j = 0; j < 3; ++j) {
        let val = board[i][j];
        if (val === -1) ++countEmpty;
      }
    }
    if (countEmpty === 0) over = true;
    return over;
  };

  const player1Status = () => {
    let won = false;
    for (let i = 0; i < 3; ++i) {
      if (board[i][0] === 1 && board[i][1] === 1 && board[i][2] === 1) {
        won = true;
        break;
      }
      if (board[0][i] === 1 && board[1][i] === 1 && board[2][i] === 1) {
        won = true;
        break;
      }
    }
    if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) {
      won = true;
    }
    if (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) {
      won = true;
    }
    return won;
  };

  const player2Status = () => {
    let won = false;
    for (let i = 0; i < 3; ++i) {
      if (board[i][0] === 0 && board[i][1] === 0 && board[i][2] === 0) {
        won = true;
        break;
      }
      if (board[0][i] === 0 && board[1][i] === 0 && board[2][i] === 0) {
        won = true;
        break;
      }
    }
    if (board[0][0] === 0 && board[1][1] === 0 && board[2][2] === 0) {
      won = true;
    }
    if (board[0][2] === 0 && board[1][1] === 0 && board[2][0] === 0) {
      won = true;
    }
    return won;
  };

  return { player1Status, player2Status, gameOverStatus };
}

function gameControler(game) {
  const playerName1 = "Player1";
  const playerName2 = "Player2";

  const players = [];
  players.push({ name: playerName1, value: 1 });
  players.push({ name: playerName2, value: 0 });

  let turn = players[0];

  const showTurn = () => {
    console.log(`${turn.name}'s turn ...`);
  };

  const changeTurn = () => {
    turn = turn === players[0] ? players[1] : players[0];
  };

  const placeToken = (i, j) => {
    game.getBoard()[i][j] = turn.value;
  };

  const printBoard = () => {
    let board = game.getBoard();
    console.log(board);
  };

  const checkStatus = (costumJudge) => {
    let status = false;
    if (costumJudge.gameOverStatus()) {
      console.log("Game Over !!");
    } else if (costumJudge.player1Status()) {
      console.log("Player 1 has won ... ");
    } else if (costumJudge.player2Status()) {
      console.log("Player 2 has won ... ");
    } else {
      status = true;
    }
    return status;
  };

  return { changeTurn, placeToken, printBoard, showTurn, checkStatus };
}

let game = gameBoard();
let controller = gameControler(game);
let costumJudge = judge(game);

let idx = 0;
while (controller.checkStatus(costumJudge)) {
  controller.printBoard();
  controller.showTurn();
  controller.placeToken(Math.floor(idx / 3), idx % 3);
  controller.changeTurn();
  idx++;
}
controller.printBoard();

if (typeof document !== null) {
}
