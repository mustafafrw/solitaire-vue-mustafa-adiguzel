<template>
  <div class="start-game" style="text-align: center">
      <GText class="g-m-20" variant="headline-04" color="white">Solitaire with Vue.js</GText>
      <GText class="g-m-20" variant="headline-06" color="white">
          - Mustafa Adıgüzel
          <a href="https://github.com/mustafafrw/vue-solitaire" target="_blank">Github</a>
      </GText>
      
      <div class="option-container">
         <GText class="g-mt-20" variant="headline-04" color="white">Solitaire</GText>
         <GTooltip class="g-mt-20" text="Start Solitaire">
            <template #tooltip-trigger>
                <GButton
                    size="big"
                    leftIcon="play"
                    @click="startSolitaire"
                >Play</GButton>
            </template>
        </GTooltip>

      </div>
      <div class="option-container">
         <GText class="g-mt-20" variant="headline-04" color="white">Reverse Solitaire</GText>

          <GTooltip class="g-mt-20" text="Start Reverse Solitaire">
            <template #tooltip-trigger>
                <GButton
                    size="big"
                    variant="secondary"
                    leftIcon="play"
                    @click="startReverseSolitaire"
                >Play</GButton>
            </template>
        </GTooltip>

      </div>
  </div>
</template>

<script>
import GButton from '@trendyol-js/grace/core/GButton';
import GTooltip from '@trendyol-js/grace/core/GTooltip';
import GText from '@trendyol-js/grace/core/GText';

export default {
    components: {
        GButton,
        GTooltip,
        GText
    },
    methods: {
        startSolitaire(){
            this.$store.dispatch('startSolitaire')
            this.routeToPlay()
        },
        startReverseSolitaire(){
            this.$store.dispatch('startReverseSolitaire')
            this.routeToPlay()
        },
        routeToPlay(){
            try{
                this.$router.push('/play')
            }catch(e){
                console.log('error while pushing to play', e)
            }
        }
    }
}
</script>

<style>
.option-container {
    display: inline-block;
    width: 300px;
    height: 200px;
    margin: 5px 10px;
    border: 5px solid #ccc;
    border-radius: 10px;
    text-align: center;
}
.start-game {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
}
</style>