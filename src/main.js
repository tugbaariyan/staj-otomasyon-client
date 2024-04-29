import { createApp } from "vue";
import App from "./App.vue";
import createStore from "./store/index.js";
import router from "./router";
import { plugins } from "./plugins";

// css
import "@/assets/css/reset.css";

const app = createApp(App);
app
  .use(plugins)
  .use(router)
  .use(createStore(app.config.globalProperties.$api))
  .mount("#app");
