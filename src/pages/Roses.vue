<template>
  <fs-paginated-cards :data="roses" imgFolderName="roses"/>
</template>

<script>
import FsPaginatedCards from 'components/FsPaginatedCards.vue'

export default {
  data () {
    return {
      roses: [
        {
          name: 'Summer flower bouquet',
          price: 45.00,
          imgName: 'red-roses-bouquet',
          unitPrice: false
        },
        {
          name: 'Red roses bouquet',
          price: 30.00,
          imgName: 'red-roses-bouquet',
          unitPrice: false
        },
        {
          name: 'Spring flower bouquet',
          price: 23.00,
          imgName: 'red-roses-bouquet',
          unitPrice: true
        },
        {
          name: 'Summer flower bouquet',
          price: 15.00,
          imgName: 'red-roses-bouquet',
          unitPrice: false
        },
        {
          name: 'Summer flower bouquet',
          price: 30.00,
          imgName: 'red-roses-bouquet',
          unitPrice: false
        },
        {
          name: 'Summer flower bouquet',
          price: 2.00,
          imgName: 'red-roses-bouquet',
          unitPrice: true
        },
        {
          name: 'Summer flower bouquet',
          price: 5.00,
          imgName: 'red-roses-bouquet',
          unitPrice: false
        },
        {
          name: 'Summer flower bouquet',
          price: 16.00,
          imgName: 'red-roses-bouquet',
          unitPrice: false
        },
        {
          name: 'Summer flower bouquet',
          price: 99.00,
          imgName: 'red-roses-bouquet',
          unitPrice: false
        },
        {
          name: 'Summer flower bouquet',
          price: 152.00,
          imgName: 'red-roses-bouquet',
          unitPrice: false
        }
      ]
    }
  },
  components: { FsPaginatedCards }
}
</script>
