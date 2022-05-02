// Solution @ Sergey Leschev, Belarusian State University

// 463. Island Perimeter
// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Determines the perimeter of the island.

// - Parameter grid: A map of the island, where 1 represents land and 0 represents water.
// - Returns: The perimeter of the island.

// Example 1:
// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
// Input: grid = [[1]]
// Output: 4

// Example 3:
// Input: grid = [[1,0]]
// Output: 4

// Constraints:
// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.

const countNotConnectedEdges = (grid: number[][], row: number, column: number): number => {
  let count = 0

  if (row === 0 || grid[row - 1][column] === 0) { count += 1 }
  if (row >= grid.length - 1 || grid[row + 1][column] === 0) { count += 1 }
  if (column === 0 || grid[row][column - 1] === 0) { count += 1 }
  if (column >= grid[row].length - 1 || grid[row][column + 1] === 0) { count += 1 }
  return count
}

function islandPerimeter(grid: number[][]): number {
  let countSum = 0
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < grid[rowIndex].length; columnIndex += 1) {
      if (grid[rowIndex][columnIndex] === 1) {
        countSum += countNotConnectedEdges(grid, rowIndex, columnIndex)
      }
    }
  }

  return countSum
}