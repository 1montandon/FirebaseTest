<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Tarefas</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
