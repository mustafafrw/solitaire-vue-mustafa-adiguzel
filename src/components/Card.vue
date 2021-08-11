<template>
  <div v-if="card" 
    class="card"
    :class="[ isLast ? 'card-last' : 'card-summary']"
    
  >
      <div v-if="card.open" class="card-open">
          <span class="card-number-top">{{ card.title }}</span>
          <div
            v-if="isLast"
            class="card-symbol"
          >
              <span>
                  ♣
              </span>
          </div>
          <span
            v-if="isLast"
            class="card-number-bottom"
          >{{ card.title }}</span>
      </div>
      <div 
        v-else 
        class="card-back"
        :class="{ 'image-fill': isLast }"
      ></div>
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
}
</script>

<style>
.card {
    width: 7vw;
    
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
    height: 10vw;
    
}
.card-summary {
    height: 3vw;
}
.card-open {
    background:linear-gradient(135deg, #d9dadb 0%,#c4c6c9 100%);
    width: inherit;
    height: inherit;
    border-radius: inherit;
    cursor: pointer;
}
.card-back {
   background-image: url('/card_back.webp');
   background-repeat: no-repeat;
   width: inherit;
   height: inherit;
   background-size: cover;
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
.image-fill{
    background-size: 100% 100%;
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