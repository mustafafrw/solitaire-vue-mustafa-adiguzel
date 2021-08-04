export default {
    addToBoard(state, payload) {
        const dropBoard = state.boards.find(board => board.id === payload.boardId);
        if(dropBoard){
            dropBoard.cards.push(payload.card)
        }
    },
    removeFromBoard(state, payload) {
        const cardsBoard = state.boards.find(board => {
            return board.cards.find(card => card.id === payload.card.id)
        });
        if(cardsBoard){
            cardsBoard.cards = cardsBoard.cards.filter(card => card.id !== payload.card.id);
        }
    },
    openNextCard(state, payload){
        const cardsBoard = state.boards.find(board => {
            return board.cards.find(card => card.id === payload.card.id)
        });
        if(cardsBoard && cardsBoard.cards.length > 1){
            const nextCard = cardsBoard.cards[cardsBoard.cards.length -2];
            if(!nextCard.open) {
                nextCard.open = true;
            }
        }
    },
    setBoards(state, payload){
        state.boards = payload;
    },
    pushCard(state, payload){
        if(payload.board && payload.card){
            payload.board.cards.push(payload.card);
        }
    }
};
