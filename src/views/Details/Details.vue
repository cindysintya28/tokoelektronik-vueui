<template>
  <div class="Home">
    <Slider />
    <hr class="my-3">
      <router-link class="btn btn-primary" to="/createdetails"
      >ADD detail</router-link
      >

      <Carddetails :details="details" />
      
    <table class="table">
  <thead>
    <tr>
      <th scope="col">produk</th>
      <th scope="col">status</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(detail, index) in details" :key="index">
      <td>{{ detail.produk }}</td>
      <td>{{ detail.status }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editdetails', params:
        {id:detail.id}}"
          >EDIT</router-link>
        <button @click.prevent="detailDelete(detail.id)" class="btn 
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
import Carddetails from "@/components/Carddetails.vue";
import { onMounted, ref } from 'vue';

export default {
  name: "Details",
  components: {
    Slider,
Carddetails,
  },
  setup(){
    let details = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/details')
      .then(response => {
        details.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })

    function detailDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/details/${id}`)
      .then(()=>{
        let z = this.details.map(details => details.id).indexOf(id);
        this.details.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }

      return {
      details,
      detailDelete
    }
  }
};
</script>
