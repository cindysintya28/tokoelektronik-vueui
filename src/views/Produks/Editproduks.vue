<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">EDIT produk</h5>
      <form class="row g-3" @submit.prevent="update">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">NAMA</label>
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
          <label for="inputPassword4" class="form-label">NO TLP</label>
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
          <div class="alert alert-ganger" v-if="validation.harga">
            {{ validation.harga[0] }}
          </div>
        </div>
 <div class="col-6">
           <label for="inputAddress" class="form-label">detail</label>
        <select 
        class="form-select" 
        aria-label="Default select example"
         v-model="produk.details_id"
         >
  <option v-for="detail in details" :key="detail.id" :value="detail.id">
    {{ detail.name }}
    </option>
</select>
</div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">EDIT</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const produk = reactive({
      nama_produk: "",
      type: "",
      harga: "",
      details_id: "",
    });

    let details = ref([]);
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(() => {
      axios
      .get(`http://127.0.0.1:8000/api/produks/${route.params.id}/edit`)
      .then((response) => {
        console.log(response.data.data.nama_produk);

        produk.nama_produk = response.data.data.nama_produk;
        produk.type = response.data.data.type;
        produk.harga = response.data.data.harga;
        produk.details_id = response.data.data.details_id;
      })
      .catch((error) => {
        console.log(error.response.data);
      });

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

    function update() {
      let nama_produk = produk.nama_produk;
      let type = produk.type;
      let harga = produk.harga;
      let details_id = produk.details_id;

      axios
      .put(`http://127.0.0.1:8000/api/produks/${route.params.id}`, {
          nama_produk: nama_produk,
          type: type,
          harga: harga,
          details_id: details_id,
        })
        .then(() => {
          router.push({
            name: 'Produks',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
     produk,
      validation,
      router,
      update,
      route,
      details,
    };
  },
};
</script>
