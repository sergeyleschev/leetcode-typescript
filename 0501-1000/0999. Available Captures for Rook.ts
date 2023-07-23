// Solution by Sergey Leschev
// 999. Available Captures for Rook

function numRookCaptures(board: string[][]): number {
    const row = board.length
    const col = board[0].length
    let r = 0
    let c = 0
    let res = 0

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === 'R') {
                r = i
                c = j
            }
        }
    }

    let top = r - 1
    let bottom = r + 1
    let left = c - 1
    let right = c + 1

    while (top >= 0) {
        const v = board[top][c]
        if (v === 'B') break
        if (v === 'p') {
            res += 1
            break
        }
        top -= 1
    }
    while (bottom < row) {
        const v = board[bottom][c]
        if (v === 'B') break
        if (v === 'p') {
            res += 1
            break
        }
        bottom += 1
    }
    while (left >= 0) {
        const v = board[r][left]
        if (v === 'B') break
        if (v === 'p') {
            res += 1
            break
        }
        left -= 1
    }
    while (right < col) {
        const v = board[r][right]
        if (v === 'B') break
        if (v === 'p') {
            res += 1
            break
        }
        right += 1
    }

    return res
}
