import mainModule from '@/store/index'

export const getBoard = (findFunction) => {
    return mainModule.state.boards.find(findFunction);
}
export const getBoardwithId = (boardId) => {
    return getBoard(board => board.id === boardId);
}
export const getBoardwithCardId = (cardId) => {
    return getBoard(board => board.cards.find(card => card.id === cardId));
}
export const getGameRules = (gameName) => {
    const gameRules = {
        normalSolitaire: {
            firstCardNumber: 13,
            increment: 1
        },
        reverseSolitaire: {
            firstCardNumber: 1,
            increment: -1
        }
    }
    return gameRules[gameName]
}