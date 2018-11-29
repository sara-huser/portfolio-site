import About from '@/views/pages/About';
import Contact from '@/views/pages/Contact';
import Work from '@/views/pages/Work';
import Vue from 'vue';
import Router from 'vue-router';

/*
|-------------------------------------------------------------------------------
| routes.js
|-------------------------------------------------------------------------------
| Contains all of the routes for the application
*/

/*
    Imports Vue and VueRouter to extend with the routes.
*/
/*
    Extends Vue to use Vue Router
*/
Vue.use(Router);

/*
    Makes a new VueRouter that we will use to run all of the routes
    for the app.
*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
