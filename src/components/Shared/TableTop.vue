<template>
  <div>
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
                @click="backResult = true"
            >Back</GButton>
          </div>
        </div>
        
    </div>
    <QuestionDialog 
        :showDialog= "backResult" 
        @close = "backResult = false"
        @agree = "backToStartGame"
    />
  </div>
</template>

<script>
import GButton from '@trendyol-js/grace/core/GButton';
import QuestionDialog from '@/components/Dialog/QuestionDialog';
export default {
    components: {
        GButton,
        QuestionDialog
    },
    data(){
        return {
            time: 0,
            backResult: false,
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
            this.backResult = false
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