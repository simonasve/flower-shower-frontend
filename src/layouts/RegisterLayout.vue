<template>
  <q-layout>
    <q-header>
      <q-toolbar class="toolbar">
        <img alt="Shop logo" src="~assets/flower-shower-logo.svg" class="logo-img">
      </q-toolbar>
    </q-header>
    <q-page-container>
      <register />
    </q-page-container>
  </q-layout>
</template>

<script>
import Register from '../pages/Register.vue'

export default {
  components: {Register}
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