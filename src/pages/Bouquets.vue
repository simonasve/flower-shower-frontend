<template>
  <fs-paginated-cards :unitPrice="false" :data="bouquets" imgFolderName="bouquets"/>
</template>

<script>
import FsPaginatedCards from 'components/FsPaginatedCards.vue'
import { mapActions } from 'vuex'

export default {
  components: { FsPaginatedCards },
  methods: {
    ...mapActions('flowers', ['loadBouquets'])
  },
  mounted () {
    this.loadBouquets()
  },
  computed: {
    bouquets () {
      return this.$store.state.flowers.bouquets
    }
  }
}
</script>
