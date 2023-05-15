<script lang="ts" setup>
import SearchBar from '@/components/SearchBar.vue'
import CardContainer from '@/components/UI/CardContainer.vue'
import PriceBadge from '@/components/UI/PriceBadge.vue'

import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import useStocksDataStore from '@/stores/stocksData.store'

const stocksDataStore = useStocksDataStore()
const { dailyData, companyData }: any = storeToRefs(stocksDataStore)

const metaData: any = computed(() => {
  const values = Object.values(dailyData.value)
  return values[0]
})

const dailyTimeSeriesData: any = computed(() => {
  const values = Object.values(dailyData.value)
  return values[1]
})

const currentPrice = computed(() => {
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

const priceChange = computed(() =>
  Number(currentPrice.value - previousClosingPrice.value).toFixed(2)
)

const date = computed(() => {
  if (metaData.value) {
    const keys = Object.keys(metaData.value)
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
      <header class="mb-2 flex items-center gap-2">
        <img :src="companyData.logo" class="h-12" alt="" />
        <h1 class="text-2xl font-semibold">{{ companyData.ticker }} - {{ companyData.name }}</h1>
      </header>
      <h2 class="text-neutral-600">Stock and Price Overview</h2>
      <div class="flex items-center gap-2">
        <h2 class="text-3xl font-bold">
          {{ currentPrice }}
        </h2>
        <PriceBadge :price="priceChange" />
      </div>
      <p class="text-sm text-neutral-500">{{ date }}</p>
    </CardContainer>
  </div>
</template>
