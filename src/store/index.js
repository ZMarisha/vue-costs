import Vue from 'vue'
import Vuex from 'vuex'
import CategoryList from './modules/CategoryList'

Vue.use(Vuex)

const array = {
  page1: [
    { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
    { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
    { id: 3, date: '22.03.2020', category: 'Sport', value: 450 }
  ],
  page2: [
    { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 6, date: '25.03.2020', category: 'Food', value: 200 }
  ],
  page3: [
    { id: 7, date: '20.03.2020', category: 'Food', value: 169 },
    { id: 8, date: '21.03.2020', category: 'Navigation', value: 50 },
    { id: 9, date: '22.03.2020', category: 'Sport', value: 450 }
  ],
  page4: [
    { id: 10, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 11, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 12, date: '25.03.2020', category: 'Food', value: 200 }
  ]
}

export default new Vuex.Store({
  state: {
    costsList: [],
    costsListId: []
  },
  getters: {
    costsList: (state) => state.costsList,
    totalCosts: ({ costsList }) => costsList.reduce((prev, { value }) => prev + value, 0)
  },
  mutations: {
    SET_COSTS_LIST (state, payload) {
      console.log(state.costsList)
      const uniqObj = payload.filter((item) => {
        return state.costsListId.indexOf(item.id) < 0
      })
      console.log(uniqObj)
      const uniqId = uniqObj.map(obj => (obj.id))
      state.costsList.push(...uniqObj)
      state.costsListId.push(...uniqId)
    },
    ADD_COSTS_DATA (state, costs) {
      state.costsList.push(costs)
    }
  },
  actions: {
    fetchData ({ commit }, page) {
      setTimeout(() => {
        // const initialCostsList = [
        //   { id: 1, date: '12.05.2022', category: 'Food', value: 210 },
        //   { id: 2, date: '28.05.2022', category: 'Clothing', value: 1200 },
        //   { id: 3, date: '17.06.2022', category: 'Housing', value: 502 },
        //   { id: 4, date: '30.08.2022', category: 'Healthcare', value: 545 },
        //   { id: 5, date: '02.09.2022', category: 'Transport', value: 350 },
        //   { id: 6, date: '05.09.2022', category: 'Transport', value: 120 },
        //   { id: 7, date: '06.09.2022', category: 'Food', value: 1230 },
        //   { id: 8, date: '07.09.2022', category: 'Food', value: 1100 },
        //   { id: 9, date: '07.09.2022', category: 'Transport', value: 120 },
        //   { id: 10, date: '08.09.2022', category: 'Food', value: 1230 },
        //   { id: 11, date: '12.05.2022', category: 'Food', value: 210 },
        //   { id: 12, date: '28.05.2022', category: 'Clothing', value: 1200 },
        //   { id: 13, date: '17.06.2022', category: 'Housing', value: 502 },
        //   { id: 14, date: '30.08.2022', category: 'Healthcare', value: 545 },
        //   { id: 15, date: '02.09.2022', category: 'Transport', value: 350 },
        //   { id: 16, date: '05.09.2022', category: 'Transport', value: 120 },
        //   { id: 17, date: '06.09.2022', category: 'Food', value: 1230 },
        //   { id: 18, date: '07.09.2022', category: 'Food', value: 1100 },
        //   { id: 19, date: '07.09.2022', category: 'Transport', value: 120 }
        // ]
        console.log(page)
        const initialCostsList = array[`page${page}`]
        console.log(array[`page${page}`])
        console.log(initialCostsList)
        commit('SET_COSTS_LIST', initialCostsList)
      }, 0)
    }
  },
  modules: {
    CategoryList
  }
})
