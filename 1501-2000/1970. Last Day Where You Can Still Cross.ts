// Solution by Sergey Leschev
// 1970. Last Day Where You Can Still Cross

function latestDayToCross(row: number, col: number, cells: number[][]): number {
    let left = 1
    let right = cells.length
    let ans = 0

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2)
        if (canWalk(cells, row, col, mid)) {
            ans = mid // Update current answer so far
            left = mid + 1 // Try to find a larger day
        } else {
            right = mid - 1 // Try to find a smaller day
        }
    }

    return ans
}

const dir = [0, 1, 0, -1, 0]

function canWalk(cells: number[][], row: number, col: number, dayAt: number): boolean {
    const grid: boolean[][] = Array.from({ length: row }, () => Array(col).fill(false)) // Create grid in the `dayAt` th date

    for (let i = 0; i < dayAt; i++) {
        const [r, c] = cells[i]
        grid[r - 1][c - 1] = true
    }

    const bfs: [number, number][] = []

    for (let c = 0; c < col; c++) {
        if (grid[0][c] === false) {
            // Add all valid start cells in the top row
            bfs.push([0, c])
            grid[0][c] = true // Mark as visited
        }
    }

    let currentIndex = 0

    while (currentIndex < bfs.length) {
        const [r, c] = bfs[currentIndex]

        if (r === row - 1) {
            return true // Reached bottom -> Return valid
        }

        for (let i = 0; i < 4; i++) {
            const nr = r + dir[i]
            const nc = c + dir[i + 1]

            if (nr < 0 || nr === row || nc < 0 || nc === col || grid[nr][nc] === true) {
                continue
            }

            grid[nr][nc] = true // Mark as visited
            bfs.push([nr, nc])
        }

        currentIndex++
    }

    return false
}
