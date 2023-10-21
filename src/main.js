import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
// 在全局注册所有的图标组件
Object.keys(ElementPlusIconsVue).forEach((icon) => {
    app.component(ElementPlusIconsVue[icon].name, ElementPlusIconsVue[icon]);
});
app.mount('#app')
