<template>
  <fs-paginated-cards :data="tulips" imgFolderName="tulips"/>
</template>

<script>
import FsPaginatedCards from 'components/FsPaginatedCards.vue'
import { mapActions } from 'vuex'

export default {
  components: { FsPaginatedCards },
  methods: {
    ...mapActions('flowers', ['loadTulips'])
  },
  mounted () {
    this.loadTulips()
  },
  computed: {
    tulips () {
      return this.$store.state.flowers.tulips
    }
  }
}
</script>
