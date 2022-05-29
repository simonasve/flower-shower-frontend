<template>
  <div class="login-form">
    <q-form @submit="callLogin()">
      <q-input v-model="credentials.username" label="Username" color="black"/>
      <q-input v-model="credentials.password" label="Password" color="black" :type="isPasswordHidden ? 'password' : 'text'">
        <template>
          <q-btn flat round color="black" :icon="isPasswordHidden ? 'visibility_off' : 'visibility'" @click="isPasswordHidden = !isPasswordHidden" />
        </template>
      </q-input>
      <div class="row justify-end q-mt-md">
        <q-btn type="submit" color="black" label="Login" />
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
    ...mapActions('auth', ['login']),
    callLogin() {
      this.login(this.credentials)
        .then(() => {
          this.$router.push('/landing')
        })
        .catch(() => {
          this.$q.notify({ type: 'negative', message: 'Login failed' })
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
