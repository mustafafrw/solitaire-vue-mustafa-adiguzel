export default {
    addToBoard(state, payload) {
        const dropBoard = state.boards.find(board => board.id === payload.boardId);

        if(dropBoard){
            payload.cards.forEach(dragCard => {
                dropBoard.cards.push(dragCard)
            });
        }
    },
    removeFromBoard(state, payload) {
        const cardsBoard = state.boards.find(board => {
            return board.cards.find(card => card.id === payload.cards[0].id)
        });

        if(cardsBoard){
            payload.cards.forEach(dragCard => {
                cardsBoard.cards = cardsBoard.cards.filter(card => card.id !== dragCard.id);
            })
        }
    },
    openNextCard(state, payload){
        const cardsBoard = state.boards.find(board => {
            return board.cards.find(card => card.id === payload.cards[0].id)
        });

        if(cardsBoard && cardsBoard.cards.length > payload.cards.length){
            const nextCard = cardsBoard.cards[cardsBoard.cards.length - (payload.cards.length + 1)];
            if(!nextCard.open) {
                nextCard.open = true;
            }
        }
    },
    pileComplete(state, payload){
        const dropBoard = state.boards.find(board => board.id === payload.boardId);

        if(dropBoard){
            payload.cards.forEach(dropCard => {
                dropBoard.cards = dropBoard.cards.filter(card => card.id !== dropCard.id);
            })
        }
    },
    openLastCard(state, payload){
        const cardsBoard = state.boards.find(board => board.id === payload.boardId);

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
    pushCard(state, payload){
        if(payload.board && payload.card){
            payload.board.cards.push(payload.card);
        }
    },
    increaseCompletedPiles(state){
        state.completedPiles++;
    },
    gameStart(state){
        state.gameStatus = 'playing'
    },
    gameOver(state){
        state.gameStatus = 'over'
    }
};
