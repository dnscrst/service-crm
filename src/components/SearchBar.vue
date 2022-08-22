<template>
  <div class="search-bar">
    <input v-model="search"
           type="text"
           placeholder="Cauta dupa nume sau telefon">
    <button
          @click="handleResetSearch"
          id="reset-button"
          type="submit">X</button>
    <button
          @click="handleSearch"
          id="search-button"
          type="submit">
           <img src="../assets/search-img.png"
              alt="search-img">
    </button>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    data() {
      return {
        search: null
      }
    },
    methods: {
      handleSearch() {
        this.$emit('handle-search', this.search)
      },
      handleResetSearch() {
        this.$emit('handle-search', '')
        this.search = null
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/base.scss';
  @import '../styles/vars.scss';
  .search-bar{
    input, #search-button{
      height: 40px;
      float: left;
      box-shadow:0 2px 5px rgb(50 50 50 / 25%);
    }
    #reset-button {
      border: none;
      height: auto;
      background-color: white;
      position: absolute;
      top: 42px;
      right: 195px;
    }
    input{
      width: 1250px;
      height: 38px;
      border: 1px solid $turquoise;
      padding: 0 15px;
      position: relative;
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
</style>