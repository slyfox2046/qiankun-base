import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from 'qiankun';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

Vue.use(ElementUI);
Vue.config.productionTip = false;
// function genActiveRule(urlList) {
//   return (location) => {
//     console.log("aaa")
//     for(let url of urlList) {
//       if (location.hash === url) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

const apps = [
  {
    name: 'vue app', // app name registered
    entry: '//localhost:10000',
    container: '#vue',
    activeRule: '/vue',
  },
  {
    name: 'reactApp',
    entry: '//localhost:12000', //默认会加载这个html，解析里面的js动态执行（子应用需要解决跨域）fetch
    container: '#react',
    activeRule: '/react',
  },


  {
    name: 'inspect',
    entry: '//localhost:9063',
    container: '#inspect',

    activeRule: '/inspect'//genActiveRule(['/inspect']),
  }

];
registerMicroApps(apps); //注册应用
// start();
start({
  prefetch: false, // 取消预加载
}); //开启
new Vue({ router, render: (h) => h(App) }).$mount('#app');
