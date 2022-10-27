<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <span class="text-success fs-3 fw-bold">15</span>
    <span class="mx-1 fs-3">Julio</span>
    <span class="mx-2 fs-3 fw-light">2021, jueves</span>
  </div>

  <div>
    <button class="btn btn-primary">
        Borrar
        <i class="fa fa-trash-alt"></i>
    </button>
    <button class="btn btn-primary">
        Subir foto 
        <i class="fa fa-upload"></i>
    </button>
  </div>

<hr/>

<div class="d-flex flex-column px-3 h-75">
    <textarea 
    placeholder="¿Que pasa hoy?"
    ></textarea>
</div>

<Fab icon="fa fa-save"/>

<img src="" alt="" class="img-thumbnail">

</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Fab: defineAsyncComponent(()=>import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
    textarea{
        font-size:20px;
        border:none;
        height:100%px;

        &:focus {
            outline:none;
        }

    }

    img {
        width:200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
    }
</style>