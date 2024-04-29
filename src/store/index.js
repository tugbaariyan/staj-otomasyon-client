import { createStore } from "vuex";
import user from "./modules/user.js";
import document from "./modules/document.js";

const store = (api) =>
  createStore({
    modules: {
      user: user(api),
      document: document(api),
    },
  });

export default store;
