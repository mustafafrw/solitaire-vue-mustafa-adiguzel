<template>
  <div class="table-top">
        <div class="time-container">
          <div>
             {{ time }}
          </div>
        </div>
        <div class="restart-container">
          <div>
             Restart
          </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            time: 0
        }
    },
    mounted(){
        this.startTimer()
    },
    methods: {
        startTimer(){
            this.time = 0;
            setInterval(() => {
                this.time +=1;
            }, 1000)
        }
    }
}
</script>

<style>

</style>