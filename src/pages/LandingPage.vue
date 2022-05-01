<template>
  <div class="root-div">
    <fs-carousel :slides="slides"/>
    <q-btn label="Shop now" to="/bouquets" :ripple="false"/>
  </div>
</template>

<script>
import FsCarousel from 'components/FsCarousel.vue'

export default {
  components: { FsCarousel },
  data () {
    return {
      slides: [
        {
          name: 1,
          imgSrc: 'https://media.timeout.com/images/105135139/image.jpg',
          caption: 'Door-to-Door delivery'
        },
        {
          name: 2,
          imgSrc: 'https://images.unsplash.com/photo-1632827235256-abe7952a1936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          caption: 'Personal notes'
        },
        {
          name: 3,
          imgSrc: 'https://pyxis.nymag.com/v1/imgs/431/405/f532d2de344840c6a151bc3a073a56af51-flowers.2x.rsocial.w600.jpg',
          caption: 'Made with love'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.root-div {
  display: flex;
  flex-direction: column;
}
</style>