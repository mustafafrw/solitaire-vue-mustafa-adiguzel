export default {
    getBoards(state){
        return state.boards;
    },
    completedPiles(state){
        return state.completedPiles;
    },
    gameStatus(state){
        return state.gameStatus;
    },
    secondDeckStatus(state){
        return state.secondDeck && state.secondDeck.length > 0 ? true : false;
    },
};
