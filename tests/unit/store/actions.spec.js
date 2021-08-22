import mainModule from '@/store/index'
describe('Main Module Tests - Actions', () => {
    it('should init boards for normal Solitaire', () => {
  
      const emptyBoards = []
  
      mainModule.dispatch('startSolitaire')
  
      const actual = mainModule.getters.getBoards

      expect(actual)
        .not
        .toEqual(emptyBoards)
  
    })
    it('should init boards for reverse Solitaire', () => {
  
      const emptyBoards = []
  
      mainModule.dispatch('startReverseSolitaire')
  
      const actual = mainModule.getters.getBoards

      expect(actual)
        .not
        .toEqual(emptyBoards)
  
    })
})