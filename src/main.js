import VanillaTilt from 'vanilla-tilt'
import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store'

Vue.use(Buefy)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

<<<<<<< HEAD
=======
VanillaTilt.init(document.querySelector(".image"),{
  max: 25,
  speed: 400
});

>>>>>>> develop
//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".image"));