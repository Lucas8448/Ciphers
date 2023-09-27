<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text-gray-600 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The new way
          <br class="hidden lg:inline-block">to talk
        </h1>
        <p class="mb-8 leading-relaxed">Tired of chat services taking your data without your permission, or not using secure protocols and encryptions. Look no further.</p>
        <div class="flex justify-center space-x-4">
          <router-link to="/register"
            class="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Register
          </router-link>
          <router-link to="/login"
            class="rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Login
          </router-link>
        </div>
      </div>
      <button data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;Ciphers&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;Ciphers&nbsp;</span>
      </button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
