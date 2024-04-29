import api from "./api";
import Components from "./components";

export const plugins = {
  install(Vue) {
    Vue.use(api);
    Vue.use(Components);
  },
};
