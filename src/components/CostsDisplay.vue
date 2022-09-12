<template>
  <div class="parentCosts">
    <table>
      <thead>
        <tr class="itemCost itemCostHeader">
          <th class="tdItem indexCost selectionHeader">#</th>
          <th class="tdItem selectionHeader">Date</th>
          <th class="tdItem selectionHeader">Category</th>
          <th class="tdItem selectionHeader">Value</th>
        </tr>
      </thead>
      <tr class="itemCost" v-for="({id, date, value, category}, index) in costsList" :key="index">
        <td class="tdItem indexCost">{{ id }}</td>
        <td class="tdItem">{{ date }}</td>
        <td class="tdItem">{{ category }}</td>
        <td class="tdItem">{{ value }}</td>
      </tr>
    </table>
    <!-- <nav class="pagination">
        <button class="btnSwitch" @click="decreasePage">Previous</button>
        <button class="btnPages btnActive" v-for="(pageNumber, index) in pages.slice(page-1, page+4)" :key="index" @click="page = pageNumber"> {{ pageNumber }}</button>
        <button class="btnSwitch" @click="increasePage">Next</button>
    </nav> -->
  </div>
</template>

<script>

export default {
  name: 'CostsDisplay',
  props: {
    costsList: {
      type: Array,
      default: () => []
    },
    show: Boolean
  }
  // data: () => ({
  //   perPage: 5,
  //   pages: [],
  //   page: 1
  // }),
  // methods: {
  //   decreasePage () {
  //     if (this.page > 1) {
  //       this.page--
  //     }
  //     console.log(this.page)
  //   },
  //   increasePage () {
  //     if (this.page < this.pages.length) {
  //       this.page++
  //     }
  //     console.log(this.page)
  //   },
  //   setPages () {
  //     const numberPages = Math.ceil(this.costsList.length / this.perPage)
  //     for (let i = 1; i <= numberPages; i++) {
  //       this.pages.push(i)
  //     }
  //   },
  //   paginate (posts) {
  //     const page = this.page
  //     const perPage = this.perPage
  //     const to = page * perPage
  //     const from = to - perPage
  //     return posts.slice(from, to)
  //   }
  // },
  // computed: {
  //   posts () {
  //     return this.setPages()
  //   },
  //   abb () {
  //     return this.paginate(this.costsList)
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .parentCosts {
    width: 600px;
  }
  .itemCost {
    color: #7f7979;
    font-size: 22px;
    padding: 10px;
    font-weight: 600;
    display: flex;
    border-top: 1px solid #7f7979;
  }
  .itemCostHeader {
    border-top: none;
    color: black;
    text-align: start;
  }
  .selectionHeader {
    text-align: start;
  }
  .tdItem {
    width: 150px;
  }
  .indexCost {
    width: 50px;
  }
  .pagination {
    width: 600px;
    margin-top: 50px;
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
  @media (max-width: 1024px) {
    .parentCosts {
      width: inherit;
    }
    .itemCost {
      font-size: 18px;
    }
  }
  @media (min-width: 320px) and (max-width: 667px) {
    .parentCosts {
    width: 100%;
    display: grid;
    justify-content: center;
    }
    .itemCost {
      font-size: 14px;
      padding: 10px;
    }
    .tdItem {
    width: 90px;
    }
    .indexCost {
    width: 30px;
    }
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
