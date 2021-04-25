<template>
  <div>{{ title }}</div>

  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <SvgIcon name="gift" color="#8B81C3" />
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svg-icon/index.vue';
const title = 'HOME';

function count() {
  let id = 1;
  return () => {
    id = id + 1;
    return id;
  };
}

let increaseId = count();
console.log(increaseId());
console.log(increaseId());
console.log(increaseId());
</script>

<style></style>
