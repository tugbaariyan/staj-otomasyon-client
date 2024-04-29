import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import router from "@/router";

export default (api) => {
  const service = api.userAPI.userService;
  return {
    namespaced: true,
    state: {
      user: Cookies.get("userData") ? JSON.parse(Cookies.get("userData")) : {},
    },
    mutations: {
      SET_USER(state, payload) {
        state.user = payload;
        Cookies.set("userData", JSON.stringify(payload));
      },
      CLEAR_STATE(state) {
        state.user = {};
        Cookies.remove("userData");
      },
    },
    actions: {
      async login(context, payload) {
        const response = await service.login(payload);
        if (response.status) {
          context.dispatch("continueLogin", response.data);
        }
      },
      async continueLogin(context, payload) {
        const accessToken = jwtDecode(payload.tokens.accessToken);

        const v0 = new Date(Date.now() - new Date(accessToken.exp * 1000));
        const expireAccessToken = Math.round(
          Math.abs(v0 / (1000 * 60 * 60 * 24))
        );

        Cookies.set("accessToken", payload.tokens.accessToken, {
          expires: expireAccessToken,
          sameSite: "None",
          secure: true,
        });
        delete payload.tokens;
        context.commit("SET_USER", payload);

        router.push("/");
      },
      signOut(context) {
        context.commit("CLEAR_STATE");
        Cookies.remove("accessToken");
        router.push("/login");
      },
      async getAll() {
        const response = await service.getAll();
        if (response.status == 200) {
          return response.data;
        }
      },
      async getById(_, payload) {
        const response = await service.getById(payload);
        if (response.status == 200) {
          return response.data;
        }
      },
    },
    getters: {
      getUser(state) {
        return state.user;
      },
      getRole(state) {
        return state.user.role;
      },
    },
  };
};
