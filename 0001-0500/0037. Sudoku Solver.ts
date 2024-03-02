// Solution by Sergey Leschev
// 37. Sudoku Solver

function solveSudoku(board: string[][]): void {
    solve(board)
}

function solve(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') {
                for (let c = '1'; c <= '9'; c = String.fromCharCode(c.charCodeAt(0) + 1)) {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c

                        if (solve(board)) return true
                        else board[i][j] = '.'
                    }
                }

                return false
            }
        }
    }
    return true
}

function isValid(board: string[][], row: number, col: number, c: string): boolean {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] !== '.' && board[i][col] === c) return false // check row
        if (board[row][i] !== '.' && board[row][i] === c) return false // check column
        if (
            board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] !== '.' &&
            board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === c
        )
            return false // check 3*3 block
    }
    return true
}
