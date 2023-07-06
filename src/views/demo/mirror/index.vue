<template>
    <div class="mirror">
        <div class="box">
            <video id="video" width="600" height="700"></video>
            <canvas id="canvas" width="600" height="700"></canvas>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            stream:null
        }
    },
    methods:{
        initVideo(){
            let video = document.getElementById('video');
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');
            const success = (stream)=>{
                this.stream = stream
                video.srcObject = stream;
                video.play();
            }
            const error = (e)=>{
                console.log("访问用户媒体失败");
                console.log(e)
            }
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
                this.getUserMedia({video:{width:600,height:700}},success,error)
            }else {
                console.log("不支持");
            }
        },
        getUserMedia(constraints,success,error){
            if(navigator.mediaDevices.getUserMedia){
                console.log(1);
                navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
            }else if (navigator.webkitGetUserMedia) {
                console.log(2);
                navigator.webkitGetUserMedia(constraints,success,error);
            }else if (navigator.mozGetUserMedia) {
                console.log(3);
                navigator.mozGetUserMedia(constraints,success,error);
            }else if (navigator.getUserMedia) {
                console.log(4);
                navigator.getUserMedia(constraints,success,error)
            }
        },
        destroyVideo(){
            this.stream.getTracks().forEach(function(track) {
                track.stop();
            });
        }
    },
    mounted(){
        this.initVideo()
    },
    beforeDestroy(){
        this.destroyVideo()
    }
}
</script>

<style lang="scss" scoped>
.mirror{
    width: 100%;
    height: 100%;
    background: linear-gradient(to top , #536976 , #292E49);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        width: 600px;
        height: 700px;
        background-color: black;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #fff;
        overflow: hidden;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25), 0px 8px 16px rgba(0, 0, 0, 0.15),
            0px 16px 32px rgba(0, 0, 0, 0.125);
        video{
            filter: blur(2px) saturate(0.6) brightness(1.1);
        }
    }
}
</style>