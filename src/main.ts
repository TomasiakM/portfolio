import { createApp } from 'vue'
import App from './App.vue'
import { ObserveVisibility } from 'vue-observe-visibility';
import VTypical from 'vue-typical';
var VueScrollTo = require('vue-scrollto');


createApp(App).directive("observe-visibility", {
    beforeMount: (el, binding, vnode) => {
      (vnode as any).context = binding.instance
      ObserveVisibility.bind(el, binding, vnode)
    },
    updated: ObserveVisibility.update,
    unmounted: ObserveVisibility.unbind,
  }).use(ObserveVisibility).use(VTypical).use(VueScrollTo).mount('#app')
