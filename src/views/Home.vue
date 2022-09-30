<template>
  <div class="home-page">
    <header class="header">
      <SearchBar @handle-search="handleSearch"/>
      <button @click="handleLogout"
              id="logout-button"
              type="button">
        <img src="../assets/logout-img.png"
             alt="logout-img">
      </button>
    </header>
    <ServiceTable :services="data"
                  :city="city"
                  @handleCityFilter="handleCityFilter"/>
    <Loading v-if="getLoading"/>
    <div class="change-page-buttons">
      <button :disabled="this.service.page === 1"
              @click="handlePagination('first')">&lt&lt</button>
      <button :disabled="this.service.page === 1"
              @click="handlePagination('back')"> &lt</button>

      <span>{{service.page}}</span>

      <button :disabled="this.service.page === this.data.pages"
              @click="handlePagination('next')">&gt</button>
      <button :disabled="this.service.page === this.data.pages"
              @click="handlePagination('last')">&gt&gt</button>
    </div>
  </div>
</template>

<script>
  import ServiceTable from "@/components/ServiceTable";
  import SearchBar from "@/components/SearchBar";
  import Loading from "@/components/Loading";
  export default {
    name: "Home",
    components: {Loading, SearchBar, ServiceTable},
    data () {
      return {
        service: {
          name: "",
          phone: null,
          address: "",
          activity: "",
          status: "",
          page: 1
        },
        filters: {}
      }
    },
    computed: {
      data () {
         return this.$store.state.data.service
      },
      getLoading () {
         return this.$store.state.data.loading
      },
      city() {
         return this.$store.state.city
      }
    },

    created() {
      const query = this.$route.query
      this.service.page = +this.$route.query.page
      this.$store.dispatch("data", query)
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
            this.service.page = this.data.pages
            break

          case 'first':
            this.service.page = 1
            break
        }
        const currentQuery = this.$route.query
        const query = {...currentQuery, page: this.service.page}
        this.$router.push({ path: '/', query: query})
        this.$store.dispatch("data", query)

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
        this.$store.dispatch('data', this.service)

      },
      handleLogout(){
        this.$store.dispatch('logout')
      },
      handleCityFilter(value) {
          const cities = Object.keys(value).map(key => value[key])
          // const params = `&city=${cities.join(',')}`
          const query = {...this.service, page:1, address: cities.join(',')}
          // const address = query.address
          for (const [key, value] of Object.entries(query)) {
            if (!value) delete query[key]
          }
          this.$router.push({path: '/', query})
          this.service.page = 1
          this.$store.dispatch('data', query)
      }
    },
  }
</script>

<style lang="scss" >
  @import '../styles/base.scss';
  @import '../styles/vars.scss';
  .home-page {
    padding: 30px 70px;
    margin-bottom: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: auto;
      #logout-button {
        border: none;
        background-color: $light-grey;
        height: 40px;
        padding: 8px 5px;
        img {
          width: 25px;
        }
      }
    }
    #loading-message{
      display: flex;
      justify-content: center;
      align-items: center;
      color: $medium-black;
      font-size: large;
      margin: 16% 0;
    }
    .change-page-buttons {
      margin-top: 20px;
      margin-bottom: auto;
      text-align: center;
      font-size: 16px;
      button {
        border: 0;
        margin: 0 3px;
      }
      span {
        margin: 0 5px;
      }
    }
  }
</style>
