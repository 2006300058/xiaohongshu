<template>
    <div class="waterfull" >
        <div  ref="domLeft">   
            <contentItem v-for="(item) in mockLeft"   :item="item" :key="item.id"/>
        </div>
        <div  ref="domRight">
            <contentItem v-for="(item) in mockRight" :item="item" :key="item.id" />
        </div>
    </div>

    <div class="loading"  :ref="bottomLoading.target" @click="getloadContent()"> 
        <svg t="1682158182892" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2624" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64"><path d="M792.2 545.2c0-17.1-13.9-31-31-31-16.4 0-29.8 12.7-31 28.8l-0.4-0.1c-17.2 119.4-127.7 202.6-247.3 185.8C362.7 711.9 279.2 601.1 296 481.3 312.9 361.5 423.7 278 543.5 294.9c33.6 4.7 64.4 16.9 90.9 34.5l-38.6 60.4c-1.9 2.9 0.7 6.6 4.1 5.9l145-31.7c2.1-0.5 3.4-2.5 3-4.6L716 213.8c-0.7-3.4-5.2-4.2-7-1.3l-41 64.2c-33.8-22.3-73-37.7-115.8-43.7-154-21.6-296.3 85.6-317.9 239.6-21.6 154 85.6 296.3 239.6 317.9 153.7 21.6 295.9-85.3 317.8-238.9h-0.1c0.4-2 0.6-4.2 0.6-6.4z" fill="" p-id="2625"></path></svg>
    </div>

</template>


<script setup lang="ts">
import useScrollObserve from '../mocks/scrollObserve'
import contentItem from './contentItem.vue';
import mockData from '../mocks';
import {ref, reactive, onMounted, nextTick} from 'vue'
import type {mockDataItem} from '../mocks'

//定义左右数据列表
let mockLeft: mockDataItem[] =  reactive([])
let mockRight: mockDataItem[] =  reactive([])
//定义左右dom元素
let domLeft = ref<HTMLElement | null>(null)
let domRight = ref<HTMLElement | null>(null)

//获取数据
const getloadContent = () => {
    setTimeout(() => {
        let datalist = mockData()
        loadContent(datalist)
    },1000)
}
//加载数据方法
const loadContent = async(datalist: mockDataItem[] ) => {

    console.log('加载')
    if(datalist && datalist.length <=0 ) {
        bottomLoading.start()
        console.log(0)
        return;
    }

    let leftH = (domLeft.value as HTMLElement).clientHeight
    let rightH = (domRight.value as HTMLElement).clientHeight

    if(leftH <= rightH) mockLeft.push(datalist.shift() as mockDataItem)
    else mockRight.push(datalist.shift() as mockDataItem)
    
    console.log(mockLeft)
    console.log(mockRight)
    //在DOM更新后执行异步回调函数，
    await nextTick()
    loadContent(datalist)
}


//给底部按钮绑定监听事件
const bottomLoading = useScrollObserve()
onMounted(() => {
    bottomLoading.setCallBack(() => getloadContent())
    bottomLoading.start()
})



</script>


<style lang="scss" scoped>
.waterfull {
    column-count: 2;
    column-gap: 0.1rem;
}
.loading {
    text-align: center;

    svg {
        width: 1.4rem;
        height: 1.4rem;
        animation: loading 1s infinite linear;
    }

    @keyframes loading {
        0% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>