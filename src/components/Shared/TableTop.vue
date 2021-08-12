<template>
  <div class="table-top">
        <div class="time-container">
          <div>
             {{ time }}
          </div>
        </div>
        <div class="restart-container">
          <div>
            <GButton
                class="g-mx-10"
            >Restart</GButton>
            <GButton
                class="g-mx-10"
                variant="secondary"
                @click="backToStartGame"
            >Back</GButton>
          </div>
        </div>
  </div>
</template>

<script>
import GButton from '@trendyol-js/grace/core/GButton';

export default {
    components: {
        GButton
    },
    data(){
        return {
            time: 0
        }
    },
    computed: {
        gameStatus(){
            return this.$store.getters.gameStatus
        }
    },
    mounted(){
        if(this.gameStatus){
            this.startTimer()
        }
    },
    methods: {
        startTimer(){
            this.time = 0;
            setInterval(() => {
                this.time +=1;
            }, 1000)
        },
        backToStartGame(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.table-top {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin-bottom: 10px;
  height: 60px;
}
</style>