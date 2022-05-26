<template>
  <div>
    <div class="title">This is Flower Shower</div>
    <div class="subtitle">Flower Shower is a platform where you can buy cared for and locally grown flowers.</div>
    <div class="subtitle">Shower others with beauty and love!</div>
    <div class="subtitle q-mt-lg">Contact us:</div>
    <div class="contacts">
      <div class="subtitle">+37061234567</div>
      <q-icon class="" size="lg" name="facebook"/>
    </div>
    <fs-carousel :slides="slides" :landingPage="false"/>
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
          imgSrc: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2018%2F01%2F16022557%2Fplacing-plants-holes-garden-bed-5f324ff2.jpg'
        },
        {
          name: 2,
          imgSrc: 'https://charlotte.axios.com/wp-content/uploads/2018/08/charlotte-flower-market-diy-wedding-flowers.jpg'
        },
        {
          name: 3,
          imgSrc: 'https://giftflowers.com.hk/blog/en_florist/wp-content/uploads/sites/5/2021/06/10-1024x580.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-family: 'playfairDisplay', serif;
  font-size: 80px;
  text-align: center;
}
.subtitle {
  font-family: 'playfairDisplay', serif;
  font-size: 35px;
  text-align: center;
}
.contacts {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-bottom: 20px;
}
</style>