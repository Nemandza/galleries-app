<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="credentials.email"
          type="email"
          required
          class="form-control"
          id="email"
          aria-describedby="email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="credentials.password"
          type="password"
          required
          class="form-control"
          id="password"
          aria-describedby="password"
        />
      </div>
      <p v-if="loginFailed" class="error-message">Something went wrong</p>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'register',
  data() {
    return {
      loginFailed: false,
      credentials: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async handleSubmit() {
      this.loginFailed = false;
      try {
        await this.login(this.credentials);
        this.$router.push('/');
      } catch {
        this.loginFailed = true;
      }
    },
    ...mapActions('auth', ['login']),
  },
};
</script>

<style scoped>
.error-message {
  color: red;
}
</style>
