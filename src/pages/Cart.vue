<template>
  <div class="q-pa-md">
    <q-table title="Cart" :data="itemsInCart" :columns="columns" dark no-data-label="The cart is empty"
      hide-pagination>
      <template v-slot:body-cell-actions="props">
        <q-td key="name" :props="props">
          <q-btn icon="delete" @click="removeItemFromCart(props.row)"/>
        </q-td>
      </template>
    </q-table>
    <q-card>
      <q-card-section>Total amount: </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        { name: 'name', align: 'center', label: 'Name', field: 'name' },
        { name: 'deliveryDate', label: 'Delivery date', field: 'date' },
        { name: 'message', label: 'Message', field: 'message' },
        { name: 'quantity', label: 'Quantity', field: 'quantity' },
        { name: 'price', label: 'Price', field: 'price' },
        { name: 'actions', label: '', field: 'actions' }
      ]
    }
  },
  computed: {
    itemsInCart () {
      return this.$store.state.items.itemsInCart
    }
  },
  methods: {
    removeItemFromCart (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>