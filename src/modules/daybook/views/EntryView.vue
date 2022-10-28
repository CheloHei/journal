<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <span class="text-success fs-3 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-3">{{ month }}</span>
      <span class="mx-2 fs-3 fw-light">{{ yearDay }}</span>
    </div>

    <div>
      <input type="file" @change="onFileChange" ref="imageSelector" v-show="false" />
      <button class="btn btn-primary" @click="onDeleteEntry" v-if="entry.id">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary"
      @click="onSelectImage"
      >
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>

    <hr />

    <div class="d-flex flex-column px-3 h-75">
      <textarea placeholder="¿Que pasa hoy?" v-model="entry.text"></textarea>
    </div>

    <Fab 
        icon="fa fa-save"
        @on:click="saveEntry" 
    />

    <img 
    v-if="entry.picture && !localImage"
    :src="entry.picture" alt="" class="img-thumbnail" />
    <img 
    v-if="localImage"
    :src="localImage" alt="" class="img-thumbnail" />


  </template>
</template>


<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";
import getDateMonthYear from "../helpers/getDateMonthYear.js";
import uploadImage from "../helpers/uploadImage.js";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  data() {
    return {
      entry: null,
      localImage: null,
      fiel:null
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDateMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDateMonthYear(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDateMonthYear(this.entry.date);
      return yearDay;
    },
  },
  methods: {
    ...mapActions("journal", ["updateEntry","createEntry","deleteEntry"]),
    loadEntry() {
        let entry;
        if (this.id === 'new') {
            entry = {
                id: '',
                date: new Date().getTime(),
                text: "",
                picture: "",
            }
        } else {
            entry = this.getEntryById(this.id);
            if (!entry) return this.$router.push({ name: "no-entry" });
        }
      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "Espere por favor...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      Swal.showLoading()

      const picture = await uploadImage(this.file)

      this.entry.picture = picture

      if(this.entry.id){
          await this.updateEntry(this.entry);
        }else{
            console.log('post entrada')
            const id =  await this.createEntry(this.entry);
            this.$router.push({name:'entry',params:{id}})
        }
        
        this.file = null

        Swal.fire({
            title: "Guardado",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });

    },
    async onDeleteEntry() {
      Swal.fire({
        title: "¿Estas seguro?",
        text: "No podras revertir esta accion",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borrar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await this.deleteEntry(this.entry.id);
          Swal.fire("Borrado", "La entrada ha sido borrada", "success");
          this.$router.push({ name: "no-entry" });
        }
      });
    },
    onFileChange(e){
        const file = e.target.files[0];
        if(!file){
         this.localImage = null; 
         this.file = null; 
          return;

        }
        this.file = file;
        const fr = new FileReader();
        fr.onload = () => this.localImage = fr.result;
        fr.readAsDataURL(file);       
    },
    onSelectImage(){
        this.$refs.imageSelector.click();
    }
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%px;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
</style>