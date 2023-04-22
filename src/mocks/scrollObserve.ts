import { ref } from 'vue'
/**
 * 监听元素是否加入视图
 * @returns 
 */
const useScrollObserve =  () => {
    //创建并绑定dom元素
    const target = ref<HTMLElement | null>(null)
    //定义回调事件
    let callBack: () => void = () => {}

    //触发回调
    const IO = new IntersectionObserver((entity, _) => {
        //判断是否进入视图
        if(entity[0].isIntersecting) {
            //移除监听
            if(target.value) {
                IO.unobserve(target.value)
            }
            //执行回调
            callBack()
        }
    })

    const setCallBack = (callback: () => void) => {
        //设置回调
        callBack = callback
    }

    const start = () => {
        //启动监听
        if(target.value) IO.observe(target.value)
    }

    return {
        target,
        setCallBack,
        start
    }
}

export default useScrollObserve

