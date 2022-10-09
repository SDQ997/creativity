<template>
    <div class="loading">
        <div class="button" @click="toHome">
            <span>ENTER</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        toHome(){
            this.$router.push({
                name:"home"
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.loading{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top , #536976 , #292E49);
    display: flex;
    align-items: center;
    justify-content: center;
    .button{
        padding: 10px 30px;
        color: #01D8E4;
        cursor: pointer;
        font-size: 30px;
        font-weight: 300;
        transition: all .2s;
        user-select: none;
    }
    .button:hover{
        background: #03e9f4;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
    }
    .button:active{
        padding: 6px 26px;
        font-size: 26px;
    }
}
</style>