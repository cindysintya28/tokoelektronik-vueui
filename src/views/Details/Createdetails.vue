<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">add detail</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">produk</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="detail.produk"
          />
          <div class="alert alert-ganger" v-if="validation.produk">
            {{ validation.produk[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">status</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="detail.status"
          />
          <div class="alert alert-ganger" v-if="validation.status">
            {{ validation.status[0] }}
          </div>
        </div>
    
        <div class="col-12">
          <button type="submit" class="btn btn-primary">add</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const detail = reactive({
      produk: "",
      type: "",
      harga: "",
   
    });

    let details = ref([]);
    const validation = ref([]);

    const router = useRouter();

onMounted(() =>{
axios
        .get("http://127.0.0.1:8000/api/details")
        .then((response) => {
          details.value = response.data.data;
          console.log(details.value);
        })
        .catch((error) => {
        console.log(error);
        });
  
});

    function store() {
      let produk = detail.produk;
      let type = detail.type;
      let harga = detail.harga;
      let details_id = detail.details_id;
      axios
        .post('http://127.0.0.1:8000/api/details', {
          produk: produk,
          type: type,
          harga: harga,
          details_id: details_id
        })
        .then(() => {
          router.push({
            name: "Details",
          });
        })
        .catch((error) => {
         validation.value = error.response.data;
        });
    }
    return {
      detail,
      validation,
      router,
      store,
      details,
    };
  },
};
</script>
