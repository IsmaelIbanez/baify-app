import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VanillaTilt from 'vanilla-tilt'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

VanillaTilt.init(document.querySelector(".image"), {
  max: 25,
  speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".image"));