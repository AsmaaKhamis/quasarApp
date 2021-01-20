<template>
<q-form 
@reset="onReset"
@submit="submitForm">
       <q-input 
       v-if="tab == 'register'"
       filled 
       v-model="formData.name" 
       class="q-mb-md"
       label="Name" 
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your name']"
       />
          <q-input 
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your email']"
       filled 
       v-model="formData.email" 
           class="q-mb-md"
       type="email"
       label="Email" />
          <q-input 
       lazy-rules
       :rules="[ val => val && val.length > 0 || 'Please enter your password']"
       filled 
       v-model="formData.password"
           class="q-mb-md"
       type="password" 
       label="Password" />
       <div class="row">
           <q-space />
            <q-btn color="grey-4" 
            text-color="primary" 
            glossy 
            type="submit"
            @submit="submitForm"
            unelevated 
            :icon="tab === 'login' ? 'face' : 'person_add_alt_1'" 
            :label="tab" />
             <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />

       </div>


</q-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['tab'],
    data() {
        return{
            formData:{
                name: '',
                email:'',
                password: ''
            },
        
        }
    },
    methods: {
        ...mapActions('store' , ['registerUser','loginUser']),
        submitForm() {
            if(this.tab == 'login'){
                this.loginUser(this.formData)
            }
            else{
                this.registerUser(this.formData)
            }
        },
        onReset () {
     this.formData = ''
     this.accept= false
    }
    }


}
</script>

<style>

</style>