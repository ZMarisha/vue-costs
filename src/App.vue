<template>
  <div id="app" class="container">
    <header>
      <div class="header">My personal costs {{ totalCosts }}</div>
    </header>
    <main>
      <button class="btn" @click="showForm">ADD NEW COST<span>+</span></button>
      <CostsForm @add-costs="addCosts" v-show="hidden" :categoryList = "categoryList" show/>
      <CostsDisplay :costsList = "currentElements" show/>
      <NavigationCosts :cur="page" :n="3" :length = "12" @paginate="onChangePage"/>
    </main>
  </div>
</template>

<script>
import CostsForm from './components/CostsForm.vue'
import CostsDisplay from './components/CostsDisplay.vue'
import NavigationCosts from './components/NavigationCosts.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    CostsForm,
    CostsDisplay,
    NavigationCosts
  },
  data: () => ({
    hidden: false,
    show: true,
    n: 3,
    page: 1
  }),
  computed: {
    ...mapGetters(['costsList', 'categoryList', 'totalCosts']),
    currentElements () {
      return this.$store.getters.costsList.slice(this.n * (this.page - 1), this.n * (this.page - 1) + this.n)
    }
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    ...mapMutations(['ADD_COSTS_DATA']),
    addCosts (data) {
      this.ADD_COSTS_DATA(data)
    },
    showForm () {
      this.hidden = !this.hidden
    },
    onChangePage (p) {
      this.page = p
      this.fetchData(p)
    }
  },
  created () {
    this.fetchCategoryData()
    this.fetchData(this.page)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
}
.container {
  margin: 0 auto;
  max-width: 1140px;
}
.header {
  font-size: 28px;
  font-weight: 600;
  color: black;
  margin-bottom: 90px;
}
.btn {
  height: 30px;
  width: 150px;
  background: #087936;
  color: white;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 600;
}
.btn span {
  padding-left: 10px;
}
@media (max-width: 1024px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
@media (min-width: 320px) and (max-width: 667px) {
  .container {
    padding-left: 8px;
    padding-right: 8px;
  }
  .header {
    font-size: 20px;
  }
}

</style>
