import { nanoid } from 'nanoid'
import { cardTitle, createDeck, isMovable, isPileCompleted } from '@/util/Card'

export default {
    move({ commit }, payload){
        if(payload && payload.cards && payload.cards.length > 0 && payload.boardId){
            if(isMovable(payload.cards[0], payload.boardId)){
                
                commit('openNextCard', payload)
                commit('removeFromBoard', payload)
                commit('addToBoard', payload)

                const pileComplete = isPileCompleted(payload.boardId)
                if(pileComplete){

                    const pileCompletedPayload = {
                        cards: pileComplete,
                        boardId: payload.boardId
                    }
                    commit('pileComplete', pileCompletedPayload)
                    commit('openLastCard', pileCompletedPayload)

                }
            }
        }
    },
    init({ dispatch }){
        // for(let i=1;i<=13;i++){
        //     const card = {

        //     }
        // }
        dispatch('initBoards')
        dispatch('initCards')
    },
    initBoards({ commit }){
        let boards = []
        for(let i=1;i<=10;i++){
            const board = {
                id: `board-${ i }`,
                cards: []
            }
            boards.push(board)
        }
        commit('setBoards', boards)
    },
    initCards({ commit, state }){
        const deck = createDeck();

        while(deck.length > 0){
            for(let i=0;i<state.boards.length;i++){
                const lastCard = deck.pop()
                
                if(lastCard){
                    const card = {
                        id: nanoid(),
                        number: lastCard,
                        title: cardTitle(lastCard),
                        open: deck.length > 11 ? false : true
                    }
                    
                    const payload = {
                        board: state.boards[i],
                        card
                    }

                    commit('pushCard', payload)
                }
            }
        }
    },

};
