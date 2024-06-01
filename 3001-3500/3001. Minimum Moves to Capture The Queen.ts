// Solution by Sergey Leschev
// 3001. Minimum Moves to Capture The Queen

// Time complexity: O(1)
// Space complexity: O(1)

function minMovesToCaptureTheQueen(a: number, b: number, c: number, d: number, e: number, f: number): number {
    // Check if the rook can capture the queen
    if (a === e && !(a === c && d > Math.min(b, f) && d < Math.max(b, f))) return 1 // Rook and queen in the same row
    if (b === f && !(b === d && c > Math.min(a, e) && c < Math.max(a, e))) return 1 // Rook and queen in the same column

    // Check if the bishop can capture the queen
    if (c + d === e + f && !(c + d === a + b && a > Math.min(c, e) && a < Math.max(c, e))) return 1 // Bishop and queen in the same anti-diagonal
    if (c - d === e - f && !(c - d === a - b && a > Math.min(c, e) && a < Math.max(c, e))) return 1 // Bishop and queen in the same diagonal

    // If neither can capture the queen in one move, return 2
    return 2
}
