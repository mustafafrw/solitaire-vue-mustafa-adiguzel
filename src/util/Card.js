import mainModule from '@/store/index'

export const cardTitle = (cardNumber) => {
    if(cardNumber == 13) return 'K'
    else if(cardNumber == 12) return 'Q'
    else if(cardNumber == 11) return 'J'
    else if(cardNumber == 1) return 'A'
    else return cardNumber
}

export const isMovable = (dragCard, dropBoardId) => {
    console.log('dropBoardId', dropBoardId)
    
    const cardsBoard = mainModule.state.boards.find(board => {
        return board.cards.find(card => card.id === dragCard.id)
    });

    const dropBoard = mainModule.state.boards.find(board => board.id === dropBoardId);


    return isLastCard(dragCard, cardsBoard)
           && isSiblingCard(dragCard, dropBoard)
}

export const isLastCard = (dragCard, cardsBoard) => {
    if(cardsBoard.cards.length > 0){
        const lastCardObject = cardsBoard.cards[cardsBoard.cards.length - 1]
        if(lastCardObject && lastCardObject.id === dragCard.id) return true
    }
    return false;
}

export const isSiblingCard = (dragCard, dropBoard) => {
    if(dropBoard.cards.length > 0){
        const lastCardObject = dropBoard.cards[dropBoard.cards.length - 1]
        if(lastCardObject && lastCardObject.number === dragCard.number + 1) return true
    }
    return false
}