import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    about_page: {
      heroes: [
        {
          text:
            "Wherever summer travel takes you, a Tier X Coach is there.<br class='is-hidden-touch'/>Furthermore has partnered with the platinum card from American Express<br class='is-hidden-touch'/>to bring you 10-minute workouts, accessible anytime.",
          image: 'jumbotron_2.png',
          buttonText: 'Access the Videos',
          buttonLink: '/work',
          calloutImage: 'dont_live_life_without_it.png'
        }
      ]
    },
    work_page: {
      projects: [
        {
          text: 'Project 1',
          description: 'Project 1 description',
          image: 'jumbotron_2.png',
          buttonText: 'Access the Videos',
          buttonLink: '/work',
          classes: 'tile is-4 is-shady'
        },
        {
          text: 'Project 2',
          description: 'Project 2 description',
          image: 'jumbotron_2.png',
          buttonText: 'Access the Videos',
          buttonLink: '/work',
          classes: 'tile is-4 is-shady'
        },
        {
          text: 'Project 3',
          description: 'Project 3 description',
          image: 'jumbotron_2.png',
          buttonText: 'Access the Videos',
          buttonLink: '/work',
          classes: 'tile is-4 is-shady'
        },
        {
          text: 'Project 4',
          description: 'Project 4 description',
          image: 'jumbotron_2.png',
          buttonText: 'Access the Videos',
          buttonLink: '/work',
          classes: 'tile is-4 is-shady'
        },
        {
          text: 'Project 5',
          description: 'Project 5 description',
          image: 'jumbotron_2.png',
          buttonText: 'Access the Videos',
          buttonLink: '/work',
          classes: 'tile is-4 is-shady'
        },
        {
          text: 'Project 6',
          description: 'Project 6 description',
          image: 'jumbotron_2.png',
          buttonText: 'Access the Videos',
          buttonLink: '/work',
          classes: 'tile is-4 is-shady'
        }
      ]
    },
    contact_page: {
      description:
        "Equinox Personal Training reaches its peak with Tier X, the world's most advanced health and wellness coaching. Powered by behavior training, our holistic approach transforms how you move, fuel, and recharge as a whole. And now, via Platform X, these coaches are accessible anytime, anywhere.",
      contacts: [
        {
          name: 'Saladin Butler',
          image: 'saladin.jpg',
          bio:
            'A passionate power lifter, Saladin prioritizes movement efficiency, strength and mindfulness to get you to maximal—and sustainable—health and wellness. Follow him',
          handle: '@make_it_happen_bt',
          social: 'https://www.instagram.com/make_it_happen_bt/'
        },
        {
          name: 'Ariel Comeau',
          image: 'ariel.jpg',
          bio:
            "Ariel has 25 years of training as a dancer. As a Tier X coach, she's a FRC (functional range conditioning) guru who specializes in mobility training. Follow her",
          handle: '@arieljewel',
          social: 'https://www.instagram.com/arieljewel/'
        },
        {
          name: 'Mike Monroig',
          image: 'mike.jpg',
          bio:
            "Mike's background as a gymnast informs his strength and conditioning focus. But when he isn't performing Instagram-worthy bodyweight moves, he's a big fan of kettlebells. Follow him",
          handle: '@mike_monroig',
          social: 'https://www.instagram.com/mike_monroig/'
        },
        {
          name: 'Steven Reyes',
          image: 'steven.jpg',
          bio:
            "Animal Flow patterns are among Steven's favorites; he counters monotony by creating routines that provoke the free flow of movement through play. Follow him",
          handle: '@steven.reyes',
          social: 'https://www.instagram.com/steven.reyes/'
        }
      ]
    }
  }
});
