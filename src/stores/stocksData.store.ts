import { defineStore } from 'pinia'
import axios from 'axios'

interface State {
  apiKey: string
  finnhubApiKey: string
  dailyData: any
  companyData: any
  companyOverview: any
}

export const useProblemsStore = defineStore('stocks', {
  state: (): State => {
    return {
      apiKey: 'LTSY55G9R1CJFQ11',
      finnhubApiKey: 'chgtbbpr01qnp48q7130chgtbbpr01qnp48q713g',
      dailyData: {},
      companyData: '',
      companyOverview: {}
    }
  },
  actions: {
    async fetchStockData(ticker: any, timeSeries: any) {
      try {
        const dailyDataResponse = await axios.get(
          `https://www.alphavantage.co/query?function=${timeSeries}&symbol=${ticker.toUpperCase()}&interval=5min&apikey=${
            this.apiKey
          }`
        )
        this.dailyData = dailyDataResponse.data
        const companyDataResponse = await axios.get(
          `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${this.finnhubApiKey}`
        )
        this.companyData = companyDataResponse.data
        const companyOverviewResponse = await axios.get(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker.toUpperCase()}&apikey=${
            this.apiKey
          }`
        )
        this.companyOverview = companyOverviewResponse.data
      } catch (error) {
        console.error('Error occurred while fetching stock data:', error)
      }
    }
  }
})

export default useProblemsStore
