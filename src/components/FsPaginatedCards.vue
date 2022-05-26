<template>
  <div class="root-div">
    <div class="parent-div">
      <div class="row container">
        <div class="q-pa-md col-4" v-for="item in getPaginatedData" :key="item.id">
          <q-card class="my-card" @click="openItemPage(item)">
            <img style="height: 350px; width: 350px" :src="item.imageLink">
            <q-card-section>
              <div class="title">{{item.name}}</div>
              <div v-if="item.unitPrice" class="price">Price per flower: €{{item.price}}</div>
              <div v-else class="price">Price: €{{item.price}}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <q-pagination class="q-my-xl" v-model="page" :max="Math.ceil(data.length / itemsPerPage)"
      color="black" rounded :max-pages="6" direction-links/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      page: 1,
    }
  },
  props: {
    data: Array,
    itemsPerPage: {
      default: 9,
      type: Number
    }
  },
  methods: {
    ...mapActions('items', ['setCurrentItem']),
    openItemPage(item) {
      this.setCurrentItem(item)
      this.$router.push('/item')
    }
  },
  computed: {
    getPaginatedData () {
      return this.data.slice((this.page - 1) * this.itemsPerPage, (this.page - 1) * this.itemsPerPage + this.itemsPerPage)
    }
  }
}
</script>

<style lang="scss" scoped>
.root-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.parent-div {
  display: flex;
  justify-content: center;
}
.container {
  width: 1100px;
}
.my-card {
  width: 100%;
  max-width: 350px;
  cursor: pointer;
}
.title {
  color: black;
  text-transform: uppercase;
  font-family: 'playfairDisplay', serif;
  font-size: 20px;
  text-align: center;
}
.price {
  color: black;
  font-family: 'playfairDisplay', serif;
  font-size: 17px;
  text-align: center;
}
</style>