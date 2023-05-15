<script lang="ts" setup>
import SearchBar from '@/components/SearchBar.vue'
import CardContainer from '@/components/UI/CardContainer.vue'
import PriceBadge from '@/components/UI/PriceBadge.vue'

import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import useStocksDataStore from '@/stores/stocksData.store.ts'

const stocksDataStore = useStocksDataStore()
const { dailyData }: any = storeToRefs(stocksDataStore)

const metaData: any = computed(() => {
  const values = Object.values(dailyData.value)
  return values[0]
})

const dailyTimeSeriesData: any = computed(() => {
  const values = Object.values(dailyData.value);
  return values[1]
})

const symbol = computed(() => {
  if (metaData.value) {
    const keys = Object.keys(metaData.value);
    return metaData.value[keys[1]]
  }
  return ''
})

const price = computed(() => {
  if (dailyTimeSeriesData.value) {
    const closingData: any = Object.values(dailyTimeSeriesData.value)[0]
    const closingDataKeys = Object.keys(closingData)
    return closingData[closingDataKeys[3]]
  }
  return ''
})

const previousClosingPrice = computed(() => {
  if (dailyTimeSeriesData.value) {
    const closingData: any = Object.values(dailyTimeSeriesData.value)[1]
    const closingDataKeys = Object.keys(closingData)
    return closingData[closingDataKeys[3]]
  }
  return ''
})

const priceChange = computed(() => Number(price.value - previousClosingPrice.value).toFixed(2))

const date = computed(() => {
  if (metaData.value) {
    const keys = Object.keys(metaData.value);
    return metaData.value[keys[2]]
  }
  return ''
})
</script>

<template>
  <SearchBar />
  <div class="p-6">
    <h2 class="mb-4 text-xl font-semibold">Price Action</h2>
    <CardContainer>
      <header>
        <h1 class="text-2xl font-semibold">
          {{ symbol }}
        </h1>
      </header>
      <h2>Stock and Price Overview</h2>
      <div class="flex items-center gap-2">
        <h2 class="text-3xl font-bold">
          {{ price }}
        </h2>
        <PriceBadge :trending="trending" :symbol="priceChangeSymbol" :price="priceChange" />
      </div>
      {{ date }}
    </CardContainer>
  </div>
</template>
