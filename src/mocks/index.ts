export interface mockDataItem {
    id: number,
    contentImg: string,
    content: string,
    nickName: string,
    loves: number,
    avatar: string,
}
//模拟数据
const mockData = () => {

let mockDataList :mockDataItem[]= 
    [
        {
            id: 1 + Date.now(),
            contentImg: '../../public/img/02d19c15-5ef5-40e1-9ae4-6bc1f8733282.jpg',
            content: '12345',
            nickName: '小黑',
            loves: Math.floor(Math.random()*1000),
            avatar: '../../public/img/1682061645462.jpg',
        },
        {
            id: 2 + Date.now(),
            contentImg: '../../public/img/0d4cf710-4384-4b45-8ba7-9668b3c7e342.jpg',
            content: '锄禾日当午，汗滴禾下土，谁知盘中餐，粒粒皆辛苦',
            nickName: '小红',
            loves: Math.floor(Math.random()*1000),
            avatar: '../../public/img/1682061645462.jpg',
        },
        {
            id: 3 + Date.now(),
            contentImg: '../../public/img/72ae0b45-1070-43b0-9970-c18f397a14eb.jpg',
            content: '问君能有几多愁，恰是一江春水向东流',
            nickName: '小白',
            loves: Math.floor(Math.random()*1000),
            avatar: '../../public/img/1682061645462.jpg',
        },
        {
            id: 4 + Date.now(),
            contentImg: '../../public/img/794afbbc-a2bd-438b-82bc-0dd092d6d4c1.jpg',
            content: '白日依山尽，黄河入海流，欲穷千里目',
            nickName: '小绿',
            loves: Math.floor(Math.random()*1000),
            avatar: '../../public/img/1682061645462.jpg',
        },
        {
            id: 5 + Date.now(),
            contentImg: '../../public/img/b81d5a58-3ae5-4ffa-9b1a-1f5cd5bec981.jpg',
            content: '哀吾生之',
            nickName: '小蓝',
            loves: Math.floor(Math.random()*1000),
            avatar: '../../public/img/1682061645462.jpg',
        },
        {
            id: 6 + Date.now(),
            contentImg: '../../public/img/bc9245d2-7694-4d41-8309-48204f988d62.jpg',
            content: '其真无马耶，其真不知马也',
            nickName: '小黄',
            loves: Math.floor(Math.random()*1000),
            avatar: '../../public/img/1682061645462.jpg',
        },
        {
            id: 7 + Date.now(),
            contentImg: '../../public/img/c14cfe08-41c3-4c73-828d-86b8b5d069d2.jpg',
            content: '❗❗❗❗❗❗❗❗❗❗❗❗',
            nickName: '小紫',
            loves: Math.floor(Math.random()*1000),
            avatar: '../../public/img/1682061645462.jpg',
        }, {
            id: 8 + Date.now(),
            contentImg: '../../public/img/R.gif',
            content: '全民制作人们，大家好，我是练习时长两年半的个人练习生，蔡徐坤，喜欢唱跳rap篮球🤪',
            nickName: '小坤',
            loves: Math.floor(Math.random()*1000),
            avatar: '../../public/img/1682061645462.jpg',
        },
        {
            id: 9 + Date.now(),
            contentImg: '../../public/img/02d19c15-5ef5-40e1-9ae4-6bc1f8733282.jpg',
            content: '12345',
            nickName: '小黑',
            loves: Math.floor(Math.random()*1000),
            avatar: '../../public/img/1682061645462.jpg',
        },
        {
            id: 10 + Date.now(),
            contentImg: '../../public/img/02d19c15-5ef5-40e1-9ae4-6bc1f8733282.jpg',
            content: '12345',
            nickName: '小黑',
            loves: Math.floor(Math.random()*1000),
            avatar: '../../public/img/1682061645462.jpg',
        },
        
       
    ]
    return mockDataList
}
    


export default mockData