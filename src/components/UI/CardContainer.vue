<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props: any = defineProps({
  width: {
    type: String
  },
  height: {
    type: String
  }
})

const classes = computed(() => {
  return `${props.width} ${props.height}`
})
</script>

<template>
  <div class="shadow-large flex flex-col justify-center rounded-xl bg-white p-6" :class="classes">
    <slot></slot>
  </div>
</template>
