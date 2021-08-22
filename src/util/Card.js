// import mainModule from '@/store/index'
import { getBoardwithCardId, getBoardwithId, lastCardsInBoards } from '@/util/functions'
import { shuffle, orderBy } from "lodash";
import { nanoid } from 'nanoid'
import mainModule from '@/store/index'

export const cardTitle = (cardNumber) => {
    if(cardNumber == 13) return 'K'
    else if(cardNumber == 12) return 'Q'
    else if(cardNumber == 11) return 'J'
    else if(cardNumber == 1) return 'A'
    else return cardNumber
}

export const getCardObject = (number, open) => {
    return {
        id: nanoid(),
        number,
        title: cardTitle(number),
        open
    }
}

export const createDeck = () => {
    let deck = Array.from({ length: 13 }, (_, i) => i + 1)
    deck = deck.concat(deck)
        .concat(deck)
        .concat(deck)
        .concat(deck)
        .concat(deck)
        .concat(deck)
        .concat(deck)

    deck = shuffle(deck)

    return {
        mainDeck : deck.slice(0,54),
        secondDeck: deck.slice(54, deck.length),
    }
}


export const isMovable = (dragCard, dropBoardId) => {
    if(!dragCard.open) return false

    const cardsBoard = getBoardwithCardId(dragCard.id)

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
    const incrementRule = mainModule.state.gameRules.increment;

    if(dropBoard.cards.length > 0){
        const lastCardObject = dropBoard.cards[dropBoard.cards.length - 1]
        if(lastCardObject && lastCardObject.number === (dragCard.number + incrementRule)) return true
    }else{
        return true
    }
}

export const orderedChilds = (dragCard, cardsBoard) => {
    let draggingCards = [dragCard]

    if(isLastCard(dragCard, cardsBoard)){ 
        return draggingCards 
    }
    else if(cardsBoard.cards.length > 0){
        const incrementRule = mainModule.state.gameRules.increment;

        let dragCardIndex = -1;
        let tempCard = dragCard;
        
        for(let index = 0; index < cardsBoard.cards.length; index++){
            let card = cardsBoard.cards[index];
            if(dragCardIndex === -1){
                if(card.id === dragCard.id){
                    dragCardIndex = index;
                }
            }else{
                if((card.number + incrementRule) === tempCard.number){
                    draggingCards.push(card);
                    tempCard = card;
                    if(index === cardsBoard.cards.length -1){
                        return draggingCards;
                    }
                }
            }
        }
        return false
    }
}

export const isPileCompleted = (boardId) => {
    const board = getBoardwithId(boardId)

    if(board.cards.length >= 13){
        const firstCardNumberRule = mainModule.state.gameRules.firstCardNumber;

        const firstCards = board.cards.filter(card => card.number === firstCardNumberRule && card.open == true)

        for(let i= 0; i<firstCards.length; i++){
            const card = firstCards[i]
            const ordered = orderedChilds(card, board)
            if(ordered && ordered.length == 13) return ordered
        }

    }

    return false;
}

export const getHint = () => {
    let lastCards = lastCardsInBoards();

    const incrementRule = mainModule.state.gameRules.increment;

    if(incrementRule > 0)
        lastCards = orderBy(lastCards, ['number'],['desc']);
    else
        lastCards = orderBy(lastCards, ['number'],['asc']);

    let hints = []
    for(let i=0; i < lastCards.length -1; i++){

        const card = lastCards[i];
        const nextCard = lastCards[i+1];

        if(card.number === (nextCard.number + incrementRule)){
            hints.push([
                card,
                nextCard
            ])
        }
    }
    
    if(hints.length > 0){
        return shuffle(hints)[0]
    }
}