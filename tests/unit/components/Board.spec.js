import { shallowMount } from '@vue/test-utils'

import Board from '@/components/Main/Board'

describe('Board Component Tests', () => {
    it('should create an html element with the id prop', () => {
    
        //Arrange
        const boardId = "board-1"

        // Act
        const wrapper = shallowMount(Board, {
            propsData: {
                id: boardId
            }
        })

        const board = wrapper.find(`#${ boardId }`)
        
        // Assert
        expect(board.exists())
            .toBe(true)
    })
})