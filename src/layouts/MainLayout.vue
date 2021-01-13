<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen" /> -->

        <q-toolbar-title class="text-center">
                   {{ title }}
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { openURL } from 'quasar'
export default {
  methods: {
    openURL
  },
  computed: {
    title () {
      console.log(this.$router)
      const currentPath = this.$router.fullPath
      if (currentPath === '/') return 'Lolipop'
      else if (currentPath === '/chat') return 'Chat'
      else if (currentPath === '/auth') return 'login'
      return this.title
    }
  },
  components: {},
  data () {
  }
}
</script>
