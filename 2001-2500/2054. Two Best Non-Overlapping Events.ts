// Solution by Sergey Leschev
// 2054. Two Best Non-Overlapping Events

function maxTwoEvents(events: number[][]): number {
    const proc: [number, boolean, number][] = []
    let ans = 0,
        maxSoFar = 0 // maxSoFar represents the maximum value of finished events so far

    // Process all events, splitting them into start and end times
    for (const [start, end, value] of events) {
        proc.push([start, true, value]) // (time, is_start, value)
        proc.push([end + 1, false, value]) // use end+1 to make it inclusive
    }

    // Sort by time. If times are the same, process end events first (false comes before true)
    proc.sort(([time1, isStart1], [time2, isStart2]) => time1 - time2 || Number(isStart1) - Number(isStart2))

    for (const [time, isStart, value] of proc) {
        if (isStart) {
            ans = Math.max(ans, maxSoFar + value)
        } else {
            maxSoFar = Math.max(maxSoFar, value)
        }
    }

    return ans
}
