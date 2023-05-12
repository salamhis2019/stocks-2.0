import { defineStore } from 'pinia'

interface State {
  symbol: string
}

export const useProblemsStore = defineStore('stocks', {
  state: (): State => {
    return {
      symbol: ''
    }
  }
})

export default useProblemsStore;
