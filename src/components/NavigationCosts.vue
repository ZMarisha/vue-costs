<template>
    <div>
      <nav class="pagination">
        <button class="btnSwitch" @click="onClick(cur - 1)">Previous</button>
        <button class="btnPages btnActive" v-for="page in amountPages" :key="page" @click="onClick(page)" :class="{active: page === cur}">{{ page }}</button>
        <button class="btnSwitch" @click="onClick(cur + 1)">Next</button>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'NavigationCosts',
  props: {
    length: Number,
    n: Number,
    cur: Number
  },
  data: () => ({
    // perPage: 5,
    // pages: [],
    // page: 1
  }),
  computed: {
    amountPages () {
      return Math.ceil(this.length / this.n)
    }
  },
  methods: {
    onClick (p) {
      if (p < 1 || p > this.amountPages) {
        return
      }
      this.$emit('paginate', p)
    }
  }
}

</script>

  <style scoped>
    .pagination {
      width: 600px;
      margin-top: 50px;
      display: flex;
  }
  button {
    height: 30px;
    width: 70px;
    background: white;
    color: grey;
    text-align: center;
    font-weight: 600;
}
.btnActive:focus {
  background: #087936;
  color: white;
}
@media (min-width: 320px) and (max-width: 667px) {
  .pagination {
    width: inherit;
    margin-top: 50px;
  }
  .btnPages {
    width: 40px;
    height: 25px;
  }
  .btnSwitch {
    height: 25px;
  }
}
</style>
