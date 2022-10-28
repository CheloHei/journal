<template>
<template
v-if="entry"
>
  <div 
  
  class="entry-title d-flex justify-content-between p-2">
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

<div 
    class="d-flex flex-column px-3 h-75">
    <textarea 
    placeholder="¿Que pasa hoy?"
    v-model="entry.text"
    ></textarea>
</div>

<Fab icon="fa fa-save"
    @on:click="saveEntry"
/>

<img src="" alt="" class="img-thumbnail">
</template>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import {mapGetters} from 'vuex'
export default {
    props:{
        id:{
            type:String,
            required:true
        }
    },
    components: {
        Fab: defineAsyncComponent(()=>import('../components/Fab.vue'))
    },
    data() {
        return {
            entry:null
        }
    },
    computed:{
        ...mapGetters('journal',['getEntryById'])
    },
    methods:{
        loadEntry(){
            const entry = this.getEntryById(this.id)
            if (!entry) return this.$router.push({name:'no-entry'})
            this.entry = entry
        },
        async saveEntry(){
            console.log('saveEntry')
        }
    },
    created(){
        this.loadEntry()
    },
    watch:{
        id(){
            this.loadEntry()
        }
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