import { getCardObject, createDeck, isMovable, isPileCompleted } from '@/util/Card'

export default {
    startSolitaire({ commit, dispatch }){
        commit('setGameName', 'normalSolitaire')
        commit('setGameRules', 'normalSolitaire')
        
        dispatch('init')
        
    },
    startReverseSolitaire({ commit, dispatch }){
        commit('setGameName', 'reverseSolitaire')
        commit('setGameRules', 'reverseSolitaire')
        
        dispatch('init')
    },
    move({ commit, dispatch  }, payload){
        if(payload && payload.cards && payload.cards.length > 0 && payload.boardId){
            if(isMovable(payload.cards[0], payload.boardId)){
                
                commit('openNextCard', payload)
                commit('removeFromBoard', payload)
                commit('addToBoard', payload)

                dispatch('checkCompletedPiles', payload.boardId)
                
            }
        }
    },
    checkCompletedPiles({ commit, state }, boardId){
        const pileComplete = isPileCompleted(boardId)

        if(pileComplete){
            const pileCompletedPayload = {
                cards: pileComplete,
                boardId
            }

            commit('pileComplete', pileCompletedPayload)
            commit('increaseCompletedPiles')
            commit('openLastCard', pileCompletedPayload)
            
            if(state.completedPiles == 8){
                commit('gameOver')
                commit('showToast', {
                    type: 'success',
                    message: `Game completed succesfully! Congratulations.`
                })
            }
            else{
                commit('showToast', {
                    type: 'success',
                    message: `Pile ${ state.completedPiles } is completed!`
                })
            }
        }
    },
    openSeconDeck({ state, commit }){
        if(state.secondDeck && state.secondDeck.length > 0){
            for(let i=0;i<state.boards.length;i++){
                const lastCard = state.secondDeck.pop()
                
                if(lastCard){
                    const card = getCardObject(lastCard, true)
                    
                    const payload = {
                        board: state.boards[i],
                        card
                    }

                    commit('pushCard', payload)
                }
            }
        }
    },
    init({ dispatch, commit }){
        commit('showToast', {
            type: 'info',
            message: 'The game has started, good luck!'
        })
        commit('initCompletedPiles')
        commit('gameStart')
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
        const { mainDeck, secondDeck } = createDeck();
        commit('setSecondDeck', secondDeck)

        while(mainDeck.length > 0){
            for(let i=0;i<state.boards.length;i++){
                const lastCard = mainDeck.pop()
                
                if(lastCard){
                    const card = getCardObject(lastCard, mainDeck.length > 13 ? false : true)
                    
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
