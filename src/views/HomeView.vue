<script lang="ts" setup>
import SidebarNav from '@/components/SidebarNav.vue'
import StockDashboard from '@/components/StockDashboard.vue';

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const param = computed(() => route.path)
</script>

<template>
  <div class="flex h-full w-full">
    <SidebarNav />
    <div class="mx-auto w-full max-w-[1300px] overflow-y-scroll">
      <StockDashboard />
    </div>
  </div>
</template>
