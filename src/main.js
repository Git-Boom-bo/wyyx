//引入vant样式覆盖原有样式
import './resetvant.less'
// px2rem 自适应import 'lib-flexible'
import 'lib-flexible'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import {Col,Row,Search,Button,Icon,Sidebar, SidebarItem, Tab, Tabs,} from 'vant'
import {Image as VanImage} from 'vant'
Vue.use(Col).use(Row).use(VanImage).use(Search).use(Button).use(Icon).use(Sidebar).use(SidebarItem).use(Tab).use(Tabs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
