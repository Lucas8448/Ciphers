<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container mx-auto min-h-screen flex flex-col justify-center items-center text-center">
    <h1 class="text-5xl font-bold text-gray-900">Welcome to Ciphers!</h1>
    <p class="text-lg mt-4 text-gray-700">Your go-to platform for all things awesome.</p>

    <div class="mt-8 flex gap-4">
      <router-link to="/login" class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
        Login
      </router-link>
      <router-link to="/register" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
        Register
      </router-link>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
