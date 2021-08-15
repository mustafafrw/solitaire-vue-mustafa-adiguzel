<template>
  <div>
      <div class="table-top">
        <div class="time-container">
          <div class="time-text">
            <img src="time-icon.svg" alt="">
            <span>
                {{ seconds | secondToDisplayTime }}
            </span>
          </div>
        </div>
        <div class="restart-container">
          <div>
            <GButton
                class="g-mx-10"
                variant="secondary"
                @click="restartDialogState = true"
            >Restart</GButton>
            <GButton
                class="g-mx-10"
                variant="secondary"
                @click="backDialogState = true"
            >Back</GButton>
          </div>
        </div>
        
    </div>
    <BackDialog 
        :dialogState= "backDialogState"
        @close = "backDialogState = false"
        @agree = "backToStartGame"
    />
    <RestartDialog 
        :dialogState= "restartDialogState"
        @close = "restartDialogState = false"
        @agree = "restartGame"
    />
  </div>
</template>

<script>
import GButton from '@trendyol-js/grace/core/GButton';
import BackDialog from '@/components/Dialog/BackDialog';
import RestartDialog from '@/components/Dialog/RestartDialog';
export default {
    components: {
        GButton,
        BackDialog,
        RestartDialog
    },
    data(){
        return {
            seconds: 0,
            backDialogState: false,
            restartDialogState: false
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
            this.seconds = 0;
            setInterval(() => {
                this.seconds +=1;
            }, 1000)
        },
        backToStartGame(){
            this.backDialogState = false
            this.$router.push('/')
        },
        restartGame(){
            this.restartDialogState = false
            this.$store.dispatch('startSolitaire')
        }
    },
    filters: {
        secondToDisplayTime(val){
            if(val < 60){
                let sec = val;
                if(sec < 10) sec = `0${ sec }`;
                
                return `00:${ sec }`
            }else{
                let min = Math.floor(val / 60);
                if(min < 10) min = `0${ min }`;

                let sec = val % 60;
                if(sec < 10) sec = `0${ sec }`;

                return `${ min }:${ sec }`
            }
        }
    }
}
</script>

<style scoped>
.table-top {
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-bottom: 10px;
  height: 60px;
}
.time-text  {
    width: 200px;
}
.time-text span {
    position: absolute;
    top: 18px;
    font-weight: 600;
    font-size: 1.5em;
    color: #fff;
}
.time-text img {
    display: inline;
    margin-top: 5px;
    width: 30px;
    height: 30px;
    color: #fff;
}
</style>