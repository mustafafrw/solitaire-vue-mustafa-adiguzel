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