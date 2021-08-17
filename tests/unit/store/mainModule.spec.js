import mainModule from '@/store/index'
describe('Main Module Tests', () => {
    it('should init boards', async () => {
  
      const emptyBoards = []
  
      await mainModule.dispatch('startSolitaire')
  
      const actual = mainModule.getters.getBoards

      expect(actual)
        .not
        .toEqual(emptyBoards)
  
    })
  })