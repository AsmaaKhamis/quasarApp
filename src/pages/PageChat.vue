<template>
  <q-page class="flex column">
    <q-banner class="bg-grey-3 text-center">
    {{otherUserDetails.name}} if offline
    </q-banner> 
    <div class="q-pa-md column col justify-end">
       <q-chat-message
       v-for="message in messages"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name "
        :text="[message.text]"
        :key="message.text"
        :sent="message.from == 'me' ? true :false "
      />
    </div>
   <q-footer elevated>
        <q-toolbar>
          <q-form 
          @submit.preventDefault="sendMessage"
          class="full-width"
          >
             <q-input v-model="newMessage" 
                    label="Message"
                    dense 
                    bg-color="white"
                    outlined 
                    rounded 
                  >
             <template v-slot:after>
               <q-btn
               round
               @click="sendMessage"
               type="submit"
               dense 
               flat 
               icon="send" 
               color="white" />
            </template>
            </q-input>
          </q-form>
        </q-toolbar>
      </q-footer>
  </q-page>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      newMessage: '',
    }
  },
  computed:{
    ...mapState('store' ,['messages','userDetails']),
    otherUserDetails(){
      return this.$store.state.store.users[this.$route.params.otherUserId]
    }
  },
  methods:{
    ...mapActions('store',['firebaseGetMessages','firebaseStopGettingMessages']),
    sendMessage() {
      this.messages.push({
        text:this.newMessage,
        from: 'me'
      })
    }
  },
  mounted(){
      this.firebaseGetMessages(this.$route.params.otherUserId)   
  },destroyed(){
    this.firebaseStopGettingMessages()

  }
}
</script>
<style>
</style>
