import Vue from 'vue'
import App from './App.vue'

// 导入包
// 导入样式
import router from './router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 注册到VUE实例
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
