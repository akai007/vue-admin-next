import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { ElementComponents, ElementPlugins } from './common/element-import';
import 'vite-plugin-svg-icons/register';

const app = createApp(App);

app.use(router);

ElementComponents.forEach(component => {
  app.component(component.name, component)
})

app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 };

ElementPlugins.forEach(plugin => {
  app.use(plugin)
})

app.mount('#app');