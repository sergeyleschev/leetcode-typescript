// Solution by Sergey Leschev
// 2601. Prime Subtraction Operation

function primeSubOperation(nums: number[]): boolean {
    const MAX = 1005
    const primes: number[] = []
    const isPrime: boolean[] = Array(MAX).fill(true)

    // Sieve of Eratosthenes to find all primes less than 1000
    isPrime[0] = isPrime[1] = false
    for (let i = 2; i * i < MAX; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < MAX; j += i) {
                isPrime[j] = false
            }
        }
    }

    // Collect all primes up to 1000
    for (let i = 2; i < MAX; i++) {
        if (isPrime[i]) primes.push(i)
    }

    const n = nums.length
    const newNums = new Array(n).fill(-1)
    newNums[n - 1] = nums[n - 1]

    // Traverse nums in reverse order
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < newNums[i + 1]) {
            newNums[i] = nums[i]
            continue
        }

        // Try to find a prime to make nums[i] smaller and strictly increasing
        for (const p of primes) {
            if (p >= nums[i]) {
                newNums[i] = nums[i]
                break
            }
            if (nums[i] - p < newNums[i + 1]) {
                newNums[i] = nums[i] - p
                break
            }
        }
    }

    // Check if the new array is strictly increasing
    for (let i = 1; i < n; i++) {
        if (newNums[i] <= newNums[i - 1]) return false
    }

    return true
}
