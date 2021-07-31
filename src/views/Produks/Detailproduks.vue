<template>
  <div class="card text-center mt-4" v-for="f in produk" :key="f.id">
  <div class="card-header">detail produk</div>
  <div class="card-body">
    <h5 class="card-title">{{f.nama_produk}}</h5>
    <p class="card-text">
        {{f.type}}
        </p>
  <p class="card-text">
        {{ f.harga }}
        </p>
  <p class="card-text">
        {{ f.details.name }}
        </p>
  </div>
  <div class="card-footer">
    <router-link
     class="btn btn-success" 
    :to="{name:'editproduks', params: { id: f.id} }"
          >EDIT</router-link
          >
        <button @click.prevent="produkDelete(f.id)" class="btn btn-danger">
          DELETE
          </button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
      let produk = ref([]);
    const router = useRouter();

    const route = useRoute();

    onMounted(()=>(
      axios.get(`http://127.0.0.1:8000/api/produks/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        produk.value = response.data.data;
      })
      .catch(error => {
        console.log(error.response.data);
      })
    ));

    function produkDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/produks/${id}`)
      .then(()=>{
          router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

   
    return {
      produk,
      router,
      produkDelete,
      route,
    };
  },
};
</script>

<style>

</style>