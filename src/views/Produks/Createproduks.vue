<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">add produk</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">nama_produk</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="produk.nama_produk"
          />
          <div class="alert alert-ganger" v-if="validation.nama_produk">
            {{ validation.nama_produk[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">type</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="produk.type"
          />
          <div class="alert alert-ganger" v-if="validation.type">
            {{ validation.type[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">harga</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan harga"
            v-model="produk.harga"
          />
          <div class="alert alert-danger" v-if="validation.harga">
            {{ validation.harga[0] }}
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
    const produk = reactive({
      nama_produk: "",
      type: "",
      harga: "",
   
    });

    let produks = ref([]);
    const validation = ref([]);

    const router = useRouter();

onMounted(() =>{
axios
        .get("http://127.0.0.1:8000/api/produks")
        .then((response) => {
          produks.value = response.data.data;
          console.log(produks.value);
        })
        .catch((error) => {
        console.log(error);
        });
  
});

    function store() {
      let nama_produk = produk.nama_produk;
      let type = produk.type;
      let harga = produk.harga;

      axios
        .post('http://127.0.0.1:8000/api/produks', {
          nama_produk: nama_produk,
          type: type,
          harga: harga
          
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
         validation.value = error.response.data;
        });
    }
    return {
      produk,
      validation,
      router,
      store,
      produks,
    };
  },
};
</script>
