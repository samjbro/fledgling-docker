<template>
  <div class="full-width center-content main">
    <h1>Hello there</h1>
    <br>
    <hello-component name="Sam"/>
  </div>
</template>
<script>
import HelloComponent from './components/HelloComponent.vue'

export default {
  components: {
    HelloComponent
  }
}
</script>
<style scoped type="scss">
  .full-width {
    width: 100%;
  }
  .center-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main {
    color: red;
  }
</style>
