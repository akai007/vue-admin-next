<template>
  <svg class="va-svg-icon" :class="$attrs.class" aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts">
export default { name: 'SvgIcon', inheritAttrs: false };
</script>
<script setup lang="ts">
import { computed, defineProps } from '@vue/runtime-core';
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#333',
  },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style scoped lang="scss">
.va-svg-icon {
  width: 1.5em;
  height: 1.5em;
}
</style>
