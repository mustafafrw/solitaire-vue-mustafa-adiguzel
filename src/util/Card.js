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

    return isLastCard(dragCard, cardsBoard) || areChildsInOrder(dragCard, cardsBoard)
           && isChildCard(dragCard, dropBoard)
}

export const isLastCard = (dragCard, cardsBoard) => {
    if(cardsBoard.cards.length > 0){
        const lastCardObject = cardsBoard.cards[cardsBoard.cards.length - 1]
        if(lastCardObject && lastCardObject.id === dragCard.id) return true
    }
    return false;
}

export const isChildCard = (dragCard, dropBoard) => {
    if(dropBoard.cards.length > 0){
        const lastCardObject = dropBoard.cards[dropBoard.cards.length - 1]
        if(lastCardObject && lastCardObject.number === dragCard.number + 1) return true
    }else{
        return true
    }
}

export const areChildsInOrder = (dragCard, cardsBoard) => {
    let inOrder = false;
    if(cardsBoard.cards.length > 0){
        let dragCardIndex = -1;
        let tempCard = dragCard;
        cardsBoard.cards.forEach((card, index) => {
            if(card.id === dragCard.id) {
                dragCardIndex = index;
            }else if(dragCardIndex > -1){
                // look for the next cards
                if((card.number + 1) === tempCard.number){
                    tempCard = card;
                    if(index === cardsBoard.cards.length -1){
                        inOrder = true;
                        return;
                    }
                }else{
                    inOrder = false;
                    return;
                }
            }
        });

    }
    return inOrder;
}