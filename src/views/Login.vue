<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Login</h1>
       <form @submit.prevent="handleLogin">
          <label for="username">Username </label> <br>
          <input
              v-model="user.username"
              type="text"
              placeholder="Username"> <br>
          <label for="password">Password </label> <br>
          <input
              v-model="user.password"
              type="password"
              placeholder="Password"> <br>
          <button>Ok</button>
       </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    handleLogin(ev) {
       this.$store.dispatch('login', this.user)
    }
  }
}
</script>

<style lang="scss" >

@import '../styles/base.scss';
@import '../styles/vars.scss';
.login-page{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $light-grey;
  background-image: url("../assets/login-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .login-container{
    background: white;
    display: inline-block;
    width: 270px;
    padding: 46px 32px;
    margin-bottom: 60px;
    justify-content: center;


    h1{
      text-align: center;
      margin: 0 0 20px;
      font-size: 32px;
      font-weight: 500;
      letter-spacing: 2px;
      color: $dark-grey;
    }
    input, button{
      width: 256px;
      height: 36px;
      border: 1px solid $dark-grey;
      border-radius: 5px;
      margin: 10px 0 15px;
      padding: 0px 7px;
    }
    input{
      background-color: $dark-white;
      color: $medium-grey;
      box-shadow:inset 0px 2px 5px rgb(50 50 50 / 25%);
      max-width: 270px;
      font-size: 14px;
    }
    button{
      background-color: $dark-grey;
      color: white;
      width: 272px;
      box-shadow:0px 2px 5px rgb(50 50 50 / 25%);
    }
  }
}
</style>