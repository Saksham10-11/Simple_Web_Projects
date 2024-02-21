function gameBoard() {
  let board = [];
  let numRows = 3;
  let numColumns = 3;
  for (let i = 0; i < numRows; ++i) {
    board.push([]);
    for (let j = 0; j < numColumns; ++j) {
      board[i].push(cell());
    }
  }

  const getBoard = () => board;

  return { getBoard };
}

function cell() {
  let value = 0;

  const getValue = () => value;
  const setValue = (val) => {
    this.value = val;
  };

  return { getValue, setValue };
}

function gameControler() {
  const playerName1 = "Player1";
  const playerName2 = "Player2";

  const players = [];
  players.push({ name: playerName1, value: 1 });
  players.push({ name: playerName2, value: 0 });

  let turn = players[0];

  const changeTurn = () => {
    turn = turn === players[0] ? players[1] : players[0];
  };

  const placeToken = (player, cell) => {
    cell.setValue(player.value);
  };

  const printBoard = (game) => {
    let board = game.getBoard();
    console.log(board);
  };

  return { changeTurn, placeToken, printBoard };
}

if (typeof document !== null) {
}
