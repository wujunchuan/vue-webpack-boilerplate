/**
 * system-manager Index 组件
 */

<template>
  <div>
    <h4>system-manager-index</h4>
    <router-link to="/system-manager/department">部门管理</router-link>
    <router-link to="/system-manager/user">用户管理</router-link>
    <router-link to="/system-manager/menu">菜单管理</router-link>
    <router-link to="/system-manager/role">角色管理</router-link>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'system-manager-index'
  }
</script>

<style lang="scss">

</style>
