<template>
  <div class="costsForm">
    <form class="form" v-on:submit.prevent>
      <select class="inputCosts" v-model="category">
        <option v-for="category in categoryList" :key="category" :value="category">{{ category }}</option>
      </select>
      <input class="inputCosts" type="text" placeholder="Payment amount" v-model.number="value"/>
      <input class="inputCosts" type="text" placeholder="Payment date" v-model="date"/>
      <button type="submit" class="btnAddCost" @click="addNewCost">ADD<span>+</span></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CostsForm',
  props: {
    categoryList: {
      type: Array,
      default: () => []
    },
    show: Boolean
  },
  data: () => ({
    date: '',
    category: '',
    value: ''
  }),
  methods: {
    addNewCost () {
      const { value, date, category } = this
      const data = {
        date: date || this.currentDateFunc,
        category: category,
        value: value
      }
      this.value = ''
      this.category = ''
      this.date = ''
      this.$emit('add-costs', data)
    }
  },
  computed: {
    currentDateFunc () {
      const currentDate = new Date()
      const day = currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate()
      const month = (currentDate.getMonth() + 1) < 10 ? '0' + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1)
      const year = currentDate.getFullYear()
      return `${day}.${month}.${year}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .costsForm {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .btn, .btnAddCost{
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
  .btnAddCost span {
    margin-left: 10px;
  }
  .form {
    display: grid;
    gap: 15px;
    margin-top: 40px;
  }
  .inputCosts {
    box-sizing: border-box;
    width: 328px;
    height: 34px;
    font-size: 16px;
    padding-left: 10px;
    color: #7f7979;
  }
  @media (min-width: 320px) and (max-width: 667px) {
    .inputCosts {
    width: inherit;
  }
  }
</style>
