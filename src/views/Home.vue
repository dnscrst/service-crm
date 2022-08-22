<template>
  <div class="home-page">
    <header class="header">
      <SearchBar @handle-search="handleSearch"/>
      <button id="logout-button" type="button">
        <img src="../assets/logout-img.png" alt="logout-img">
      </button>
    </header>
    <ServiceTable :services="getData"/>
    <span v-if="getLoading">Se incarca...</span>
    <div class="change-page-buttons">
      <button :disabled="this.service.page === 1"
              @click="handlePagination('first')">&lt&lt</button>
      <button :disabled="this.service.page === 1"
              @click="handlePagination('back')"> &lt</button>
      <span>{{service.page}}</span>
      <button :disabled="this.service.page === this.getData.pages"
              @click="handlePagination('next')">&gt</button>
      <button :disabled="this.service.page === this.getData.pages"
              @click="handlePagination('last')">&gt&gt</button>
    </div>
  </div>
</template>

<script>
import ServiceTable from "@/components/ServiceTable";
import SearchBar from "@/components/SearchBar";
export default {
  name: "Home",
  components: {SearchBar, ServiceTable},
  data () {
    return {
      service: {
        name: "",
        phone: null,
        city: "",
        activity: "",
        status: "",
        page: 1
      }
    }
  },
  computed: {
     getData () {
       return this.$store.state.data.service
     },
    getLoading () {
       return this.$store.state.data.loading
    }
  },
  created() {
    const query = this.$route.query
    this.service.page = +this.$route.query.page
    this.$store.dispatch("getData", query)
  },
  methods: {

    handlePagination(dir) {
      switch (dir) {
        case 'next':
          this.service.page +=1
          break

        case 'back':
          this.service.page -=1
          break

        case 'last':
          this.service.page = this.getData.pages
          break

        case 'first':
          this.service.page = 1
          break
      }
      const currentQuery = this.$route.query
      const query = {...currentQuery, page: this.service.page}
      this.$router.push({ path: '/', query: query})
      this.$store.dispatch("getData", query)

    },
    handleSearch(value) {
      if (!value) {
        this.service.name = ''
        this.service.phone= null
      }
      else if(isNaN(value)) {
        this.service.name = value
        this.service.phone= null
      }
      else {
        this.service.phone= value
        this.service.name = ''
      }
      const query = {...this.service, page: 1}
      for (const [key, value] of Object.entries(query)) {
        if (!value) delete query[key]
      }
      this.$router.push({path: '/', query})
      this.service.page = 1
      this.$store.dispatch('getData', this.service)

    }
  }
}
// @ is an alias to /src

</script>

<style lang="scss" >
@import '../styles/base.scss';
@import '../styles/vars.scss';
.home-page{
  background-color: $light-grey;
  background-size: cover;
  //height: 100%;
  padding: 30px 70px;
  margin-bottom: auto;
  background-repeat: no-repeat;

  header{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .search-bar{
      input, button{
        height: 40px;
        float: left;
        box-shadow:0 2px 5px rgb(50 50 50 / 25%);

      }
      input{
        width: 1250px;
        height: 38px;
        border: 1px solid $turquoise;
        padding: 0 15px;
      }
      #search-button{
        width: 50px;
        background-color: $dark-green;
        border: 2px solid $dark-green;
        border-radius: 0 5px 5px 0;
        height: 40px;
        img{
          width: 25px;
        }
      }
    }
    #logout-button{
      border: none;
      background-color: $light-grey;
      height: 40px;
      padding: 8px 5px;

      img{
        width: 25px;
      }
    }
  }

  .change-page-buttons{
    margin-top: 20px;
    margin-bottom: auto;
    text-align: center;
    font-size: 16px;
    button{
      border: 0;
      margin:0 3px;
    }
    span{
      margin: 0 5px;
    }
  }
}


</style>
