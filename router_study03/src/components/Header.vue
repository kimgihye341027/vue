<script setup>
</script>

<template>
    <header>
    <nav>
    <router-link to="/"> 홈 |</router-link>
    <router-link to="/About"> 소개 |</router-link>
    <router-link to="/Cash"> 결제하기 |</router-link>
    <router-link to="/Reservation"> 예약하기 |</router-link>
    <router-link to="/Login"> 로그인 |</router-link>
    <router-link to="/Signup"> 회원가입 |</router-link>
    <router-link to="/Review"> 리뷰 |</router-link>
    </nav>
    </header>
    <router-view></router-view>
</template>

<style scoped>
header {
  padding: 10px;
}
</style>