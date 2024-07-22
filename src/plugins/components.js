import UIButtonVue from "@/components/shared/customComponents/UIButton.vue";
import UIIntputVue from "@/components/shared/customComponents/UIIntput.vue";
import UISpinnerVue from "@/components/shared/customComponents/UISpinner.vue";
import UIModalVue from "@/components/shared/customComponents/UIModal.vue";

export default {
  install(Vue) {
    Vue.component("ui-input", UIIntputVue);
    Vue.component("ui-button", UIButtonVue);
    Vue.component("ui-spinner", UISpinnerVue);
    Vue.component("ui-modal", UIModalVue);
  },
};
