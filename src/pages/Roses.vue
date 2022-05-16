<template>
  <fs-paginated-cards :data="roses" imgFolderName="roses"/>
</template>

<script>
import FsPaginatedCards from 'components/FsPaginatedCards.vue'
import { mapActions } from 'vuex'

export default {
  components: { FsPaginatedCards },
  methods: {
    ...mapActions('flowers', ['loadRoses'])
  },
  mounted () {
    this.loadRoses()
  },
  computed: {
    roses () {
      return this.$store.state.flowers.roses
    }
  }
}
</script>
