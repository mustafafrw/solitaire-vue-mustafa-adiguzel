<template>
  
  <div class="table-deck">
      
      <div class="deck-card-container">
        <div class="card card-last">
          <div class="card-back image-fill">

          </div>
      </div>
      </div>
      <div class="placeholder-container">
        <div v-for="index in placeHolderCount" :key="`p-${ index }`" class="card card-placeholder">
          
        </div>
        <Card 
            v-for="index in completedPiles" :key="`cp-${ index }`"
            :card = "defaultCompletedCard"
            :isLast = "true"
        />

      </div>
    </div>
    
</template>

<script>
import Card from '@/components/Card'
export default {
    components: {
        Card
    },
    data(){
        return {
            defaultCompletedCard: {
                title: 'A',
                number: "1",
                open: true
            }
        }
    },
    computed: {  
        completedPiles(){
            return this.$store.getters.completedPiles
        },
        placeHolderCount(){
            return 8 - this.completedPiles
        }
    }
}
</script>

<style>

</style>