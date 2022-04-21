<template>
  <q-layout>
    <q-header>
      <q-toolbar class="toolbar">
        <img alt="Shop logo" src="~assets/flower-shower-logo.svg" class="logo-img" @click="goToLandingPage">
        <fs-tabs/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import FsTabs from '../components/FsTabs.vue'

export default {
  name: 'MainLayout',
  components: {
    FsTabs
  },
  methods: {
    goToLandingPage () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  background-color: white;
}
.logo-img {
  width: 200px;
  margin: 10px;
  cursor: pointer;
}
</style>