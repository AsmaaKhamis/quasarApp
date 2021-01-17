<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          v-go-back.single
          icon="arrow_back"
          flat
          dense/>
        <q-toolbar-title class="text-center">
                   {{ title }}
        </q-toolbar-title>

        <div></div>
         <q-btn
         to="/auth"
         class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          flat
          dense/>
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
      console.log(this.$route)
      let currentPath = this.$route.fullPath
      if (currentPath === '/') return 'Lolipop'
      else if (currentPath === '/chat') return 'Chat'
      else if (currentPath === '/auth') return 'login'
    }
  },
  components: {},
  data () {
    return {
    }
  }
}
</script>
