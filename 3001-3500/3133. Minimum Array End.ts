// Solution by Sergey Leschev
// 3133. Minimum Array End

// Time complexity: O(N)
// Space complexity: O(N)

function minEnd(n: number, x: number): number {
    // Subtract 1 from n to get the required number of elements after x in nums
    n -= 1
    let binaryX = x.toString(2).split('') // Convert x to binary representation
    let binaryN = n.toString(2).split('') // Convert n to binary representation
    let curN = binaryN.length - 1 // Start from the last bit of binaryN

    // Step 1 & 2: Traverse binaryX in reverse, filling bits from binaryN into zero bits in binaryX
    for (let i = binaryX.length - 1; i >= 0; i--) {
        // Skip bits that are already 1 in binaryX
        if (binaryX[i] === '1') continue
        binaryX[i] = binaryN[curN]
        curN--
        // If there are no bits left in binaryN, stop
        if (curN === -1) break
    }

    // Step 3: If there are leftover bits in binaryN, add them to the start of binaryX
    if (curN >= 0) {
        binaryX = binaryN.slice(0, curN + 1).concat(binaryX)
    }

    // Convert the modified binaryX back to an integer and return it
    return parseInt(binaryX.join(''), 2)
}
