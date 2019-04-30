<template>
    <div>
        <headerPage/>
        <middle/>
        <footerPage/>
    </div>
</template>
<script>
import middle from './middle.vue'
import footerPage from './footerPage.vue'
import headerPage from './headerPage.vue'
export default {
  components: {
    middle, footerPage, headerPage
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
