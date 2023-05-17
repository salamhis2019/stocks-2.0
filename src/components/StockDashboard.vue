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

const currentPrice: any = computed(() => {
  if (dailyTimeSeriesData.value) {
    const closingData: any = Object.values(dailyTimeSeriesData.value)[0]
    const closingDataKeys = Object.keys(closingData)
    return {
      close: closingData[closingDataKeys[3]],
      open: closingData[closingDataKeys[0]]
    }
  }
  return ''
})

const previousClosingPrice: any = computed(() => {
  if (dailyTimeSeriesData.value) {
    const closingData: any = Object.values(dailyTimeSeriesData.value)[1]
    const closingDataKeys = Object.keys(closingData)
    return {
      price: closingData[closingDataKeys[3]],
      date: Object.keys(dailyTimeSeriesData.value)[1]
    }
  }
  return ''
})

const priceChange = computed(() =>
  Number(currentPrice.value.close - previousClosingPrice.value.price).toFixed(2)
)

const date = computed(() => {
  if (metaData.value) {
    const keys = Object.keys(metaData.value)
    return metaData.value[keys[2]]
  }
  return ''
})

const percentChange = computed(() =>
  ((Number(priceChange.value) / Number(previousClosingPrice.value.price)) * 100).toFixed(2)
)

const classes = computed(() => {
  if (Number(percentChange.value) > 0) {
    return 'text-green-600'
  } else if (Number(percentChange.value) === 0 || Number.isNaN(Number(percentChange.value))) {
    return 'text-neutral-600'
  } else {
    return 'text-red-600'
  }
})
</script>

<template>
  <SearchBar />
  <div class="p-6">
    <h2 class="mb-4 text-xl font-semibold">Price Action</h2>
    <div class="flex gap-6">
      <CardContainer>
        <header class="mb-2 flex items-center gap-3">
          <img :src="companyData.logo" class="h-12" alt="" />
          <h1 class="text-2xl font-semibold">{{ companyData.ticker }} - {{ companyData.name }}</h1>
        </header>
        <h2 class="text-neutral-600">Stock and Price Overview</h2>
        <div class="flex items-center gap-2">
          <h2 class="my-1 text-3xl font-bold">
            {{ currentPrice.close }}
          </h2>
          <PriceBadge :price="priceChange" />
          <p class="text-sm font-medium" :class="classes">({{ percentChange }}%)</p>
        </div>
        <p class="text-sm text-neutral-500">{{ date }}</p>
      </CardContainer>
      <CardContainer>
        <div class="flex h-full flex-col justify-between">
          <header>
            <h2 class="text-xl font-semibold">Today</h2>
          </header>
          <div class="flex w-full justify-between">
            <div class="flex flex-col gap-2">
              <p class="text-neutral-600">Open</p>
              <p class="text-3xl font-bold">{{ currentPrice.open }}</p>
              <p class="text-sm text-neutral-500">{{ date }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-neutral-600">Previous Close</p>
              <p class="text-3xl font-bold">{{ previousClosingPrice.price }}</p>
              <p class="text-sm text-neutral-500">{{ previousClosingPrice.date }}</p>
            </div>
          </div>
        </div>
      </CardContainer>
    </div>
  </div>
</template>
