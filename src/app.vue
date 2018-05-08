<template lang='pug'>
p.txt {{text}}
</template>

<script>
export default {
  data () {
    return {
      text: 'app.vue'
    }
  }
}
</script>
<style lang='stylus' scoped>
.txt
  width 750px
  color green
  font-size 30px
  transform translateX(30px)
.test
  background: url('./n.png')
</style>
