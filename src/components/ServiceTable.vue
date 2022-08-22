<template>
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
    <tr v-for="service in services.results" key="service" >
      <td>{{ service.name }}</td>
      <td>{{ service.phone }}</td>
      <td>{{ service.address }}</td>
      <td>{{ service.details.status }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "ServiceTable",
    props: {
      services:{
        type: Object,
        require: true
      }
    }
  }
</script>

<style lang="scss">
  @import '../styles/base.scss';
  @import '../styles/vars.scss';
  table{
    width: 100%;
    margin-top: 30px;
    text-align: left;
    color: $medium-grey;
    font-size: 12px;
    thead{
      background-color: white;
    }
    tr{
      height: 45px;
      border-bottom: 1px solid $medium-grey;
      box-shadow:0 2px 5px rgb(50 50 50 / 25%);
      td{
        font-weight: 600;
      }
      th{
        font-weight: 300;
      }
      :last-child{
        padding-right: 30px;
      }
      :first-child{
        padding-left: 30px;
      }
      :nth-child(3){
        max-width: 520px;
      }
    }
  }

</style>