<script setup>
import ExArr from "./components/ExArr.vue";
import Event from "./components/Event.vue";
import { ref } from "vue";
const showEx = ref(false);
</script>

<template>
  <div>
    <ExArr />
    <button @click="showEx = !showEx">
      {{ showEx ? "닫기" : "ExArr 보기" }}
    </button>
    <Event  v-if="showEx"/>
   
  </div>
</template>

<style scoped></style>
