<template>
  <div 
    v-if="card" 
    class="card"
  >
      <div v-if="card.open" class="card-open">
          <span class="card-number-top">{{ card.title }}</span>
          <div
            class="card-symbol"
          >
              <span>
                  ♣
              </span>
          </div>
          <span
            class="card-number-bottom"
          >{{ card.title }}</span>
      </div>
      <div 
        v-else 
        class="card-back"
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
    },
}
</script>

<style>

</style>