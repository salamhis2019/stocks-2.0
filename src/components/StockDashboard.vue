<script lang="ts" setup>
import SearchBar from "@/components/SearchBar.vue"
import CardContainer from "@/components/UI/CardContainer.vue"

import useStocksDataStore from "@/stores/stocksData.store.ts"

const { symbol } = useStocksDataStore()
</script>

<template>
  <SearchBar />
  <div class="p-6">
    <h2 class="mb-4 text-xl font-semibold">Price Action</h2>
    <CardContainer>
      {{ symbol }}
    </CardContainer>
  </div>
</template>
