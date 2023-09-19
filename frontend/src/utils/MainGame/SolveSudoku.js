import { findEmptyCell, isValidMove } from './validityCheck';

export const solveSudoku = (board) => {
  const emptyCell = findEmptyCell(board);

  if (!emptyCell) {
    //Done with puzzle
    return true;
  }

  const [row, col] = emptyCell;

  for (let num = 1; num < 9; num++) {
    if (isValidMove(board, row, col, num)) {
      board[row][col] = num;

      if (solveSudoku(board)) {
        return true;
      }

      board[row][col] = 0;
    }
  }

  return false;
};
