<template>
  <div class="q-pa-md">
    <q-table title="Cart" :data="order.orderItems" :columns="columns" dark no-data-label="The cart is empty"
      hide-pagination>
      <template v-slot:body-cell-actions="props">
        <q-td key="name" :props="props">
          <q-btn icon="delete" color="red" @click="removeItemFromCart(props.row)"/>
        </q-td>
      </template>
    </q-table>
    <q-form @submit="callSubmitOrder()">
      <q-input v-model="delivery.address" label="Delivery address" outlined color="black" class="q-ma-sm"
        :rules="[value => value.length > 0 || 'Address can not be empty']"/>
      <q-input v-model="delivery.deliveryData" color="black" class="q-ma-sm" mask="####-##-##T##:##:##.###Z" label="Delivery date" outlined
        :rules="[value => new Date(Date.now() + 86400000) <= new Date(value) || 'Delivery can only be made one day later']" />
      <div class="row justify-end q-mt-md">
        <q-btn type="submit" color="black" label="Buy now" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      delivery: {},
      columns: [
        { name: 'name', align: 'center', label: 'Name', field: el => el.product.name },
        { name: 'message', label: 'Category', field: el => el.product.category },
        { name: 'price', label: 'Price', field: el => el.product.price },
        { name: 'quantity', label: 'Quantity', field: 'quantity' },
        { name: 'actions', label: '', field: 'actions' }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.state.auth.user
    },
    order () {
      return this.$store.state.items.order
    }
  },
  methods: {
    ...mapActions('items', ['loadOrder', 'removeItem', 'submitOrder']),
    removeItemFromCart (item) {
      this.removeItem({ userId: this.user, productId: item.product.id })
        .then(() => {
          this.$q.notify({ type: 'positive', message: 'Product removed' })
        })
        .catch(() => {
          this.$q.notify({ type: 'negative', message: 'Can not remove product from cart' })
        })
    },
    callSubmitOrder () {
      this.delivery.userId = this.user
      this.submitOrder(this.delivery)
        .then(() => {
          this.$q.notify({ type: 'positive', message: 'Order accepted' })
          this.$router.push('/landing')
        })
        .catch(() => {
          this.$q.notify({ type: 'negative', message: 'Order could not be taken' })
        })
    }
  },
  mounted () {
    this.loadOrder(this.user)
  }
}
</script>
