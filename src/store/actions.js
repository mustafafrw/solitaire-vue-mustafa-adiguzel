// import { shuffle } from "lodash";

import { shuffle } from "lodash";
import { nanoid } from 'nanoid'

export default {
    move({ commit }, payload){
        
        if(payload && payload.card && payload.card.open){
            commit('openNextCard', payload)
            commit('removeFromBoard', payload)
            commit('addToBoard', payload)
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
        let deck = Array.from({length: 13}, (_, i) => i + 1)
        deck = deck.concat(deck)
            .concat(deck)
            .concat(deck)
        
        deck = shuffle(deck)
        while(deck.length > 0){
            for(let i=0;i<state.boards.length;i++){
                const lastCard = deck.pop()
                if(lastCard){
                    const card = {
                        id: nanoid(),
                        number: lastCard,
                        title: lastCard,
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
    }
};
