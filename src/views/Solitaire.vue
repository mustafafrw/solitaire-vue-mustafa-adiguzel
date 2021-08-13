<template>
  <div class="home">
    <TableTop />
    <TableDeck />

    <div class="table-body">
      
      <Board v-for="board in boards" :key="board.id" :id="board.id">
        <div v-if="board && board.cards && board.cards.length > 0">
        <div 
            v-for="(card, index) in board.cards"
            :key="card.id"
            :ref="card.id"
            :draggable="card.open && isLastCard(card, board) || childsInOrder(card, board)"

            @dragstart = "startDrag($event, card, board)"
            @drag = "dragging($event)"
            @dragend = "drop()"
            @drop = "drop()"
          >
            <Card 
              :card="card"
              class='drag-el' 
              :isLast="index == board.cards.length - 1 ? true : false"
            />
        </div>
        </div>
        <div v-else class="card card-placeholder">
          
        </div>
      </Board>
      
    </div>
    
  </div>
</template>

<script>
import Card from '@/components/Card'
import Board from '@/components/Board'
import TableTop from '@/components/Shared/TableTop'
import TableDeck from '@/components/Shared/TableDeck'
import { isLastCard, orderedChilds } from '@/util/Card'

export default {
  name: 'Home',
  components: {
    Card,
    Board,
    TableTop,
    TableDeck
  },
  data(){
    return {
        origin: null,
        draggingCards: null
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
    startDrag(e, card, board) {
        if(card && board){
            this.setOrigin(e)

            const previous = e.target.previousSibling.lastChild
            
            previous.setAttribute('class', "card card-last")
            previous.style.position = "absolute"

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
                  z-index:99999;
                  position: sticky;
                  pointer-events: none;
                  transform: scale(1.1, 1.1) rotate(0deg) translate(${ x }px, ${ y }px);
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
           if(draggingCard) draggingCard.removeAttribute('style')
         });

       }
    },
  }
}
</script>
<style>
.toaster-wrapper {
  position: absolute !important;
  right: 10px !important;
  bottom: 10px !important;
  top: inherit !important;
}

.table-body {
  display: flex;
  flex-direction: row;
}
.card-placeholder{
  border: 3px groove #d6d6d6;
  box-sizing: border-box;
  height: 10vw;
  
}
.placeholder-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
}
.deck-card-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20%;
}
.table-deck {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
}
</style>