<template>
   <q-page class="flex q-pa-md">
    <q-list separator class="full-width">
      <q-item to="/chat" v-for="user in users" :key="user.id" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.letter }}
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
export default {
  data () {
    return {
      users: [ {
  id: 1,
  name: 'Ruddy',
  letter: 'R',
  online: true
}, {
  id: 2,
  name: ' lili',
  letter: 'L',
  online: false
}, {
  id: 3,
  name: ' Emy',
  letter: 'E',
  online: true
}]
    }
  }
}
</script>
<style>

</style>
