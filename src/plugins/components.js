import UIButtonVue from "@/components/shared/customComponents/UIButton.vue";
import UIIntputVue from "@/components/shared/customComponents/UIIntput.vue";

export default {
  install(Vue) {
    Vue.component("ui-input", UIIntputVue);
    Vue.component("ui-button", UIButtonVue);
  },
};
