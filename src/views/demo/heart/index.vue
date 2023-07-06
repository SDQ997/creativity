<template>
    <div class="heart">
        <div class="heartBlock heartBlockLeft">
            <div class="point" v-for="(item,index) in leftList" :key="index" :style="{'left':item.left,'top':item.top}"></div>
        </div>
        <div class="heartBlock heartBlockRight">
            <div class="point" v-for="(item,index) in rightList" :key="index" :style="{'left':item.left,'top':item.top}"></div>
        </div>
        <div class="heartBlock heartBlockCenter">
            <div class="point" v-for="(item,index) in centerList" :key="index" :style="{'left':item.left,'top':item.top}"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            leftList:[],
            rightList:[],
            centerList:[]
        }
    },
    methods:{
        initPoint(){
            for(var i = 0 ; i < 800 ; i++){
                this.leftList.push({
                    left:Math.random()*100+"%",
                    top:Math.random()*100+"%"
                })
            }
            for(var i = 0 ; i < 800 ; i++){
                this.rightList.push({
                    left:Math.random()*100+"%",
                    top:Math.random()*100+"%"
                })
            }
            for(var i = 0 ; i < 2000 ; i++){
                this.centerList.push({
                    left:Math.random()*100+"%",
                    top:Math.random()*100+"%"
                })
            }
        }
    },
    mounted(){
        this.initPoint()
    }
}
</script>

<style lang="scss" scoped>
.heart{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top , #536976 , #292E49);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .heartBlock{
        width: 300px;
        height: 150px;
        // background-color: rgb(215, 126, 219);
        border-top-left-radius: 200px;
        border-top-right-radius: 200px;
        position: absolute;
        overflow: hidden;
        // background-color:rgb(221, 115, 233);
        .point{
            width: 1.5px;
            height: 1.5px;
            position: absolute;
            animation-name:heartPoint;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            box-shadow: 0px 0px 10px rgb(225, 145, 239);
        }@keyframes heartPoint {
            0%{background-color: rgba(214, 100, 234 , .5);}
            50%{background-color: rgba(214, 100, 234 , 1);}
            100%{background-color: rgba(214, 100, 234 , .5);}
        }
    }
    .heartBlockLeft{
        transform: rotate(-45deg) translate(-25px , -200px);
    }
    .heartBlockRight{
        transform: rotate(45deg) translate(25px , -200px);
    }
    .heartBlockCenter{
        width: 300px;
        height: 300px;
        position: absolute;
        border-radius: 0;
        transform: rotate(45deg) translate(25px , 25px);
    }
}
</style>