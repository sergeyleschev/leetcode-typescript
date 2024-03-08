// Solution by Sergey Leschev
// 3005. Count Elements With Maximum Frequency

function maxFrequencyElements(nums: number[]): number {
    const freqCounter: Map<number, number> = new Map()

    // Count the frequency of each number
    for (const num of nums) {
        freqCounter.set(num, (freqCounter.get(num) || 0) + 1)
    }

    // Find the maximum frequency
    let maxFrequency = 0
    for (const freq of freqCounter.values()) {
        maxFrequency = Math.max(maxFrequency, freq)
    }

    // Find elements with maximum frequency
    let maxFreqElements: number[] = []
    for (const [num, freq] of freqCounter) {
        if (freq === maxFrequency) {
            maxFreqElements.push(num)
        }
    }

    // Calculate the total frequency of elements with maximum frequency
    const totalFrequency = maxFrequency * maxFreqElements.length

    return totalFrequency
}
