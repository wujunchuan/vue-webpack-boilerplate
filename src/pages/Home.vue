/**
 * 首页组件
 */

<template>
  <div>
    <mp-header></mp-header>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <mp-footer></mp-footer>
  </div>
</template>

<script>
  import mpHeader from '@/components/Header';
  import mpFooter from '@/components/Footer';
  export default {
    name: 'home',
    components: {
      mpHeader,
      mpFooter
    }
  }
</script>

<style lang="scss" scoped>

</style>
