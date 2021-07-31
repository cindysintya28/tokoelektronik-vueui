<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">add order</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">nama_tujuan</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="order.nama_tujuan"
          />
          <div class="alert alert-ganger" v-if="validation.nama_tujuan">
            {{ validation.nama_tujuan[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">alamat_tujuan</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="order.alamat_tujuan"
          />
          <div class="alert alert-ganger" v-if="validation.alamat_tujuan">
            {{ validation.alamat_tujuan[0] }}
          </div>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">status</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Masukan status"
            v-model="order.status"
          />
          <div class="alert alert-danger" v-if="validation.status">
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
    const order = reactive({
      nama_tujuan: "",
      alamat_tujuan: "",
     status: "",
    });

    const validation = ref([]);

    const router = useRouter();

onMounted(() =>{
axios
        .get("http://127.0.0.1:8000/api/orders")
        .then((response) => {
          orders.value = response.data.data;
          console.log(orders.value);
        })
        .catch((error) => {
        console.log(error);
        });
  
});

    function store() {
      let nama_tujuan = order.nama_tujuan;
      let alamat_tujuan = order.alamat_tujuan;
      let status = order.status;
     
      axios
        .post('http://127.0.0.1:8000/api/orders', {
          nama_tujuan: nama_tujuan,
         alamat_tujuan:alamat_tujuan,
          status: status,
         
        })
        .then(() => {
          router.push({
            name: "Orders",
          });
        })
        .catch((error) => {
         validation.value = error.response.data;
        });
    }
    return {
      order,
      validation,
      router,
      store,
    };
  },
};
</script>
