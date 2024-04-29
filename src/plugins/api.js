import axios from "axios";
import Cookies from "js-cookie";

import UserAPI from "@/services/UserService";
import DocumentAPI from "@/services/DocumentService";

const apiMaker = (service) => {
  return `http://localhost:3000/${service}/`;
};

const APIUser = apiMaker("user");
const APIDocument = apiMaker("document");

const service = {
  install(Vue) {
    const getToken = () => {
      const token = Cookies.get("accessToken");
      if (token) {
        return "Bearer " + token;
      } else {
        return null;
      }
    };
    const api = axios.create({
      headers: {
        Authorization: getToken(),
      },
    });
    api.userAPI = UserAPI(api, APIUser);
    api.documentAPI = DocumentAPI(api, APIDocument);
    Vue.config.globalProperties.$api = api;
  },
};
export default service;
