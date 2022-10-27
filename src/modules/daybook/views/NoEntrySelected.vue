<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">
        No hay ninguna entrada seleccionada
    </h1>
  </div>

  <Fab/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Fab: defineAsyncComponent(()=>import('../components/Fab.vue'))   
    }
}
</script>

<style scoped lang="scss">
    div{
        height: 100%;
    }
</style>