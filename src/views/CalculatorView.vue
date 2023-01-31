<template>
  <div class="about">
    <CalculatorModule />
  </div>
</template>

<script setup lang="ts">
import CalculatorModule from "@/components/CalculatorModule.vue";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
