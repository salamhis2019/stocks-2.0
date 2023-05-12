<script lang="ts" setup>
import { ref } from 'vue'
import useStockDataStore from "@/stores/stocksData.store.ts";

const { fetchStockData } = useStockDataStore()

const inputText = ref<any>('')
</script>

<template>
  <div class="flex h-16 w-full items-center bg-neutral-200 p-6">
    <div class="relative w-1/2">
      <input
        v-model="inputText"
        type="text"
        placeholder="Symbol"
        class="z-10 w-full rounded-md border-[0.5px] border-neutral-300 p-2 pr-10 focus:placeholder-transparent"
        @keydown.enter.prevent="fetchStockData(inputText)"
      />
      <span
        class="material-symbols-outlined pointer-events-none absolute inset-y-0 right-5 z-20 flex w-3 cursor-pointer items-center pr-3 opacity-50"
        >search</span
      >
    </div>
  </div>
</template>
