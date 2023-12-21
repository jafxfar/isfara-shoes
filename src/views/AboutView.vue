<template>
  <AboutUs />
</template>

<script>
import AboutUs from '@/components/AboutUs.vue';
export default {
  components: {
    AboutUs
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>
