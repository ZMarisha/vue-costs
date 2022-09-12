export default {
  state: {
    categoryList: []
  },
  getters: {
    categoryList: (state) => state.categoryList
  },
  mutations: {
    SET_CATEGORY_DATA (state, categoryList) {
      state.categoryList = categoryList
    }
  },
  actions: {
    fetchCategoryData ({ commit }) {
      setTimeout(() => {
        const categoryList = ['Food', 'Clothing', 'Housing', 'Healthcare', 'Transport']
        commit('SET_CATEGORY_DATA', categoryList)
      }, 1000)
    }
  }
}
