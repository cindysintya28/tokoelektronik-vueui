<template>
<div class="row">
  <div 
  class="col-lg-4 mt-3"
   v-for="(produk, index) in produks"
    :key="index"
    >
    <div class="card">
  <div class="card-header">{{produk.nama_produk}}</div>
  <div class="card-body">
    <h5 class="card-title">{{produk.type}}</h5>
    <p class="card-text">
        {{produk.harga}}
        </p>
        <p class="card-text">
        {{ produk.details.name }}
        </p>
  </div>
  <div class="card-footer text-muted">  
      <router-link
       class="btn btn-primary"
        :to="{name:'Detailproduks', params: {id:produk.id}}"
          >DETAIL</router-link
          >
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["Produks"], 
};
</script>

<style>

</style>