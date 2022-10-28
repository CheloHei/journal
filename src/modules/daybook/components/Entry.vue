<template>
  <div 
  
  class="mb-3 pointer p-2 entry-container"
  @click="$router.push({name:'entry',params:{id:entry.id}
  })"
  >

    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">{{day}}</span>
            <span class="mx-1 fs-5">{{month}}</span>
                <span mx-2 fw-light>{{yearDay}}</span>
    </div>
    <div class="entry-description">
        {{shortText}}
    </div>
  </div>
</template>

<script>

import getDateMonthYear from '../helpers/getDateMonthYear.js'

export default {
    props:{
        entry:{
            type:Object,
            required:true
        }
    },
    computed:{
        shortText(){
            return (this.entry.text.length > 130) ? this.entry.text.substring(0,130) + '...' : this.entry.text
        },
        day(){
            const {day} = getDateMonthYear(this.entry.date)
            return day
        },
        month(){
             const {month} = getDateMonthYear(this.entry.date)
            return month
        },
        yearDay(){
             const {yearDay} = getDateMonthYear(this.entry.date)
            return yearDay
        },
        }
}
</script>

<style scoped lang="scss">
.entry-container{
    border-bottom: 1px solid rgb(82, 233, 77);
    transition: 0.2 all ease-in ;
    &:hover{
        background-color: rgb(82, 233, 77, 0.2);
    }
.entry-description{
    font-size:12px;
}
}

</style>