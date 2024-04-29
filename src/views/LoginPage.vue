<template>
  <div class="login-page-wrapper">
    <div class="login">
      <div class="logo">
        <img class="logo" src="@/assets/img/logo.png" alt="KTUN" />
      </div>
      <ui-input
        v-model="email"
        label="Email"
        placeholder="Mailinizi buraya giriniz"
      />
      <ui-input
        v-model="password"
        label="Şifre"
        placeholder="Şifrenizi buraya giriniz"
        type="password"
      />
      <div class="button-wrapper">
        <ui-button label="Giriş Yap" @click="login" />
        <ui-button label="Şifremi Unuttum" type="error" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("user/login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page-wrapper {
  @include flexible($align: center, $justify: center, $direction: column);
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("https://abcfuture.com.tr/uploads/schools/78f696cb6dd7df89786330f46ca13d45.jpg");
    background-size: cover;
    background-position: center;
    filter: blur(4px);
    z-index: -1;
  }
  .login {
    @include flexible($direction: column, $align: end);
    border: 1px solid $black;
    padding: 1rem;
    border-radius: 1rem;
    gap: 1rem;
    position: relative;
    background-color: rgba($color: $white, $alpha: 0.5);

    .logo {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
  }
}
</style>
