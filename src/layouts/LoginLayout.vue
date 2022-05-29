<template>
  <q-layout>
    <q-header>
      <q-toolbar class="toolbar">
        <img alt="Shop logo" src="~assets/flower-shower-logo.svg" class="logo-img">
      </q-toolbar>
    </q-header>
    <q-page-container>
      <login />
    </q-page-container>
  </q-layout>
</template>

<script>
import Login from '../pages/Login.vue'

export default {
  components: {Login}
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