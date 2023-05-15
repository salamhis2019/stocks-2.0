import { defineStore } from 'pinia'
import axios from 'axios'

interface State {
  apiKey: string
  dailyData: any,
}

export const useProblemsStore = defineStore('stocks', {
  state: (): State => {
    return {
      apiKey: 'LTSY55G9R1CJFQ11',
      dailyData: {}
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
    }
  }
})

export default useProblemsStore;
