import 
{   
    getGameRules
} 
from '@/util/functions'

describe("Card utility functions tests - functions", () => {
    it("should return game rules", () => {
        const gameRules = getGameRules('normalSolitaire')

        expect(gameRules).toBeDefined()
    })
    it("should return game rules of normalSolitaire", () => {
        const expectedIncrement = 1;

        const gameRules = getGameRules('normalSolitaire')

        expect(gameRules.increment)
            .toEqual(expectedIncrement)
    })
    it("should return game rules of reverseSolitaire", () => {
        const expectedIncrement = -1;

        const gameRules = getGameRules('reverseSolitaire')

        expect(gameRules.increment)
            .toEqual(expectedIncrement)
    })
})