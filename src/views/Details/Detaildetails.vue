<template>
  <div class="card text-center mt-4" v-for="f in detail" :key="f.id">
  <div class="card-header">Detail Produk</div>
  <div class="card-body">
    <h5 class="card-title">{{f.produk}}</h5>
    <p class="card-text">
        {{f.status}}
        </p>
  </div>
  <div class="card-footer">
    <router-link
     class="btn btn-success" 
    :to="{name:'editdetails', params: { id: f.id} }"
          >EDIT</router-link
          >
        <button @click.prevent="detailDelete(f.id)" class="btn btn-danger">
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
      let detail = ref([]);
    const router = useRouter();

    const route = useRoute();

    onMounted(()=>(
      axios.get(`http://127.0.0.1:8000/api/details/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        detail.value = response.data.data;
      })
      .catch(error => {
        console.log(error.response.data);
      })
    ));

    function detailDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/details/${id}`)
      .then(()=>{
          router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

   
    return {
      detail,
      router,
      detailDelete,
      route,
    };
  },
};
</script>

<style>

</style>