// px2rem 自适应import 'lib-flexible'
import 'lib-flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import {Col,Row,Search,Button,Icon} from 'vant'
import {Image as VanImage} from 'vant'
Vue.use(Col).use(Row).use(VanImage).use(Search).use(Button).use(Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
