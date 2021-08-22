<template>
  <div class="table-body">
      
    <Board v-for="board in boards" :key="board.id" :id="board.id">
        <div v-if="board && board.cards && board.cards.length > 0">
            <transition-group name="card-list" tag="div">
            <div 
                v-for="(card, cardIndex) in board.cards"
                :key="card.id"
                :ref="card.id"
                :draggable="card.open && isLastCard(card, board) || childsInOrder(card, board)"

                @dragstart = "startDrag($event, cardIndex, card, board)"
                @drag = "dragging($event)"
                @dragend = "drop()"
                @drop = "drop()"
            >
                <Card 
                    :card="card"
                />
            </div>
            </transition-group>
            
        </div>
        <div v-else class="card card-placeholder">
            
        </div>
    </Board>
    
    <GButton
        class="hint-button"
        variant="warning"
        @click="getHint"
    >Hint</GButton>
  </div>
</template>

<script>
import Card from '@/components/Main/Card'
import Board from '@/components/Main/Board'
import GButton from '@trendyol-js/grace/core/GButton';

import { isLastCard, orderedChilds } from '@/util/Card'
import { getHint } from '@/util/Card'

export default {
    components: {
        Card,
        Board,
        GButton
    },
    data(){
        return {
            origin: null,
            draggingCards: null,
            previousCard: null
        }
    },
    computed: {
        boards(){
            return this.$store.getters.getBoards
        },
    },
    methods: {
        childsInOrder(card, board){
            return orderedChilds(card, board)
        },
        isLastCard(card, board){
            return isLastCard(card, board)
        },
        startDrag(e, cardIndex, card, board) {
            if(card && board){

                this.setOrigin(e)

                this.draggingCards = orderedChilds(card, board)

                e.dataTransfer.setData('cards', JSON.stringify(this.draggingCards))
                e.dataTransfer.setDragImage(new Image("0", "0"), -10, -10);
            }
        },
        setOrigin(e) {
            this.origin = {
                x: e.pageX,
                y: e.pageY
            };
        },
        dragging(e) {
            if(this.draggingCards && this.draggingCards.length > 0){

                this.draggingCards.forEach(card => {

                    const draggingCard = this.$refs[card.id][0]
                    
                    const x = e.pageX - this.origin.x;
                    
                    const y = e.pageY - this.origin.y;

                    let css = "";

                    if (e.pageX == 0) {
                        css = 
                        `
                        z-index:9999;
                        transform:translate(0px,0px);
                        display:none;
                        `;
                    } else {
                        css =
                        `
                        z-index: 99999;
                        position: sticky;
                        pointer-events: none;
                        transform: scale(1.02, 1.02) rotate(0deg) translate(${ x }px, ${ y }px);
                        ;
                        `;
                    }
                    draggingCard.style.cssText = css;

                });
            }
        },
        drop(){
            if(this.draggingCards && this.draggingCards.length > 0){
                
                this.draggingCards.forEach(card => {
                    const draggingCard = this.$refs[card.id][0]
                    if(draggingCard){
                        draggingCard.removeAttribute('style')
                    }
                });

            }
        },
        getHint(){
            const hints = getHint();

            if(hints && hints.length > 0){

                hints.forEach(hintCard => {
                    const cardRef = this.$refs[hintCard.id][0]
                        .querySelector(".card-open")
                    
                    if(cardRef){

                        cardRef.style.cssText = `
                            background:linear-gradient(135deg, #f0c512 0%,#da0641 100%);
                        `;

                        setTimeout(() => {
                            cardRef.removeAttribute('style')
                        }, 1000);
                        
                    }
                    
                })

            }
        }
    }
}
</script>

<style>

</style>