<script lang="ts" setup>
import { ref } from 'vue'
import useStockDataStore from "@/stores/stocksData.store.ts";

const { fetchStockData } = useStockDataStore()

const inputText = ref<any>('')
</script>

<template>
  <div class="flex h-16 w-full items-center bg-neutral-200 p-6">
    <input
      v-model="inputText"
      type="text"
      placeholder="Symbol"
      class="w-1/2 rounded-md border-[0.5px] border-neutral-300 p-2"
      @keydown.enter.prevent="fetchStockData(inputText)"
    />
  </div>
</template>
