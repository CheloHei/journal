<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2" >
        <input type="text"
        class="form-control"
        placeholder="Buscar entradas"
        >
    </div>
    <div class="entry-scrollarea">
        <Entry v-for="item in 100" :key="item"/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        Entry:defineAsyncComponent(()=>import('./Entry.vue'))
    }
}
</script>

<style scoped lang="scss">
    .entry-list-container{
        border-right: 1px solid rgb(82, 233, 77);
        height: calc(100vh - 56px);
    }
    .entry-scrollarea{
        overflow: scroll;
        height: calc(100vh - 120px);
    }
</style>