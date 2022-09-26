<template>
 <div class="filer-container">
   <form>
     <label v-for="item in data" :key="item" >
       <input
           type="checkbox"
           name="data"
           :id="item"
           @click="takeData(item)">
       {{ item }}
     </label><br>
     <button type="button"
             @click="handleSendFilter"
             id="filter-button">
       Filtreaza
     </button>
   </form>
 </div>
</template>

<script>
  export default {
    name: "ServiceFiler",
    props: {
      data: Array
    },
    data() {
      return{
        selectedFilter: []
      }
    },
    methods: {
      takeData(value) {
        const checkbox = document.getElementById(value)
        if(checkbox.checked) {
          this.selectedFilter.push(value)
        }
        else {
          this.selectedFilter.splice(this.selectedFilter.indexOf(value),1)
        }
        this.$emit('handleSelectCheckBox', this.selectedFilter)
      },
      handleSendFilter(){
        this.$emit('handleSendFilter')
      },
    }
  }
</script>

<style lang="scss">
@import '../styles/base.scss';
 .filer-container{
   background-color: white;
   background-size: cover;
   margin-top: 13px;
   width: 100%;
   padding: 15px;
   box-shadow: 0 5px 10px rgb(50 50 50 / 25%);
   position: relative;
   form{
     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
     max-height: 400px;
     label{
       margin-right: 20px;
       &:first-child{
         padding-left: 0;
       }
     }
     input{
       border-radius: 50px;
       margin-right: 5px;
       margin-bottom: 15px;
     }
     button{
       background-color: #0095ff;
       border: 1px solid transparent;
       border-radius: 3px;
       box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
       color: #fff;
       cursor: pointer;
       display: inline;
       font-size: 13px;
       margin: 0;
       width: 70px;
       height: 28px;
       position: absolute;
       top: 380px;
       right: 95px;
       &:hover,
       &:focus {
         background-color: #07c;
       }
       &:focus {
         box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
       }
       &:active {
         background-color: #0064bd;
         box-shadow: none;
       }
     }
   }
 }
</style>