/**
 * Header 组件
 */

<template>
  <header>
    <h1>DMP后台</h1>
    <router-link to="/system-manager">系统管理</router-link>
    <router-link to="/tags-manager">标签元数据</router-link>
    <router-link to="/peoples-manager">人群管理</router-link>
    <router-link to="/services-manager">服务管理</router-link>
  </header>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style lang="scss">

</style>
