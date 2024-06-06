// Solution by Sergey Leschev
// 846. Hand of Straights

// Time Complexity: O(MlogM + MW)
// where M is the number of different cards.

function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) {
        return false
    }

    // Create a map to count the occurrences of each card
    const cardCount = new Map<number, number>()
    for (const card of hand) {
        cardCount.set(card, (cardCount.get(card) || 0) + 1)
    }

    // Convert the keys of the map (card values) into a sorted array
    const sortedCards = Array.from(cardCount.keys()).sort((a, b) => a - b)

    // Try to form groups starting from the smallest card
    for (const card of sortedCards) {
        const count = cardCount.get(card)
        if (count > 0) {
            // We need to form groupsSize consecutive cards starting from 'card'
            for (let i = 0; i < groupSize; i++) {
                const currentCard = card + i
                const currentCount = cardCount.get(currentCard)
                if (!currentCount || currentCount < count) {
                    return false
                }
                cardCount.set(currentCard, currentCount - count)
            }
        }
    }

    return true
}
