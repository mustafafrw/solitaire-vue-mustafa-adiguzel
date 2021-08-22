import { getGameRules, getBoardwithCardId, getBoardwithId } from '@/util/functions'

export default {
    setGameName(state, payload){
        state.gameName = payload
    },
    setGameRules(state, payload){
        state.gameRules = getGameRules(payload)
    },
    addToBoard(state, payload) {
        const dropBoard = getBoardwithId(payload.boardId);

        if(dropBoard){
            payload.cards.forEach(dragCard => {
                dropBoard.cards.push(dragCard)
            });
        }
    },
    removeFromBoard(state, payload) {
       
        const cardsBoard = getBoardwithCardId(payload.cards[0].id);

        if(cardsBoard){
            payload.cards.forEach(dragCard => {
                cardsBoard.cards = cardsBoard.cards.filter(card => card.id !== dragCard.id);
            })
        }
    },
    openNextCard(state, payload){
        const cardsBoard = getBoardwithCardId(payload.cards[0].id);

        if(cardsBoard && cardsBoard.cards.length > payload.cards.length){
            const nextCard = cardsBoard.cards[cardsBoard.cards.length - (payload.cards.length + 1)];
            if(!nextCard.open) {
                nextCard.open = true;
            }
        }
    },
    pileComplete(state, payload){

        const dropBoard = getBoardwithId(payload.boardId);

        if(dropBoard){
            payload.cards.forEach(dropCard => {
                dropBoard.cards = dropBoard.cards.filter(card => card.id !== dropCard.id);
            })
        }
    },
    openLastCard(state, payload){
        const cardsBoard = getBoardwithId(payload.boardId);

        if(cardsBoard && cardsBoard.cards.length > 0){
            const nextCard = cardsBoard.cards[cardsBoard.cards.length - 1];
            if(!nextCard.open) {
                nextCard.open = true;
            }
        }

    },
    setBoards(state, payload){
        state.boards = payload;
    },
    setSecondDeck(state, payload){
        state.secondDeck = payload;
    },
    pushCard(state, payload){
        if(payload.board && payload.card){
            payload.board.cards.push(payload.card);
        }
    },
    increaseCompletedPiles(state){
        state.completedPiles = state.completedPiles + 1;
    },
    initCompletedPiles(state){
        state.completedPiles = 0
    },
    gameStart(state){
        state.gameStatus = 'playing'
    },
    gameOver(state){
        state.gameStatus = 'over'
    },
    showToast(state, payload){
        if(this._vm.$toast){
            this._vm.$toast[payload.type](payload.message,{
                duration: 3000
            });
        }
    }
};
