<template>
  <table class="data-table">
    <thead id="table-head">
    <tr>
      <th class="first-column">Nume</th>
      <th>Telefon</th>
      <th class="city-filter">Oraș, județ
          <button @click="handleFilter('onCityFilter')">
            <img alt="up-down-arrow"
                 src='../assets/search-arrow.png'>
          </button>
          <ServiceFiler v-if="onCityFilter"
                        :data="city"
                        @handleSelectCheckBox="handleSelectCheckbox"
                        @handleSendFilter="handleSendFilter"/>
          <button @click="handleResetFilter"
                  id="reset-filer">
            RESET
          </button>
      </th>
      <th class="last-column">Status</th>
    </tr>
    </thead>
    <ServiceDetails v-if="onStatus"
                    :serviceID="serviceId"
                    @handleClose="onStatus=false"/>
    <tbody>
    <tr v-for="service in services.results" key="service" >
      <td class="first-column">{{ service.name }}</td>
      <td>{{ service.phone }}</td>
      <td>{{ service.address }}</td>
      <td  @click="open('onStatus',service._id)"
           id="status-column"
           class="last-column">
        {{service.details?.contacted}}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import ServiceFiler from "@/components/ServiceFiler";
  import ServiceDetails from "@/components/ServiceDetails";
  export default {
    name: "ServiceTable",
    components: {ServiceDetails, ServiceFiler},
    data() {
      return{
        onCityFilter: false,
        onStatus: false,
        selected: [],
        serviceId: ''
      }
    },
    props: {
      services:{
        type: Object,
        require: true
      },
      city: Array,
    },
    methods: {
      open(key, id){
        if(id) this.serviceId = id
        this[key] = true;
      },
      handleFilter(key) {
        this[key] = !this[key];
        },
      handleSelectCheckbox(value) {
        this.selected = value
       },
      handleSendFilter(){
        this.onCityFilter = false
        this.$emit('handleCityFilter', this.selected)
      },
      handleResetFilter(){
        this.selected={}
        this.$emit('handleCityFilter', this.selected)
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/base.scss';
  @import '../styles/vars.scss';
  table {
    width: 100%;
    margin-top: 30px;
    text-align: left;
    color: $medium-grey;
    font-size: 12px;

    thead {
      background-color: white;
      th {
        border: white;
        position: relative;
        padding-left: 5px;
        button, img {
          display: inline-block;
        }
        .filer-container {
          position: absolute;
          z-index: 99;
        }
        button {
          border: none;
          background-color: white;
          img {
            width: 10px;
          }
        }
      }
      .city-filter{
        width: 520px;
        #reset-filer{
          color: $light-grey;
          font-size: 10px;
          margin-left: 390px ;
          &:hover{
          color: $medium-grey;
          }
        }
      }
    }

    tr {
      height: 45px;
      border: none;
      box-shadow: 0 2px 5px rgb(50 50 50 / 25%);
      td {
        font-weight: 600;
        padding-left: 5px;
      }
    }

    .last-column {
      padding-right: 30px;
    }
    .first-column {
      padding-left: 30px;
    }
    th {
      font-weight: 300;
    }

    #status-column {
      color: #04AA6D;
      cursor: pointer;

      button {
        width: 100%;
        height: 30px;
        border: none;
        background-color: $light-grey;
      }
    }
    .service-status {
      position: absolute;
      z-index: 99;
    }
  }

</style>