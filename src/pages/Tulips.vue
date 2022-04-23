<template>
  <fs-paginated-cards :data="tulips" imgFolderName="tulips"/>
</template>

<script>
import FsPaginatedCards from 'components/FsPaginatedCards.vue'

export default {
  data () {
    return {
      tulips: [
        {
          name: 'Yellow tulips',
          price: 45.00,
          imgName: 'yellow-tulips',
          unitPrice: true
        },
        {
          name: 'Yellow tulips',
          price: 30.00,
          imgName: 'yellow-tulips',
          unitPrice: true
        },
        {
          name: 'Yellow tulips',
          price: 23.00,
          imgName: 'yellow-tulips',
          unitPrice: true
        },
        {
          name: 'Yellow tulips',
          price: 15.00,
          imgName: 'yellow-tulips',
          unitPrice: true
        },
        {
          name: 'Yellow tulips',
          price: 30.00,
          imgName: 'yellow-tulips',
          unitPrice: true
        },
        {
          name: 'Yellow tulips',
          price: 2.00,
          imgName: 'yellow-tulips',
          unitPrice: true
        },
        {
          name: 'Yellow tulips',
          price: 5.00,
          imgName: 'yellow-tulips',
          unitPrice: true
        },
        {
          name: 'Yellow tulips',
          price: 16.00,
          imgName: 'yellow-tulips',
          unitPrice: true
        },
        {
          name: 'Yellow tulips',
          price: 99.00,
          imgName: 'yellow-tulips',
          unitPrice: true
        },
        {
          name: 'Yellow tulips',
          price: 152.00,
          imgName: 'yellow-tulips',
          unitPrice: true
        }
      ]
    }
  },
  components: { FsPaginatedCards }
}
</script>
