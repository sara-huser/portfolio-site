<template>
  <router-link to="/">
    <img class="is-pulled-left" src="@/assets/img/FM_logo.png" alt="Logo">
  </router-link>
</template>

<script>
export default {
  name: 'BrandComponent'
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

img {
  height: 100%;
  width: auto;
  padding: 10px;
  display: block;
  margin: auto;
  @media screen and (max-width: $tablet) {
    padding: 5px;
  }
}
</style>
