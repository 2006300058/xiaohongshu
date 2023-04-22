<template>
    <div class="bottom-bar">
        <div class="bottom-item" @click="activeChange(0)" :class="{'bottom-item-active': bottomActive[0]}">首页</div>
        <div class="bottom-item" @click="activeChange(1)" :class="{'bottom-item-active': bottomActive[1]}">商城</div>
        <div class="bottom-item" id="bottom-btn">
            <svg t="1663143777044" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10248" width="200" height="200"><path d="M916.210526 565.894737H107.789474c-29.642105 0-53.894737-24.252632-53.894737-53.894737s24.252632-53.894737 53.894737-53.894737h808.421052c29.642105 0 53.894737 24.252632 53.894737 53.894737s-24.252632 53.894737-53.894737 53.894737z" fill="#ffffff" p-id="10249"></path><path d="M512 970.105263c-29.642105 0-53.894737-24.252632-53.894737-53.894737V107.789474c0-29.642105 24.252632-53.894737 53.894737-53.894737s53.894737 24.252632 53.894737 53.894737v808.421052c0 29.642105-24.252632 53.894737-53.894737 53.894737z" fill="#ffffff" p-id="10250"></path></svg>
        </div>
        <div class="bottom-item" @click="activeChange(2)" :class="{'bottom-item-active': bottomActive[2]}">消息</div>
        <div class="bottom-item" @click="activeChange(3)" :class="{'bottom-item-active': bottomActive[3]}">我</div>
    </div>

</template>

<script setup lang="ts">
import {  reactive } from 'vue'
const bottomActive: boolean[] = reactive([true,false,false,false])
const activeChange = (index: number) => {
    for(let i=0;i<bottomActive.length;i++) {
        if(i!==index) bottomActive[i] = false
        else bottomActive[i] = true
    }
}

</script>

<style lang="scss" scoped>
.bottom-bar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding:  0.3rem ;
    
    font-size: 1.0rem;
   

    .bottom-item {
        width: 3rem;
        height: 2.3rem;
        line-height: 3rem;
        margin: 0 0.6rem;
        margin-bottom: 0.2rem;
        text-align: center;
        vertical-align: middle;

        svg {
            position: relative;
            width: 50%;
            height: 100%;
            
        }

    }
    .bottom-item-active {
        font-weight: bold;
        font-size: 1.1rem;
    }
    #bottom-btn {
        margin: 0 0.4rem;
        padding: 0 0.15rem;
        width: 2.8rem;
        border-radius: 25%;
        background-color: red;
    }
}
</style>