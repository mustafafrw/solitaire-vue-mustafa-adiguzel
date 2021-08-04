<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created(){
    this.$store.dispatch('init')
  }
}
</script>
<style>
html {
  /* background-color: #000000 !important; */
  background:linear-gradient(135deg, #184e68 0%,#57ca85 100%);
  height: 100%;
}
</style>
