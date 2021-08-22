<template>
  <div class="home">

    <TableTop />

    <TableDeck v-if="gameStatus === 'playing'" />

    <TableBody v-if="gameStatus === 'playing'" />
    
    <GameOver v-if="gameStatus === 'over'" />

  </div>
</template>

<script>

import TableTop from '@/components/Shared/TableTop'
import TableDeck from '@/components/Shared/TableDeck'
import TableBody from '@/components/Shared/TableBody'
import GameOver from '@/components/Shared/GameOver'

export default {
  name: 'Home',
  components: {
    TableTop,
    TableDeck,
    TableBody,
    GameOver
  },
  
  computed: {
    gameStatus(){
        return this.$store.getters.gameStatus
    }
  },
  
}
</script>
<style>


</style>