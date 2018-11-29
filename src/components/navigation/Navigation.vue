<template>
  <nav class="navbar is-fixed-top">
    <div class="brand columns">
      <div id="first-column" class="column is-one-third">
        <brand-component></brand-component>
      </div>
      <div id="second-column" class="column is-two-thirds">
        <menu-component></menu-component>
      </div>
    </div>
  </nav>
</template>

<script>
import BrandComponent from './Brand.vue';
import MenuComponent from './Menu.vue';

export default {
  name: 'NavigationComponent',
  components: { BrandComponent, MenuComponent }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.navbar {
  flex-direction: column;
  .brand {
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    @media screen and (max-width: $tablet) {
      justify-content: space-around;
      margin: 0;
      height: 60px;
    }
    .column {
      height: 75px;
      padding: 0.5rem 0.75rem;
      @media screen and (max-width: $tablet) {
        flex-basis: auto;
        padding: 0.65rem 0.75rem;
        height: 60px;
      }
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
    }
  }
}
</style>
