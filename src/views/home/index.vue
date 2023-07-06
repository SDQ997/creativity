<template>
    <div class="home">
        <div class="item" v-for="(item,index) in itemList" :key="index" @click="toDemo(item)">
            <div class="itemImg">
                <img :src="item.img" alt="">
            </div>
            <div class="itemName">
                <span>{{item.name}}</span>
            </div>
            <div class="itemRemark">
                <span>{{item.remark}}</span>
            </div>
            <!-- <div class="itemTag" :class="item.type == 1 ? 'itemTag1' : 'itemTag2'">
                <span>{{item.type == 1 ? '原创' : '模仿'}}</span>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            itemList:[
                {
                    name:"随机文字",
                    remark:"随机的文字，随机的样式",
                    type:1,
                    img:require("../../assets/string.jpg"), 
                    path:"/string"
                },
                {
                    name:"鼠标跟随",
                    remark:"我正在看着你",
                    type:2,
                    img:require("../../assets/follow.png"),
                    path:"/follow"
                },
                {
                    name:"SWITCH",
                    remark:"来自各个网站,陆续补充中",
                    type:2,
                    img:require("../../assets/switch.png"),
                    path:"/switch"
                },
                {
                    name:"APPS",
                    remark:"来自各个网站的app-Icon",
                    type:2,
                    img:require("../../assets/apps.png"),
                    path:"/apps"
                },
                {
                    name:"keyBoard",
                    remark:"键盘",
                    type:2,
                    img:require("../../assets/keyboard.png"),
                    path:"/keyBoard"
                },
                {
                    name:"爱心",
                    remark:"一个由光点组成的爱心",
                    type:1,
                    img:require("../../assets/heart.png"),
                    path:"/heart"
                },
                {
                    name:"镜面效果",
                    remark:"妖魔鬼怪现原形",
                    type:2,
                    img:require("../../assets/mirror.png"),
                    path:"/mirror"
                },
                {
                    name:"高德立体楼房",
                    remark:"高德立体楼房",
                    type:2,
                    img:require("../../assets/mirror.png"),
                    path:"/map"
                },
            ]
        }
    },
    methods:{
        toDemo(item){
            this.$router.push({
                path:item.path
            })
        }
    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top , #536976 , #292E49);
    overflow: auto;
    .item{
        width: calc((100vw - 180px) / 5);
        margin-left: 30px;
        height: calc((100vw - 180px) / 5 * 1.2);
        margin-top: 30px;
        background-color: black;
        border-radius: 10px;
        display: inline-block;
        min-width: 150px;
        min-height: calc(150px * 1.2);
        overflow: hidden;
        cursor: pointer;
        transition: all .2s;
        position: relative;
        box-shadow: 0px 0px 10px 0px white;
        .itemTag{
            position: absolute;
            width: 100%;
            height: 25px;
            text-align: center;
            line-height: 25px;
            color: white;
            right: -40%;
            top: 4%;
            font-size: 12px;
            transform: rotate(45deg);
        }
        .itemTag1{
            background-color: rgb(11, 117, 5);
        }
        .itemTag2{
            background-color: rgb(31, 72, 185);
        }
        .itemImg{
            width: 100%;
            height: calc(100% - 80px);
            background-color: rgb(43, 43, 43);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
            }
        }
        .itemName{
            width: calc(100% - 20px);
            margin-left: 10px;
            height: 40px;
            line-height: 40px;
            color: white;
        }
        .itemRemark{
            width: calc(100% - 20px);
            margin-left: 10px;
            height: 40px;
            line-height: 40px;
            color: rgb(232, 232, 232);
            font-weight: 300;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
        }
    }
    .item:hover{
        transform: scale(1.1);
    }
}
</style>