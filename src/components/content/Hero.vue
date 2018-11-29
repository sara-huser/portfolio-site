<template>
  <!-- <section class="hero is-medium is-bold" v-bind:style="{ backgroundImage: 'url(' + imgUrl(image) + ')' }">
    <div class="hero-body has-text-centered">
      <div class="container">
        <div class="description is-uppercase">
          <div class="text" v-html="text"></div>
          <div class="callout">
            <img v-bind:src="imgUrl(calloutImage)" />
          </div>
        </div>
        <button-component location="internal">
          <router-link v-bind:to="buttonLink" class="button is-uppercase is-outlined is-white">{{buttonText}}</router-link>
        </button-component>
      </div>
    </div>
  </section> -->
  <section class="hero is-info is-medium is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Hi, I'm Sara.</h1>
        <h2 class="subtitle">Here's some shit about me.</h2>
      </div>
    </div>
  </section>
</template>

<script>
var images = require.context('@/assets/img/', false, /\.png$/);
import ButtonComponent from '../shared/Button.vue';

export default {
  name: 'HeroComponent',
  components: { ButtonComponent },
  props: ['text', 'image', 'buttonText', 'buttonLink', 'calloutImage'],
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.hero {
  background-repeat: no-repeat;
  background-size: 115%;
  background-position: 100% 90%;
  position: relative;
  z-index: 1;
  margin: 0 5px 5px 5px;

  @media screen and (max-width: $tablet) {
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: 60% 70%;
    min-height: 600px;
  }

  @media screen and (max-width: 500px) {
    background-size: cover;
  }

  &.is-medium {
    .hero-body {
      @media screen and (min-width: $tablet), print {
        padding-bottom: 6rem;
        padding-top: 6rem;
      }
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $black;
    opacity: 0.5;
    z-index: -1;
  }

  .container {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: $tablet) {
      height: 500px;
    }
  }

  .description {
    color: $white;
    font-size: 16px;
    @media screen and (min-width: $fullhd) {
      font-size: 24px;
    }
    @media screen and (min-width: $widescreen) and (max-width: $fullhd) {
      font-size: 1.5vw;
    }
    @media screen and (min-width: $desktop) and (max-width: $widescreen) {
      font-size: 1.8vw;
    }
    @media screen and (max-width: $desktop), print {
      font-size: 16px;
      width: 90%;
      max-width: 600px;
    }
    @media screen and (max-width: $tablet) {
      font-size: 14px;
    }
    .text {
      padding-bottom: 50px;
      @media screen and (max-width: $tablet) {
        padding-bottom: 20px;
      }
    }
  }

  .callout {
    img {
      width: 400px;
    }
  }
}
</style>
