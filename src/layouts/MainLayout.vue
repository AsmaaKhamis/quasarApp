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
         v-if="!userDetails.userId"
         to="/auth"
         class="absolute-right q-pr-sm"
          icon="account_circle"
          no-caps
          flat
          dense/>

           <q-btn
           v-else
           @click="logoutUser" 
           class="absolute-right q-pr-sm"
           icon="login"
           no-caps
           flat
            dense>
      <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
        <q-banner class="bg-grey text-white" rounded>
          <template v-slot:avatar>
            <q-icon name="person_remove" />
          </template>
          You Are Logged out {{userDetails.name}}
        </q-banner>
      </q-popup-proxy>
           </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { mapState ,mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('store' ,['logoutUser'])

  
  },
  computed: {
    ...mapState('store' ,['userDetails']),
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



<style lang="stylus">

</style>