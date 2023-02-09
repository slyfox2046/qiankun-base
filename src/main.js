import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerMicroApps, start } from 'qiankun';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

Vue.use(ElementUI);
Vue.config.productionTip = false;
// Angular9
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
    // props: {a:1}
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000', //默认会加载这个html，解析里面的js动态执行（子应用需要解决跨域）fetch
    container: '#react',
    activeRule: '/react',
  },
  {
    name: 'app',
    // entry: '//localhost:9063',
    entry: '//localhost:81',
    container: '#inspect',
    activeRule: '/inspect', //genActiveRule(['/inspect']), Angular9
  },
  {
    name: 'diag',
    // entry: '//localhost:9063',
    entry: '//localhost:80',//window ip
    container: '#subapp-viewport',
    activeRule: '/trans-diag', //genActiveRule(['/inspect']), Angular9
  },
  {
    name: 'alarm',
    // entry: '//localhost:9063',
    entry: '//localhost:82',//window ip
    container: '#subapp-viewport',
    activeRule: '/trans-alarm', //genActiveRule(['/inspect']), Angular9
  },
];
registerMicroApps(apps); //注册应用
// start();
start({
  prefetch: false, // 取消预加载
}); //开启
new Vue({ router, render: (h) => h(App) }).$mount('#app');
