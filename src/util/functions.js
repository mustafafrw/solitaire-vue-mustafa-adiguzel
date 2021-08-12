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