<template>
  <div class="root-div">
    <div class="item-div">
      <img style="max-height: 350px; max-width: 500px" :src="`/${currentItem.imgFolderName}/${currentItem.imgName}.jpg`">
      <div class="text-div">
        <div class="item-name">{{currentItem.name}}</div>
        <div v-if="currentItem.unitPrice" class="price">Price per flower: €{{currentItem.price}}</div>
        <div v-else class="price">Price: €{{currentItem.price}}</div>
        <div class="price">{{currentItem.description}}</div>
      </div>
    </div>
    <q-form @submit="submitOrder">
      <q-input v-model="order.date" color="black" class="input" mask="####-##-## ##:##" label="Delivery date" outlined
        :rules="[value => new Date(Date.now() + 86400000) <= new Date(value) || 'Delivery can only be made one day later']">
        <template v-slot:prepend>
          <q-icon name="event" class="cursor-pointer" color="black">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="order.date" mask="YYYY-MM-DD HH:mm" color="black">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>

        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer" color="black">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time v-model="order.date" mask="YYYY-MM-DD HH:mm" format24h color="black">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input v-model="order.message" outlined color="black" class="input" type="textarea" label="Send with message"
        :rules="[value => value.length <= 300 || 'Message is too long']"/>
      <q-select v-model="order.amount" outlined color="black" class="input" label="Amount" :options="amountOptions"
        :rules="[value => value > 0 || 'Please select an amount']"/>
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
    itemsInCart () {
      return this.$store.state.items.itemsInCart
    }
  },
  methods: {
    ...mapActions('items', ['setItemsInCart']),
    submitOrder () {
      const itemsCurrentlyInCart = [...this.itemsInCart]
      itemsCurrentlyInCart.push(this.order)
      this.setItemsInCart(itemsCurrentlyInCart)
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