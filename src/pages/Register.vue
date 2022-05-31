<template>
  <div class="login-form">
    <q-form @submit="callRegister()">
      <q-input v-model="credentials.username" label="New username" color="black"/>
      <q-input v-model="credentials.password" label="New password" color="black" :type="isPasswordHidden ? 'password' : 'text'">
        <template>
          <q-btn flat round color="black" :icon="isPasswordHidden ? 'visibility_off' : 'visibility'" @click="isPasswordHidden = !isPasswordHidden" />
        </template>
      </q-input>
      <div class="row justify-end q-mt-md">
        <q-btn class="q-ma-sm" color="black" label="Register" type="submit"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      isPasswordHidden: true
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    callRegister() {
      this.register(this.credentials)
        .then(() => {
          this.$q.notify({ type: 'positive', message: 'Register successfull' })
          this.$router.push('/landing')
        })
        .catch(() => {
          this.$q.notify({ type: 'negative', message: 'Register failed' })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-form {
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    height: 550px;
    margin-top: 231px;
  }
</style>
