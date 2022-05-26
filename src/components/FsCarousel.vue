<template>
  <q-carousel :arrows="landingPage" animated infinite v-model="currentSlide" autoplay :height="!landingPage ? '480px' : '805px'">
    <q-carousel-slide v-for="slide in slides" :key="slide.name" :name="slide.name" :img-src="slide.imgSrc">
      <div :class="landingPage ? 'absolute-bottom custom-caption' : ''">
        <div class="caption">{{slide.caption}}</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
  data () {
    return {
      currentSlide: 1
    }
  },
  props: {
    slides: Array,
    landingPage: {
      default: true,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3)
}
.caption {
  font-family: 'squarePeg';
  font-size: 50px;
  text-align: center;
}
</style>