// Solution by Sergey Leschev
// 1994. The Number of Good Subsets

function numberOfGoodSubsets(nums: number[]): number {
    const MOD = 1_000_000_007

    // Primes up to 30
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

    // Map number to its prime factor bitmask
    const primeBitmask = (num: number): number => {
        let mask = 0
        for (let i = 0; i < primes.length; i++) {
            if (num % primes[i] === 0) {
                let count = 0
                while (num % primes[i] === 0) {
                    count++
                    num /= primes[i]
                }
                if (count > 1) return -1 // Number not valid for distinct prime products
                mask |= 1 << i
            }
        }
        return mask
    }

    // Frequency count of numbers
    const freq: number[] = Array(31).fill(0)
    for (const num of nums) {
        freq[num]++
    }

    // Dynamic Programming
    const dp: number[] = Array(1 << primes.length).fill(0)
    dp[0] = 1

    for (let num = 2; num <= 30; num++) {
        const mask = primeBitmask(num)
        if (mask === -1 || freq[num] === 0) continue

        for (let state = (1 << primes.length) - 1; state >= 0; state--) {
            if ((state & mask) === 0) {
                dp[state | mask] = (dp[state | mask] + dp[state] * freq[num]) % MOD
            }
        }
    }

    // Sum all subsets except the empty one
    let result = dp.reduce((sum, count) => (sum + count) % MOD, 0) - 1

    // Account for `1` if present
    if (freq[1] > 0) {
        // Use BigInt for power calculations
        const powerOfTwo = BigInt(2) ** BigInt(freq[1]) % BigInt(MOD)
        result = Number((BigInt(result) * powerOfTwo) % BigInt(MOD))
    }

    return (result + MOD) % MOD // Ensure non-negative result
}
