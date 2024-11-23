// Solution by Sergey Leschev
// 1861. Rotating the Box

function rotateTheBox(box: string[][]): string[][] {
    const rows = box.length
    const cols = box[0].length

    // Step 1: Simulate gravity for each row
    for (let i = 0; i < rows; i++) {
        let empty = cols - 1 // Position to drop the next stone
        for (let j = cols - 1; j >= 0; j--) {
            if (box[i][j] === '*') {
                empty = j - 1 // Reset empty pointer when an obstacle is found
            } else if (box[i][j] === '#') {
                box[i][j] = '.' // Remove the stone from its current position
                box[i][empty] = '#' // Drop the stone to the empty position
                empty-- // Move the empty pointer up
            }
        }
    }

    // Step 2: Rotate the box 90 degrees clockwise
    const rotatedBox: string[][] = Array.from({ length: cols }, () => Array(rows).fill('.'))
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            rotatedBox[j][rows - i - 1] = box[i][j]
        }
    }

    return rotatedBox
}
