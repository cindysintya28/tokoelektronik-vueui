<template>
  <div class="Home">
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/Createorders"
      >ADD order</router-link
      >

      <Cardorders :orders="orders" />
      
    <table class="table">
  <thead>
    <tr>
      <th scope="col">nama_tujuan</th>
      <th scope="col">alamat_tujuan</th>
      <th scope="col">status</th>
     
    </tr>
  </thead>
  <tbody>
    <tr v-for="(order, index) in orders" :key="index">
      <td>{{ order.nama_order }}</td>
      <td>{{ order.alamat_tujuan }}</td>
      <td>{{ order.status }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editorders', params:
        {id:order.id}}"
          >EDIT</router-link>
        <button @click.prevent="orderDelete(order.id)" class="btn 
        btn-danger">DELETE</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from "@/components/Slider.vue";
import Cardorders from "@/components/Cardorders.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "Orders",
  components: {
    Slider,
Cardorders,
  },
  setup(){
    let orders = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/orders')
      .then(response => {
        orders.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function orderDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/orders/${id}`)
      .then(()=>{
        let z = this.orders.map(orders => orders.id).indexOf(id);
        this.orders.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      orders,
      orderDelete
    }
  }
};
</script>
