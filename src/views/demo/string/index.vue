<template>
    <div class="string">
        <span 
        v-for="(item,index) in stringList" 
        :key="index" 
        :style="{
            'opacity':item.opacity,
            'font-size':item.fontSize+'px',
            'letter-spacing':item.letterSpacing+'px',
            'font-weight':item.fontWeight
        }">{{item.label}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            stringList:[]
        }
    },
    methods:{
        initString(){
            this.stringList = []
            for(var i = 0 ; i < 1500 ; i++){
                this.stringList.push({
                    label:this.getRandomChineseWord(),
                    opacity:Math.random(),
                    fontSize:(Math.random()+1)*18,
                    letterSpacing:Math.random()*30,
                    fontWeight:Math.random()*400
                })
            }
        },
        getRandomChineseWord () {
            var _rsl = "";
            var _randomUniCode = Math.floor(Math.random() * (40870 - 19968) + 19968).toString(16);
            eval("_rsl=" + '"\\u' + _randomUniCode + '"');
            return _rsl;
        }
    },
    mounted(){
        this.initString()
    }
}
</script>

<style lang="scss" scoped>
.string{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top , #536976 , #292E49);
    overflow: hidden;
    span{
        color: white;
    }
}
</style>