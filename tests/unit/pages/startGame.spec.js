import { createLocalVue, mount  } from '@vue/test-utils'
import StartGame from '@/views/StartGame'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

describe('StartGame page Tests', () => {
    let actions
    let store
    let router

    let wrapper
    beforeEach(() => {
        actions = {
          startSolitaire: jest.fn(),
          startReverseSolitaire: jest.fn(),
        }

        store = new Vuex.Store({
          actions
        }),

        router = new VueRouter()

        wrapper = mount(StartGame, {
            localVue, store, router
        })
    })

    it("should have 2 options one of them is for normal solitaire another is reverse solitaire", () => {

        const normalSolitaireButton = wrapper.findAll(".option-container")

        expect(normalSolitaireButton).toHaveLength(2)

    })
    it("should dispatch startSolitaire action when click the first Play button", async () => {

        const normalSolitaireButton = wrapper.findAll(".option-container button").at(0)

        await normalSolitaireButton.trigger('click')

        expect(actions.startSolitaire)
            .toHaveBeenCalled()
    })
    it("should dispatch startReverseSolitaire action when click the second Play button", async () => {

        const reverseSolitaireButton = wrapper.findAll(".option-container button").at(1)

        await reverseSolitaireButton.trigger('click')

        expect(actions.startReverseSolitaire)
            .toHaveBeenCalled()
    })
})
