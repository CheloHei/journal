<template>
  <div 
  
  class="mb-3 pointer p-2 entry-container"
  @click="$router.push({name:'entry',params:{id:10}
  })"
  >

    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
                <span mx-2 fw-light>2022, miercoles</span>
    </div>
    <div class="entry-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ex, voluptatem saepe animi doloribus soluta accusamus atque, corporis sunt laborum quae aliquam officia? Distinctio reiciendis quidem ullam, ab molestiae corrupti.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.entry-container{
    border-bottom: 1px solid rgb(82, 233, 77);
    transition: 0.2 all ease-in ;
    &:hover{
        background-color: rgb(82, 233, 77, 0.2);
.entry-description{
    font-size:12px;
}
    }
}

</style>