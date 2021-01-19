<template>
  <q-page class="flex q-pa-md">
<q-card class="full-width">
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-3 text-grey-7"
          active-color="primary"
          indicator-color="gray"
          align="justify"
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class=" text-white">
          <q-tab-panel name="login">
            <login-register :tab="tab" />
          </q-tab-panel>

          <q-tab-panel name="register">
              <login-register :tab="tab" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      tab: 'login'
    }
  },
  components: {
    'login-register' : require('components/loginregister.vue').default
  }
}
</script>
<style>
</style>
