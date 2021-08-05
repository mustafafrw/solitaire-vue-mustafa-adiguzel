<template>
  <div class="home">
    <div class="table">
      <Board v-for="board in boards" :key="board.id" :id="board.id">
        <div v-if="board.cards && board.cards.length > 0">
          <Card 
            v-for="(card, index) in board.cards"
            :key="card.id"
            :card="card"
            class='drag-el' 
            :draggable="card.open"
            :isLast="index == board.cards.length - 1 ? true : false"
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
  height: 160px;
}
</style>