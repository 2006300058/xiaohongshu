<template>
    <div>
        <div class="tab">
            <div  class="text" v-for="(item ,index) in headTabs" :key="index"  tabindex="1" @click="activeChange(index)" :class="{'text-active':bottomActive[index]}">
                <div >{{ item }}</div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import {  reactive } from 'vue'
    const bottomActive: boolean[] = reactive([true,false,false])
    const activeChange = (index: number) => {
        for(let i=0;i<bottomActive.length;i++) {
            if(i!==index) bottomActive[i] = false
            else bottomActive[i] = true
        }
}

    const headTabs: string [] = ['关注','发现','深圳'];
   
    
</script>

<style lang="scss" scoped>
.tab {
    height: 2rem;
    line-height: 2rem;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 0.5rem;
    .text {
        // justify-content: center;
        // align-items: center;
        font-size: 1.3rem;
        color:  gray;
        padding:  0.3rem 1.2rem;
        
    }
  
    .text-active {
        color: black;
        border-bottom: 0.1rem solid red;
    }
}
</style>