<template>
    <div class="login-form">
      
      <form  name="login-form" >
        <img class="logo" src="@/assets/img/logo.png" alt="KTUN" />
      <div class="input">
        <label class="label" for="username">Mail Adresi: </label>
        <input id="username" type="text" />
      </div>
      <div class="input">
        <label class="label" for="password">Şifre : </label>
        <input id="password" type="password" />
      </div>
      <div class="button-wrapper">
        <button @click="handleLogin" class="btn btn-outline-dark" type="submit">
          Giriş Yap
        </button>
        <button  type="submit">
          Şifremi Unuttum
        </button>
      </div>
    </form>
    </div>
</template>

<script>
export default {
name: 'LoginView',
methods: {
  
},
}
</script>

<style>
.login-form {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

form{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.button-wrapper{
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: space-around;
}

button{
  width: 50%;
}

.input{
  width: 100%;
}
</style>