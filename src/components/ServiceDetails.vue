<template>
  <div class="service-status ">
   <div class="contact-status" >
     <span>Contactat: </span>
     <label>
       <input type="radio"
              v-model="details.contacted"
              name="status"
              value="Contactat">
       Contactat
     </label>
     <label>
       <input type="radio"
              name="status"
              v-model="details.contacted"
              value="Nu e interesat">
       Nu e interesat
     </label>
     <label>
       <input type="radio"
              name="status"
              v-model="details.contacted"
              value="Nu a raspuns">
       Nu a raspuns
     </label>
   </div>
    <div class="data-status">
      <label >Data:</label>
      <input type="date" v-model="details.date">
    </div>
    <button @click="handleClose"
            id="exit-button">
      &#215;
    </button>
    <textarea placeholder="Comentariu"
              v-model="details.comment">
    </textarea>
    <div class="status-buttons">
      <button @click="handleUpdateDetails" >OK</button>
      <button @click="handleClose">Cancel</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "ServiceDetails",
  props: {
    serviceID: {
      type: String,
    }
  },
  data() {
    return{
      open: true,
      details: {
        contacted: '',
        date: null,
        comment: ''
      }
    }
  },
  methods: {
    handleUpdateDetails() {
      this.$store.dispatch('updateData', {
        details: this.details,
        id: this.serviceID}
      )
      this.handleClose()
    },
    handleClose() {
      this.$emit('handleClose')
    },
  }
}
</script>

<style lang="scss">
.service-status{
  background-color: white;
  width: 393px;
  height: 220px;
  margin: 5% 30%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 25px;
  box-shadow: 0 5px 10px rgb(50 50 50 / 25%);
  .contact-status{
    display: flex;
    flex-direction: column;
    justify-content: center;
    span{
      margin-bottom: 8px;
    }
    input{
      margin-left: 50px;
    }
  }
  .data-status{
    label{
      margin-right: 8px;
    }
    input{
      color: inherit;
    }
  }
  #exit-button{
    position: absolute;
    top: 3px;
    right: 10px;
    border: none;
    background-color: inherit;
    &:hover{
      transform: scale(1);
    }
  }
  textarea{
    resize: none;
    padding: 5px 10px;
    width: 100%;
    margin: 15px 0;
  }
  .status-buttons{
    margin-left: auto;
    button{
      margin-left: 15px;
      width: 70px;
      padding: 3px 5px;
      border: 1px solid;
      border-radius: 5px;

    }
    :first-child{
      border-color: #55e0a3;
      background-color: #55e0a3;
    }
    :last-child{
      border-color: #ffaaa5;
      background-color: #ffaaa5;

    }
  }
}

</style>