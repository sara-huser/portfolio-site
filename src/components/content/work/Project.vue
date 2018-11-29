<template>
   <div v-bind:class="[page]">
    <article class="tile is-child notification is-white">
      <p class="title" v-html="text"></p>
      <p class="subtitle" v-html="description"></p>
    </article>
  </div>
  <!-- <section class="hero is-medium is-bold" v-bind:style="{ backgroundImage: 'url(' + imgUrl(image) + ')' }">
    <div class="hero-body has-text-centered">
      <div class="container">
        <div class="description is-uppercase">
          <div class="text" v-html="text"></div>
          <div class="callout">
            <img v-bind:src="imgUrl(calloutImage)" />
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script>
var images = require.context('@/assets/img/', false, /\.png$/);
import { EventBus } from '../../../event-bus.js';

export default {
  name: 'ProjectComponent',
  props: ['text', 'description', 'image', 'buttonText', 'buttonLink', 'page'],
  methods: {
    imgUrl: function(path) {
      return images('./' + path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../../assets/sass/colors.scss';

.video-container {
  width: 100%;
  height: 100%;
  .aspect-ratio {
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    iframe {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }
  .video-info {
    width: 100%;
    height: 10%;
    margin-top: 25px;
  }
  hr {
    width: 100%;
    background: $medGray;
    height: 1px;
  }
}
</style>
