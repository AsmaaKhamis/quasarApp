<template>
  <q-page
  ref="pageChat" 
  class="page-chat flex column">
    <q-banner 
    v-if="!otherUserDetails.online"
    class="bg-grey-3 text-center fixed-top">
    {{otherUserDetails.name}} if offline
    </q-banner> 
    <div 
    :class="{ 'invisible' :!showMessages }"
    class="q-pa-md column col justify-end">
       <q-chat-message
       v-for="(message ,key) in messages"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
        :text="[message.text]"
        :key="key"
        :sent="message.from == 'me' ? true :false "
        :bg-color="message.from == 'me' ? 'white': 'pink-2' "
      />
    </div>
   <q-footer elevated>
        <q-toolbar>
          <q-form 
          @submit.preventDefault="sendMessage"
          class="full-width"
          >
             <q-input 
                    ref="newMessage"
                    v-model="newMessage" 
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
import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details.js'
export default {
  mixins: [mixinOtherUserDetails],
  data() {
    return {
      newMessage: '',
      showMessages: false,
    }
  },
  computed:{
    ...mapState('store' ,['messages','userDetails']),
  },
  methods:{
    ...mapActions('store',['firebaseGetMessages','firebaseStopGettingMessages' ,'firebaseSendMessage']),
    sendMessage() {
      this.firebaseSendMessage({
        message:{
          text:this.newMessage,
          from: 'me'

        },
        otherUserId:this.$route.params.otherUserId
      })
      this.clearMessage()
    },
    clearMessage(){
      this.newMessage = ''
      this.$refs.newMessage.focus()

    },
    scrollToBottom(){
      let pageChat = this.$refs.pageChat.$el
      setTimeout(() =>{
        window.scrollTo(0,pageChat.scrollHeight)

      }, 20);

    }

  },
  watch:{
    messages: function(val){
      if(Object.keys(val).length){
        this.scrollToBottom()
        setTimeout(() => {
          this.showMessages =true

        }, 200);
      }
    }

  },
  mounted(){
      this.firebaseGetMessages(this.$route.params.otherUserId)   
  },destroyed(){
    this.firebaseStopGettingMessages()

  }
}
</script>
<style lang="stylus" scoped>
.page-chat{
  content ''
  left 0
  right 0
  top 0
  bottom 0
  z-index 0
  background-color #FFE3F6
opacity: 0.8;
background-image:  radial-gradient(#F627B4 1px, transparent 1px), radial-gradient(#F627B4 1px, #FFE3F6 1px);
background-size: 40px 40px;
background-position: 0 0,20px 20px;
}
.q-message{
  z-index 1
}
.q-banner{
  top 50px
  z-index 2
  opacity 0.9
}
</style>
