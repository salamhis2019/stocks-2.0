import { defineStore } from 'pinia'
import axios from 'axios'

interface State {
  apiKey: string
  data: any
}

export const useProblemsStore = defineStore('stocks', {
  state: (): State => {
    return {
      apiKey: 'LTSY55G9R1CJFQ11',
      data: null
    }
  },
  actions: {
    fetchStockData(ticker: string) {
      axios
        .get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker.toUpperCase()}&interval=5min&apikey=demo${
            this.apiKey
          }`
        )
        .then((response) => {
          console.log(response.data)
          this.data = response.data

          const firstDataKey = Object.keys(this.data)[0]
          const metaDataKeys = Object.keys(this.data[firstDataKey])
          this.symbol = this.data[firstDataKey][metaDataKeys[1]]
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
})

export default useProblemsStore;
