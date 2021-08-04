<template>
  <div
    :id="id"
    class="board"
    @drop='onDrop($event, id)' 
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
            type: String
        }
    },
    methods: {
       onDrop(evt, boardId) {
        const card = JSON.parse(evt.dataTransfer.getData('card'))
        const payload = {
          boardId,
          card
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
    margin-top: 5px;
}
</style>