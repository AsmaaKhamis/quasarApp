<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { format } from 'quasar'

import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('store', ['handelAuthStateChanged'])
  },
  mounted() {
    // console.log(this.handelAuthStateChanged);
    this.handelAuthStateChanged()
  }
}
</script>
