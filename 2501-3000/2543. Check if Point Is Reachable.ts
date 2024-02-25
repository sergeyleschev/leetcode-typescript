// Solution by Sergey Leschev
// 2543. Check if Point Is Reachable

function isReachable(targetX: number, targetY: number): boolean {
    let x = decrease(targetX)
    let y = decrease(targetY)

    while (true) {
        if (x === 1 || y === 1) {
            return true
        }

        if (x === y) {
            return false // The coordinates won't change, we are stuck
        }

        const newCoordinate = decrease(x + y)

        // Putting the new coordinate to the place of the biggest current coordinate
        if (x < y) {
            y = newCoordinate
        } else {
            x = newCoordinate
        }
    }
}

function decrease(value: number): number {
    let result = value
    while (result % 2 === 0) {
        result = result >> 1 // This means division by 2
    }
    return result
}
