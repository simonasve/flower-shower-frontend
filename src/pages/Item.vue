<template>
  <div class="root-div">
    <div class="item-div">
      <img style="max-height: 350px; max-width: 500px" :src="currentItem.imageLink">
      <div class="text-div">
        <div class="item-name">{{currentItem.name}}</div>
        <div v-if="currentItem.unitPrice" class="price">Price per flower: €{{currentItem.price}}</div>
        <div v-else class="price">Price: €{{currentItem.price}}</div>
        <div class="price">{{currentItem.description}}</div>
      </div>
    </div>
    <q-form @submit="submit">
      <q-select v-model="order.quantity" outlined color="black" class="input" label="Quantity" :options="amountOptions"
        :rules="[value => value > 0 || 'Please select a quantity']"/>
      <q-btn label="Add to cart" class="input" color="black" :ripple="false" type="submit"/>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      order: {},
      amountOptions: Array.from({length: 50}, (_, i) => i + 1)
    }
  },
  computed: {
    currentItem () {
      return this.$store.state.items.currentItem
    },
    user () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    ...mapActions('items', ['addItem']),
    submit () {
      this.order.userId = this.user
      this.order.productId = this.currentItem.id
      this.addItem(this.order)
        .then(() => {
          this.$router.push('/landing')
        })
        .catch(() => {
          this.$q.notify({ type: 'negative', message: 'Failed to submit order' })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.item-name {
  color: black;
  text-transform: uppercase;
  font-family: 'playfairDisplay', serif;
  font-size: 30px;
}
.price {
  color: black;
  font-family: 'playfairDisplay', serif;
  font-size: 30px;
}
.text-div {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
}
.item-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.root-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  min-width: 400px;
  margin-top: 20px;
}
</style>