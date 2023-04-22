<template>
    <div class="channel-tab">
        <div class="channel-item" v-for="(item, index) in channelList"  tabindex="1" @click="activeChange(index)" :class="{'channel-item-active': bottomActive[index]}">
            {{ item }}
        </div>
    </div>

</template>

<script setup lang="ts">
import {  reactive } from 'vue'
    const bottomActive: boolean[] = reactive([true,false,false,false,false,false])
    const activeChange = (index: number) => {
        for(let i=0;i<bottomActive.length;i++) {
            if(i!==index) bottomActive[i] = false
            else bottomActive[i] = true
        }
    }

    const channelList: string[] = ['搞笑', '游戏', '穿搭', 'Vlog', '科技数码', '运动健康']

</script>

<style lang="scss" scoped>
.channel-tab {
    display: flex;
    overflow-x:auto;
    padding: 0.5rem;
    white-space: nowrap; 
   list-style: none;

   &::-webkit-scrollbar {
        display: none;
    }

    .channel-item {
        text-align: center;
        padding: 0.2rem 1rem;
        font-size: 1rem;
        color: gray;

    }
    .channel-item-active{
        color: black;
        
    }
}
</style>