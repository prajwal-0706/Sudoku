//function for checkig the empty fields
export const findEmptyCell = (board) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
};

//function for checking the Valid Move
export const isValidMove = (board, row, col, num) => {
  //Check for the row
  for (let i = 0; i < 9; i++) {
    if (i !== col && board[row][i] === num) {
      return false;
    }
  }

  //Check for the column
  for (let i = 0; i < 9; i++) {
    if (i !== row && board[i][col] === num) {
      return false;
    }
  }

  //Check for its 3 * 3 box
  const rowStart = Math.floor(row / 3) * 3;
  const colStart = Math.floor(col / 3) * 3;

  for (let i = rowStart; i < rowStart + 3; i++) {
    for (let j = colStart; j < colStart + 3; j++) {
      if (i !== row && j !== col && board[i][j] === num) {
        return false;
      }
    }
  }

  return true;
};
