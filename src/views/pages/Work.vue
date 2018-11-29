<template>
  <div class="workouts">
    <div class="container">
      <filter-component ref="filter"></filter-component>
      <div class="columns">
        <div class="sandbox">
          <div class="tile is-ancestor">
            <project-component
              v-for="(project) in $store.state.work_page.projects"
              v-bind:text="project.text"
              v-bind:description="project.description"
              v-bind:image="project.image"
              v-bind:buttonText="project.buttonText"
              v-bind:buttonLink="project.buttonLink"
              v-bind:page="project.classes"
              :key="project.id">
            </project-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var images = require.context('@/assets/img/thumbnails/', false, /\.png$/);

import ProjectComponent from '@/components/content/work/Project.vue';
import ButtonComponent from '@/components/shared/Button.vue';
import FilterComponent from '@/components/content/workouts/Filter.vue';
import { EventBus } from '../../event-bus.js';

export default {
  name: 'Work',
  components: {
    ProjectComponent,
    ButtonComponent,
    FilterComponent
  },
  data() {
    return {
      height: '200px',
      activeButton: 'view-all',
      url: 'https://via.placeholder.com/150',
      title: 'NoteNova Publishing',
      description: 'Back-to-back rounds of jogging and bodyweight exercises elevate your heart rate.',
      category: 'view_all'
    };
  },
  computed: {
    computedHeight: function() {
      return this.height;
    },
    setUrl: {
      get: function() {
        return this.url;
      },
      set: function(newValue) {
        this.url = newValue;
      }
    },
    setTitle: {
      get: function() {
        return this.title;
      },
      set: function(newValue) {
        this.title = newValue;
      }
    },
    setDescription: {
      get: function() {
        return this.description;
      },
      set: function(newValue) {
        this.description = newValue;
      }
    },
    setCategory: {
      get: function() {
        return this.category;
      },
      set: function(newValue) {
        this.category = newValue;
      }
    }
  },
  $refs: {
    filter: HTMLElement
  },
  mounted: function() {
    setTimeout(function() {
      window.addEventListener('resize', this.handleResize);
      window.dispatchEvent(new Event('resize'));
    }, 300);
    EventBus.$on('thumbnail-clicked', obj => {
      if (obj.url) {
        this.url = obj.url;
      }
      if (obj.title) {
        this.setTitle = obj.title;
      }
      if (obj.description) {
        this.setDescription = obj.description;
      }
    });
    EventBus.$on('filter-clicked', filter => {
      if (filter) {
        this.setCategory = filter;
      }
    });
  },
  methods: {
    handleResize(event) {
      if (this.$refs.video) {
        this.height = this.$refs.video.clientHeight + 'px';
      }
    },
    imgUrl: function(path) {
      return images('./' + path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../../assets/sass/colors.scss';

.is-ancestor {
  flex-wrap: wrap;
}

.container {
  @media screen and (max-width: $desktop) {
    max-width: 90%;
    width: 90%;
  }
  .button {
    border-radius: 4px;
    padding-left: 1em;
    padding-right: 1em;
    @media screen and (max-width: $tablet) {
      width: 100%;
    }
    &.is-primary.is-active {
      background: $darkGray;
    }
  }

  .columns {
    padding: 25px 0;
    position: relative;
  }
}
</style>
