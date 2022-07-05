import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import globalMixin from "./scripts/global_mixin";


createApp(App).use(store)
    .mixin(globalMixin)
    .mount('#app');