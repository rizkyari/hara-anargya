<script setup>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="grid grid-cols-6">
    <Sidebar class="col-span-1"/>
    <div class="col-span-5">
      <Header/>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
