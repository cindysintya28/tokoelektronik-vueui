<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">EDIT order</h5>
      <form class="row g-3" @submit.prevent="update">
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
    const order = reactive({
     nama_tujuan: "",
      alamat_tujuan: "",
      status: "",
     
    });

    let orders = ref([]);
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute();

    onMounted(() => {
      axios
      .get(`http://127.0.0.1:8000/api/orders/${route.params.id}/edit`)
      .then((response) => {
        console.log(response.data.data.nama_tujuan);

        order.nama_tujuan = response.data.data.nama_tujuan;
        order.alamat_tujuan = response.data.data.alamat_tujuan;
        order.status = response.data.data.status;
      
      })
      .catch((error) => {
        console.log(error.response.data);
      });

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

    function update() {
      let nama_tujuan = order.nama_tujuan;
      let alamat_tujuan = order.alamat_tujuan;
      let status = order.status;
    
      axios
      .put(`http://127.0.0.1:8000/api/orders/${route.params.id}`, {
          nama_tujuan: nama_tujuan,
         alamat_tujuan:alamat_tujuan,
         status:status,
         
        })
        .then(() => {
          router.push({
            name: 'Orders',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
     order,
      validation,
      router,
      update,
      route,
      orders,
    };
  },
};
</script>
