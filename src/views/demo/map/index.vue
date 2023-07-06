<template>
    <div class="map" id="map"></div>
</template>

<script>
export default {
    data(){
        return{
            map:null
        }
    },
    methods:{
        initMap(){
            this.map = new AMap.Map('map',{
                zoom:18,
                center:[120.174943,30.322187],
                mapStyle: 'amap://styles/dark', //设置地图的显示样式
                viewMode:"3D",
                pitch:30
            });
            AMap.plugin([
                'AMap.Geolocation',
            ]);
        }
    },
    mounted(){
        this.initMap()
    }
}
</script>

<style lang="scss" scoped>
.map{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top , #536976 , #292E49);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>