<template>
  <div
    :id="id"
    class="board"
    @drop='onDrop($event)' 
    @dragover.prevent 
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: ''
        }
    },
    methods: {
       onDrop(e) {
        const cards = JSON.parse(e.dataTransfer.getData('cards'))
        const payload = {
          boardId: this.id,
          cards
        }
        this.$store.dispatch('move', payload)
      },
    }
}
</script>

<style>
.board {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100;
}
.board .card {
    margin-top: -10px;
}
</style>