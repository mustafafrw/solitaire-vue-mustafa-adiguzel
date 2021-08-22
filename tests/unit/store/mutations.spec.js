import mainModule from '@/store/index'

describe('Main Module Tests - Mutations', () => {
    it('should init completed Piles', async () => {
  
      const expectedCompletedPiles = 0
  
      mainModule.commit('initCompletedPiles')
  
      const actual = mainModule.getters.completedPiles
  
      expect(actual)
        .toEqual(expectedCompletedPiles)
  
    })
    it('should increase completed Piles', async () => {
  
      const expectedCompletedPiles = 1
  
      mainModule.commit('increaseCompletedPiles')
  
      const actual = mainModule.getters.completedPiles
  
      expect(actual)
        .toEqual(expectedCompletedPiles)
  
    })
    it('should change gameStatus state to "playing"', async () => {
  
      const expectedGameStatus = 'playing'
  
      mainModule.commit('gameStart')
  
      const actual = mainModule.getters.gameStatus
  
      expect(actual)
        .toEqual(expectedGameStatus)
  
    })
    it('should change gameStatus state to "over"', async () => {
  
      const expectedGameStatus = 'over'
  
      mainModule.commit('gameOver')
  
      const actual = mainModule.getters.gameStatus
  
      expect(actual)
        .toEqual(expectedGameStatus)
  
    })
})