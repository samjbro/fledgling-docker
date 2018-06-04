<template>
  <h1>Sup {{ name }}!!</h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    color: orange;
  }
</style>
