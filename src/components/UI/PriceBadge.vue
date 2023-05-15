<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { clsx } from 'clsx'

const props = defineProps({
  trending: {
    type: String,
    validator: (s: any) => ['up', 'down', 'neutral'].includes(s),
    default: 'neutral'
  },
  symbol: {
    type: String,
    validator: (s: any) => ['trending_up', 'trending_down', 'minimize'].includes(s),
    default: 'easy'
  },
  price: {
    default: ''
  }
})

const baseClasses = 'flex h-fit items-center gap-2 rounded-md px-3 py-0.5 text-center'

const colorClasses: any = {
  up: 'bg-[#2FE900]',
  down: 'bg-[#FF0000]',
  neutral: 'bg-[#E3E3E3]'
}

const trending = computed(() => {
  if (Number(props.price) > 0) {
    return 'up'
  } else if (Number(props.price) === 0) {
    return 'neutral'
  } else {
    return 'down'
  }
})

const priceChangeSymbol = computed(() => {
  if (Number(props.price) > 0) {
    return 'trending_up'
  } else if (Number(props.price) === 0) {
    return 'horizontal_rule'
  } else {
    return 'trending_down'
  }
})
</script>

<template>
  <div :class="clsx(baseClasses, colorClasses[trending])">
    <span>{{ price }}</span>
    <span class="material-symbols-outlined">{{ priceChangeSymbol }}</span>
  </div>
</template>
