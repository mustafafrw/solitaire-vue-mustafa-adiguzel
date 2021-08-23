import { createLocalVue, shallowMount } from '@vue/test-utils'
import Board from '@/components/Main/Board'
import Vuex from 'vuex'
const localVue = createLocalVue()

localVue.use(Vuex)

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
    it('should fire the drop event', () => {
        
        const mockEvent = {
            dataTransfer: {
                getData() {
                    return `
                        { "id": "card-1", "name": "Card 1" }
                    `;
                }
            },
        }

        const actions = {
            move: jest.fn(),
        }
        
        const store = new Vuex.Store({
            actions
        })

        //Arrange
        const boardId = "board-1"

        // Act
        const wrapper = shallowMount(Board, {
            localVue, store,
            propsData: {
                id: boardId
            }
        })

        const board = wrapper.find(`#${ boardId }`)
        board.trigger('drop', mockEvent);

        // Assert
        expect(actions.move)
            .toHaveBeenCalled()
    })
})