<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <LayoutSideBar></LayoutSideBar>
    </el-aside>


    <el-container>
      <el-header>
        <LayoutHeader></LayoutHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import LayoutHeader from "./header/index.vue";
import LayoutSideBar from "./sidebar/index.vue";
</script>

<style>
</style>
