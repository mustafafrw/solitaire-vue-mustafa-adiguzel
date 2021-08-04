export default {
    addToBoard(state, payload) {
        if(payload && payload.card && payload.card.open){
            const dropBoard = state.boards.find(board => board.id === payload.boardId);
            if(dropBoard){
                dropBoard.cards.push(payload.card)
            }
        }
    },
    removeFromBoard(state, payload) {
        if(payload && payload.card && payload.card.open){
            const cardsBoard = state.boards.find(board => {
                return board.cards.find(card => card.id === payload.card.id)
            });
            if(cardsBoard){
                cardsBoard.cards = cardsBoard.cards.filter(card => card.id !== payload.card.id);
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
