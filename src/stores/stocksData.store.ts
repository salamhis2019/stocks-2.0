import { defineStore } from 'pinia'
import axios from 'axios'

interface State {
  apiKey: string
  finnhubApiKey: string
  dailyData: any
  logoUrl: string
}

export const useProblemsStore = defineStore('stocks', {
  state: (): State => {
    return {
      apiKey: 'LTSY55G9R1CJFQ11',
      finnhubApiKey: 'chgtbbpr01qnp48q7130chgtbbpr01qnp48q713g',
      dailyData: {},
      logoUrl: ''
    }
  },
  actions: {
    fetchStockData(ticker: string, timeSeries: string) {
      axios
        .get(
          `https://www.alphavantage.co/query?function=${timeSeries}&symbol=${ticker.toUpperCase()}&interval=5min&apikey=${
            this.apiKey
          }`
        )
        .then((response) => {
          console.log(response.data)
          this.dailyData = response.data
        })
        .catch((error) => {
          console.error(error)
        })
      axios
        .get(
          `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${this.finnhubApiKey}`
        )
        .then((response) => {
          const companyProfile = response.data
          const logoUrl = companyProfile.logo
          this.logoUrl = logoUrl
        })
        .catch((error) => {
          console.error('Error occurred while fetching company profile:', error)
        })
    }
  }
})

export default useProblemsStore;
