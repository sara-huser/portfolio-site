<template>
  <div class="main">
    <hero-component
      v-for="(hero) in $store.state.about_page.heroes"
      v-bind:text="hero.text"
      v-bind:image="hero.image"
      v-bind:buttonText="hero.buttonText"
      v-bind:buttonLink="hero.buttonLink"
      v-bind:calloutImage="hero.calloutImage"
      :key="hero.id">
    </hero-component>
  </div>
</template>

<script>
import HeroComponent from '@/components/content/Hero.vue';

export default {
  name: 'About',
  components: { HeroComponent }
};
</script>

<style>
.main {
  padding-top: 5px;
}
</style>
