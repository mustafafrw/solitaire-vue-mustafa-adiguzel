<template>
  <div v-if="card" 
    class="card"
    :class="[ isLast ? 'card-last' : 'card-summary']"
    @dragstart='startDrag($event, card)'
  >
      <div v-if="card.open" class="card-open">
          <span class="card-number-top">{{ card.title }}</span>
          <div class="card-symbol">
              <span>
                  ♣
              </span>
          </div>
          <span class="card-number-bottom">{{ card.title }}</span>
      </div>
      <div v-else class="card-back"></div>
  </div>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        },
        isLast: {
            type: Boolean
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

<style>
.card {
    width: 120px;
    
    /* background:linear-gradient(135deg, #E3E3E3 0%,#ced0d2 100%); */
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
.card-last {
    height: 160px;
    
}
.card-summary {
    height: 40px;
}
.card-open {
    background:linear-gradient(135deg, #d9dadb 0%,#c4c6c9 100%);
    width: inherit;
    height: inherit;
    border-radius: inherit;
    cursor: pointer;
}
.card-back {
   background-image: url('https://bfa.github.io/solitaire-js/img/card_back_bg.png');
   background-size: cover;
   background-repeat: no-repeat;
   width: inherit;
   height: inherit;
}
.card span {
    position: absolute;
    text-align: center;
}
.card-open:hover {
    background:linear-gradient(135deg, #d9dadb 0%,#949ba2 100%);
}
.card-number-bottom {
    bottom: 2px;
    right: 10px;
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}

.card-number-top {
    top: 2px;
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