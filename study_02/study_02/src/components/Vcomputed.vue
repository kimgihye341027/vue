<script setup>
import { ref, computed } from "vue";
// 사용자가 입력한 검색어를 저장하는 변수
const search = ref("");

const items = ["아이폰", "갤럭시", "맥북"];
// filteredItems(computed)
// 사용자가 입력한 검색어 (search.value)가 포함된 includes()상품만 보여줌
const filteredItems = computed(() => {
  return items.filter((item) => item.includes(search.value));
});
// 상품리스트 표시
const products = ["🚒아이폰", "🚚갤럭시", "🚖맥북"]
// 상품리스트2 표시
const product2 = ["🎈풍선", "🎆폭죽", "✨반짝반짝"]
</script>
<template>
    <h2>검색기능</h2>
  <!-- 사용자가 입력한 검색어를 search변수에 자동으로 반영 -->
  <input v-model="search" placeholder="상품 검색" />
  <ul>
    <!-- v-for 반복문 사용 해서 filteredItems 배열을 돌면서 li태그로 상품표시 -->
    <li v-for="item in filteredItems" :key="item">{{ item }}</li>
  </ul>
  <hr>
  <h2>상품리스트 출력</h2>
  <ul>
    <li v-for="product in products" :key="product">{{ product }}</li>
  </ul>
  <hr>
  <h2>상품리스트2 출력</h2>
  <ul>
    <li v-for="product in product2" :key="product">{{ product }}</li>
  </ul>
</template>
<style scoped></style>
