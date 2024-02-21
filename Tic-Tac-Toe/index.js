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
  players.push({
    name: playerName1,
    value: 1,
    marker: "./icons/circle-svgrepo-com.svg",
  });
  players.push({
    name: playerName2,
    value: 0,
    marker: "./icons/cross-svgrepo-com.svg",
  });

  let turn = players[0];

  const showTurn = () => {
    const element = document.querySelector(".main-heading");
    element.innerHTML = `${turn.name}'s turn ...`;
  };

  const changeTurn = () => {
    turn = turn === players[0] ? players[1] : players[0];
  };

  const placeToken = (id) => {
    let i = parseInt(id.substr(0, 1));
    let j = parseInt(id.substr(1, 1));
    game.getBoard()[i][j] = turn.value;
    const cell = document.getElementById(id);
    const html = `<img
    src="${turn.marker}"
    class="game-cell-img"
    alt=""
  />`;
    cell.innerHTML = html;
  };

  const checkStatus = (costumJudge) => {
    let status = false;
    if (costumJudge.player1Status()) {
      alert("Player 1 has won ... ");
      location.reload();
    } else if (costumJudge.player2Status()) {
      alert("Player 2 has won ... ");
      location.reload();
    } else if (costumJudge.gameOverStatus()) {
      alert("Game Over !!");
      location.reload();
    } else {
      status = true;
    }
    return status;
  };

  return { changeTurn, placeToken, showTurn, checkStatus };
}

let game = gameBoard();
let controller = gameControler(game);
let costumJudge = judge(game);

function handelClick(id) {
  controller.placeToken(id);
  controller.checkStatus(costumJudge);
  controller.changeTurn();
  controller.showTurn();
}

if (typeof document !== null) {
  const cells = document.querySelectorAll(".game-cell");
  for (let i = 0; i < cells.length; ++i) {
    cells[i].addEventListener("click", (event) => {
      console.log(event.target.id);
      handelClick(event.target.id);
    });
  }
}
