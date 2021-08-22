import 
{   
    getGameRules,
    getBoardwithId,
    getBoardwithCardId
} 
from '@/util/functions'
import mainModule from '@/store/index'

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
    it("should get board with id", () => {
        mainModule.dispatch('startSolitaire')

        const board = getBoardwithId("board-1")
        
        expect(board)
            .not
            .toBeNull()
    })
    it("should get board with card id", () => {
        mainModule.dispatch('startSolitaire')

        const board = mainModule.getters.getBoards[0]

        const firstCard = board.cards[0];

        const cardsBoard = getBoardwithCardId(firstCard.id)
        
        expect(board)
            .toEqual(cardsBoard)
    })
})