<template>
  <div class="home">
    <div class="header">
      <form class="search-bar">
        <input type="text" placeholder="Cauta dupa nume sau telefon">
        <button id="search-button" type="submit">
          <img src="../assets/search-img.png" alt="search-img">
        </button>
      </form>
      <button id="logout-button" type="button">
        <img src="../assets/logout-img.png">
      </button>
      
    </div>
    <table class="data-table">
      <thead id="table-head">
        <tr>
          <th>Nume</th>
          <th>Telefon</th>
          <th>Oraș, județ</th>
          <th>Tip activitate</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="service in getData.results" key="service" >
          <td>{{ service.name }}</td>
          <td>{{ service.phone }}</td>
          <td>{{ service.address }}</td>
<!--        <td>{{ service.activity }}</td>-->
          <td>{{ service.details.status }}</td>
        </tr>
      </tbody>
    </table>
    <div class="change-page-buttons">
      <button @click="handleFirstPage()"> &lt&lt</button>
      <button @click="handleBackPage()"> &lt</button>
      <span> Page number</span>
      <button @click="handleNextPage()">&gt</button>
      <button @click="handleLastPage()">&gt&gt</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data () {
    return {
      service: {
        name: "",
        phone: "",
        city: "",
        activity: "",
        status: "",
        page: ""
      }
    }
  },
  computed: {
     getData () {
       return this.$store.state.data.service
     }
  },
  mounted() {
    this.$store.dispatch("getData")
  },
  methods: {
    handleFirstPage(ev) {
      this.$store.dispatch("getData", this.service)
    },
    handleBackPage(ev) {
      this.$store.dispatch("getData", this.service)
    },
    handleNextPage(ev) {
      this.$store.dispatch("getData", this.service)
    },
    handleLastPage(ev) {
      this.$store.dispatch("getData", this.service)
    }

  }
}
// @ is an alias to /src

</script>

<style lang="scss" >
@import '../styles/base.scss';
@import '../styles/vars.scss';
.home{
  background-color: $light-grey;
  background-size: cover;
  height: 100em;
  padding: 20px 120px;
  .header{
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
        width: 1150px;
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
  table{
    width: 100%;
    margin-top: 30px;
    text-align: left;
    color: $medium-black;
    font-size: 12px;
    thead{
      background-color: white;
    }
    tr{
      height: 45px;
      border-bottom: 1px solid $medium-grey;
      box-shadow:0px 2px 5px rgb(50 50 50 / 25%);
      >td,th{
        padding-left: 50px;
      }
      td{
        font-weight: 600;
      }
      th{
        font-weight: 300;
      }
      :last-child{
        padding-right: 50px;
      }

    }



  }
  .change-page-buttons{
    margin-top: 20px;
    text-align: center;
    button{
      border: 0;
      margin:0 3px;
    }
  }
}


</style>
