<template>
  <section-component page="contact-page">
    <div class="contact">
      Contact me
    </div>
  </section-component>
</template>

<script>
import SectionComponent from '@/components/content/Section.vue';

export default {
  name: 'Contact',
  components: { SectionComponent }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.contact {
  .container {
    .title {
      @media screen and (max-width: $tablet) {
        font-size: 4.5vw;
      }
    }
  }
}
</style>
