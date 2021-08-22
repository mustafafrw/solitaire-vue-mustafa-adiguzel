import { createLocalVue, shallowMount  } from '@vue/test-utils'
import StartGame from '@/views/Solitaire'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('Solitaire page Tests', () => {
    let store
    let mockGameStatus

    beforeEach(() => {
        mockGameStatus = jest.fn();
        
        store = new Vuex.Store({
            getters: {
                gameStatus: mockGameStatus
            }
        })
    })
    it("When the gameStatus is playing, the tabletop component should be on the page.", () => {
        mockGameStatus.mockReturnValue('playing');

        const wrapper = shallowMount(StartGame, {
            localVue, store
        })

        expect(wrapper.html())
            .toContain('tabletop')
    })
    it("When the gameStatus is playing, the tablebody and tabledeck components should be on the page.", () => {
        mockGameStatus.mockReturnValue('playing');

        const wrapper = shallowMount(StartGame, {
            localVue, store
        })

        expect(wrapper.html())
            .toContain('tablebody')
        expect(wrapper.html())
            .toContain('tabledeck')
    })
    it("When the gameStatus is playing, the gameover component should not be on the page.", () => {
        mockGameStatus.mockReturnValue('playing');

        const wrapper = shallowMount(StartGame, {
            localVue, store
        })

        expect(wrapper.html())
            .not
            .toContain('gameover')
    })
    it("When the gameStatus is over, the gameover component should be on the page.", () => {
        mockGameStatus.mockReturnValue('over');

        const wrapper = shallowMount(StartGame, {
            localVue, store
        })

        expect(wrapper.html())
            .toContain('gameover')
    })
    it("When the gameStatus is over, the tablebody and tabledeck components should be on the page.", () => {
        mockGameStatus.mockReturnValue('over');

        const wrapper = shallowMount(StartGame, {
            localVue, store
        })

        expect(wrapper.html())
            .not
            .toContain('tablebody')
        expect(wrapper.html())
            .not
            .toContain('tabledeck')
    })
    it("When the gameStatus is over, the tabletop component should be on the page.", () => {
        mockGameStatus.mockReturnValue('over');

        const wrapper = shallowMount(StartGame, {
            localVue, store
        })

        expect(wrapper.html())
            .toContain('tabletop')
    })
})
