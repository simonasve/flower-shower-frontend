<template>
  <q-tabs class="tabs">
    <div v-for="(tab, index) in tabs" :key="index">
      <q-route-tab :label="tab.label" :ripple="tab.ripple" :to="tab.to"/>
    </div>
    <q-route-tab flat :ripple="false" icon="shopping_cart" to="/cart">
      <q-badge color="black" floating>{{amountOfItemsInCart}}</q-badge>
    </q-route-tab>
  </q-tabs>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          label: 'Bouquets',
          to: '/bouquets',
          ripple: false
        },
        {
          label: 'Roses',
          to: '/roses',
          ripple: false
        },
        {
          label: 'Tulips',
          to: '/tulips',
          ripple: false
        },
        {
          label: 'About us',
          to: '/aboutUs',
          ripple: false
        }
      ]
    }
  },
  computed: {
    amountOfItemsInCart () {
      return this.$store.state.items.itemsInCart.length
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  color: black;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
}
</style>