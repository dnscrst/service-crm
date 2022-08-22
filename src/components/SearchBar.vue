<template>
  <div class="search-bar">
    <input v-model="search" type="text" placeholder="Cauta dupa nume sau telefon">
    <button @click="handleResetSearch" type="submit">X</button>
    <button @click="handleSearch" id="search-button" type="submit">
      <img src="../assets/search-img.png" alt="search-img">
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

<style scoped>

</style>