<template>
  <div class="root-div">
    <div class="parent-div">
      <div class="row container">
        <div class="q-pa-md col-4" v-for="(item, index) in getPaginatedData" :key="index">
          <q-card class="my-card">
            <img style="height: 350px; width: 350px" :src="`/${imgFolderName}/${item.imgName}.jpg`">
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
    },
    imgFolderName: String
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
}
.title {
  color: black;
  text-transform: uppercase;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  text-align: center;
}
.price {
  color: black;
  font-family: 'Playfair Display', serif;
  font-size: 17px;
  text-align: center;
}
</style>