<template>
   <q-page class="flex q-pa-md">
    <q-list separator class="full-width">
      <q-item 
      :to="'/chat/' + key" 
      v-for="(user,key) in users" 
      :key="key" 
      clickable 
      v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name? user.name.charAt(0).toUpperCase():'' }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
            <q-badge :color= "user.online ? 'pink-2' : 'grey-4'">
                   {{ user.online ? 'online' : 'offline'}}
            </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
    </q-page>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters('store' ,['users'])
  }
}
</script>
<style>

</style>
