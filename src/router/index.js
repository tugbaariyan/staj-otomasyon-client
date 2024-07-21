import { createWebHistory, createRouter } from "vue-router";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const routes = [
  {
    path: "/",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      isDefaultLayout: true,
    },
  },
  {
    path: "/file-upload",
    name: "fileUpload",
    component: () => import("@/views/DocumentUploadPage.vue"),
    meta: {
      isDefaultLayout: true,
    },
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
    meta: {
      isDefaultLayout: false,
    },
  },
  {
    path: "/test",
    component: () => import("@/views/TestPage.vue"),
    meta: {
      isDefaultLayout: true,
    },
  },
  {
    path: "/all-students",
    name: "allStudents",
    component: () => import("@/views/StudentsPage.vue"),
    meta: {
      isDefaultLayout: true,
    },
  },
  {
    path: "/student-detail/:id",
    name: "studentDetail",
    component: () => import("@/views/StudentDetailPage.vue"),
    meta: {
      isDefaultLayout: true,
    },
  },
  {
    path: "/all-documents",
    name: "documents",
    component: () => import("@/views/DocumentsPage.vue"),
    meta: {
      isDefaultLayout: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  linkActiveClass: "active",
});

const checkUserAuthentication = () => {
  const token = Cookies.get("accessToken");
  const currentTimestamp = Math.floor(Date.now() / 1000); //1703342797
  if (token) {
    const decodedAccessToken = jwtDecode(token);
    if (decodedAccessToken.exp < currentTimestamp) {
      Cookies.remove("accessToken");
      return false;
    } else {
      return true;
    }
  }
  return false;
};

router.beforeEach((to, from, next) => {
  const isAuthenticated = checkUserAuthentication();
  const isLoginPage = to.path === "/login" || to.path === "/forgot-password";
  if (isAuthenticated && isLoginPage) {
    next("/");
  } else if (!isAuthenticated && !isLoginPage) {
    next("/login");
  } else {
    next();
  }
});

export default router;
