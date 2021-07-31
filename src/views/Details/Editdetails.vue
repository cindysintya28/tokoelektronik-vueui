<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">EDIT detail</h5>
      <form class="row g-3" @submit.prevent="update">
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
    const detail = reactive({
      produk: "",
      status: "",
    });

    
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(() => {
      axios
      .get(`http://127.0.0.1:8000/api/details/${route.params.id}/edit`)
      .then((response) => {
        console.log(response.data.data.detail);

        detail.produk = response.data.data.produk;
        detail.status = response.data.data.status;
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
      let produk = detail.produk;
      let status = detail.status;

      axios
      .put(`http://127.0.0.1:8000/api/details/${route.params.id}`, {
          produk: produk,
          status: status,
          
        })
        .then(() => {
          router.push({
            name: 'Details',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
     detail,
      validation,
      router,
      update,
      route,
     
    };
  },
};
</script>
