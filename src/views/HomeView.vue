<template>
  <HeroSection />
  <Services />
  <Example />
  <Form />
</template>

<script>
import Form from '@/components/Form.vue';
import Services from '@/components/Services.vue'
import HeroSection from '@/components/HeroSection.vue';
import Example from '@/components/Example.vue';
export default {
  name: 'HomeView',
  components: {
    HeroSection,
    Services,
    Example,
    Form
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>
