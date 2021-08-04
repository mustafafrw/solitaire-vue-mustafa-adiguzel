<template>
  <div class="home">
    <div class="table">
      <Board v-for="board in boards" :key="board.id" :id="board.id">
        <div v-if="board.cards && board.cards.length > 0">
          <Card 
            v-for="card in board.cards"
            :key="card.id"
            :card="card"
            class='drag-el' 
            :draggable="card.open"
          />
        </div>
        <div v-else class="card card-placeholder"></div>
      </Board>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import Board from '@/components/Board'
export default {
  name: 'Home',
  components: {
    Card,
    Board
  },
  data(){
    return {
       drag: false,
       
       items: [
         {    
           id: 1,
           number: 1,
           title: "A",
           list: 1
         },
         {    
           id: 2,
           number: 2,
           title: "2",
           list: 2
         }
       ]
    }
  },
  computed: {
    boards(){
      return this.$store.getters.getBoards
    },
  },
}
</script>
<style scoped>
.drop-zone {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 10px;
    display: inline-block;
    margin: 20px;
    min-width: 400px;
    min-height: 600px;
}
.table {
  display: flex;
  flex-direction: row;
}
.table .board {
  margin-right: 10px;
}
.card-placeholder{
  border: 3px groove #d6d6d6;
}
</style>