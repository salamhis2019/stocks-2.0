<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import useStockDataStore from "@/stores/stocksData.store.ts";

const { fetchStockData } = useStockDataStore()

const route = useRoute()
const inputText = ref<any>('')
const param = ref<any>(route.params.symbol)
const timeSeries = ref<any>('TIME_SERIES_DAILY_ADJUSTED')
</script>

<template>
  <div class="flex w-full items-center px-6 pt-6">
    <div class="relative w-1/2">
      <input
        v-model="inputText"
        type="text"
        placeholder="Symbol"
        class="z-10 w-full rounded-md border-[0.5px] border-neutral-300 p-2 pr-10 focus:placeholder-transparent"
        @keydown.enter.prevent="fetchStockData(inputText, timeSeries)"
      />
      <span
        class="material-symbols-outlined pointer-events-none absolute inset-y-0 right-5 z-20 flex w-3 cursor-pointer items-center pr-3 opacity-50"
        >search</span
      >
    </div>
  </div>
</template>
