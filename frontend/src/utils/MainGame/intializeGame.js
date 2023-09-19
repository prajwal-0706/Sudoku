import { solveSudoku } from './SolveSudoku';

export const generateSudoku = () => {
  const board = new Array(9).fill(0).map(() => new Array(9).fill(0));

  solveSudoku(board);

  const cellsToRemove = 40;
  let cellsRemoved = 0;

  while (cellsRemoved < cellsToRemove) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);

    if (board[row][col] !== 0) {
      const backup = board[row][col];
      board[row][col] = 0;

      const tempBoard = board.map((row) => [...row]);

      if (!solveSudoku(tempBoard)) {
        board[row][col] = backup;
      } else {
        cellsRemoved++;
      }
    }
  }

  return board;
};
