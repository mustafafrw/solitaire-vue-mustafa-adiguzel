<template>
  <div v-if="card" 
    class="card"
    @dragstart='startDrag($event, card)'
  >
      <span class="card-number-top">{{ card.title }}</span>
      <div class="card-symbol">
          <span>
              ♣
          </span>
      </div>
      <span class="card-number-bottom">{{ card.title }}</span>
  </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    methods: {
        startDrag: (evt, card) => {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('card', JSON.stringify(card))
        },
    }
}
</script>

<style scoped>
.card {
    width: 120px;
    height: 160px;
    background:linear-gradient(135deg, #E3E3E3 0%,#ced0d2 100%);
    border-radius: 7px;
    background-repeat: no-repeat;
    background-position: center;
    font-size: 25 px;
    font-weight: bold;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.card span {
    position: absolute;
    text-align: center;
}

.card-number-bottom {
    bottom: 0px;
    right: 10px;
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.card-number-top {
    top: 0px;
    left: 10px;
}

.card-symbol{
   display: flex;
   width: 100%;
   height: 100%;
   align-items: center;
   justify-content: center;
}
</style>