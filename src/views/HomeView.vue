<script lang="ts" setup>
import SidebarNav from "@/components/SidebarNav.vue"
import SearchBar from "@/components/SearchBar.vue"
import CardContainer from "@/components/UI/CardContainer.vue"

import useStocksDataStore from "@/stores/stocksData.store.ts"

const { symbol, data } = useStocksDataStore()
</script>

<template>
  <div class="flex h-full w-full">
    <SidebarNav />
    <div class="w-full">
      <SearchBar />
      <div class="p-6">
        <h2 class="mb-4 text-xl font-semibold">Price Action</h2>
        <CardContainer>
          {{ symbol }}
        </CardContainer>
      </div>
    </div>
  </div>
</template>
