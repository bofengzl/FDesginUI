import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import FDesignUI from 'f-design-ui';
console.log('%c🤪 ~ file: main.ts:4 [] -> FDesignUI : ', 'color: #84ecdd', FDesignUI);

createApp(App).use(FDesignUI).mount('#app');
