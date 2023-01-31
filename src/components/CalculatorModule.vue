<template>
  <div class="calculator">
    <h1>Calculator</h1>
    <div class="calculator__view">
      <p id="result">{{ result }}</p>
    </div>
    <div class="calculator__buttons">
      <button id="clear" class="calculator__operator" @click="result = 0">C</button>
      <button id="sum" class="calculator__operator" @click="result += 1">+</button>
      <button id="subtract" class="calculator__operator" @click="result -= 1">-</button>
      <button id="divide" class="calculator__operator" @click="result /= 2">/2</button>
      <button id="multiply" class="calculator__operator" @click="result *= 2">*2</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const result = ref(0);
</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.calculator__view {
  width: 10rem;
  height: 3rem;
  border-radius: 0.75rem;
  border: 1px solid hsla(160, 100%, 37%, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.calculator__buttons {
  display: flex;
  gap: 0.15rem;
  width: 100%;
}
.calculator__operator {
  width: 20%;
  height: 3rem;
  border-radius: 0.75rem;
  border: 1px solid hsla(160, 100%, 37%, 1);
  background-color: hsla(160, 100%, 37%, 1);
}
</style>
