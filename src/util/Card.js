// import mainModule from '@/store/index'
import { getBoardwithCardId, getBoardwithId } from '@/util/functions'
import { shuffle } from "lodash";

export const cardTitle = (cardNumber) => {
    if(cardNumber == 13) return 'K'
    else if(cardNumber == 12) return 'Q'
    else if(cardNumber == 11) return 'J'
    else if(cardNumber == 1) return 'A'
    else return cardNumber
}

export const createDeck = () => {
    let deck = Array.from({ length: 13 }, (_, i) => i + 1)
    deck = deck.concat(deck)
        .concat(deck)
        .concat(deck)
    
    return shuffle(deck)
}


export const isMovable = (dragCard, dropBoardId) => {
    console.log('dropBoardId', dropBoardId)
    
    const cardsBoard = getBoardwithCardId(dragCard.id)
    
    // mainModule.state.boards.find(board => {
    //     return board.cards.find(card => card.id === dragCard.id)
    // });

    const dropBoard = getBoardwithId(dropBoardId)

    return (
           isLastCard(dragCard, cardsBoard) 
           || orderedChilds(dragCard, cardsBoard)
           )
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

export const orderedChilds = (dragCard, cardsBoard) => {
    let draggingCards = [dragCard]

    let inOrder = false;
    if(isLastCard(dragCard, cardsBoard)){ 
        return draggingCards 
    }
    else if(cardsBoard.cards.length > 0){

        let dragCardIndex = -1;
        let tempCard = dragCard;

        cardsBoard.cards.forEach((card, index) => {
            if(card.id === dragCard.id) {
                dragCardIndex = index;
            }else if(dragCardIndex > -1){
                // look for the next cards
                if((card.number + 1) === tempCard.number){
                    draggingCards.push(card);
                    tempCard = card;
                    if(index === cardsBoard.cards.length -1){
                        inOrder = true;
                        return;
                    }
                }
                else{
                    inOrder = false;
                    return;
                }
            }
        });
    }

    if(inOrder) return draggingCards;
    else return false
}
export const isPileCompleted = (boardId) => {
    const board = getBoardwithId(boardId)

    if(board.cards.length >= 13){

        const Ks = board.cards.filter(card => card.number === 13 && card.open == true)

        for(let i= 0; i<Ks.length; i++){
            const card = Ks[i]
            const ordered = orderedChilds(card, board)
            if(ordered && ordered.length == 13) return ordered
        }

    }

    return false;
}